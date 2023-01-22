import { Navbar } from "../components/UI/Navbar";

const rootRoute = {
  path: "/",
  element: <Navbar />,
  errorElement: <p>Se chavó esto :/</p>
};

export const globalRoutes = [rootRoute];
