const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

module.exports = {
  getLogin: async (req, res) => {
    if (req.user) {
      return res.redirect("/profile");
    }
    res.render("login", {
      title: "Login",
    })
  },
  postLogin: (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (validator.isEmpty(req.body.password))
      validationErrors.push({ msg: "Password cannot be blank." });

    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      return res.status(400).json(validationError);
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    passport.authenticate("local", (err, user, info) => {
      if (err) {
        res.status(400).json(err);
        return next(err);
      }
      if (!user) {
        return res.status(400).json(info);
      }
      req.logIn(user, (err) => {
        if (err) {
          res.status(400).json(err);
          return next(err);
        }
        res.status(200).json({ success: true, msg: "Success! You are logged in." });
      });
    })(req, res, next);
  },
  logout: (req, res) => {
    req.logout(() => {
      console.log('User has logged out.')
    })
    req.session.destroy((err) => {
      if (err)
        console.log("Error : Failed to destroy the session during logout.", err);
      req.user = null;
      res.redirect("/");
    });
  },
  getSignup: async (req, res) => {
    if (req.user) {
      return res.redirect("/profile");
    }
    res.render("signup", {
      title: "CreateAccount",
    })
  },
  postSignup: (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });

    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      console.log(validationErrors)
      return res.redirect("/auth/signup");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });

    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    User.findOne(
      { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
      (err, existingUser) => {
        if (err) {
          return next(err);
        }
        if (existingUser) {
          req.flash("errors", {
            msg: "Account with that email address or username already exists.",
          });
          return res.redirect("/auth/signup");
        }
        user.save((err) => {
          if (err) {
            return next(err);
          }
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            res.redirect("/");
          });
        });
      }
    );
  }
}
