import { RouteObject } from "react-router-dom";
import { NavLink } from "../components/UI/Navbar";
import { ExerciseDetail } from "../pages/ExerciseDetail";
import { Home } from "../pages/Home";

const rootRoute = {
  path: "/",
  element: <Home />,
  // errorElement: <p>Se chavó esto :/</p>
};

const exercisesRoutes: RouteObject = {
  path: "/exercises",
  element: <p>Exercises, <NavLink text="Home" path="/" /></p>,
};

const exerciseDetailRoute: RouteObject = {
  path: "/exercises/:exerciseId",
  element: <ExerciseDetail />
};

export const globalRoutes = [rootRoute, exercisesRoutes, exerciseDetailRoute];
