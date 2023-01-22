import { NavLink } from "../components/UI/Navbar";
import { Home } from "../pages/Home";

const rootRoute = {
  path: "/",
  element: <Home />,
  // errorElement: <p>Se chavó esto :/</p>
};

const exercisesRoutes = {
  path: "/exercises",
  element: <p>Exercises, <NavLink text="Home" path="/" /></p>
}

export const globalRoutes = [rootRoute, exercisesRoutes];
