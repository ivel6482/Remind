import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar } from "./components/UI/Navbar";


const router = createBrowserRouter([{
  path: "/",
  element: <Navbar />
}]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
