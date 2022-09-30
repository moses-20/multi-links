import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getUser from "../services/getUser";
import ErrorPage from "./error";
import Home from "./home";
import User from "./user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:username",
    element: <User />,
    errorElement: <ErrorPage message="User not found" />,
    loader: getUser,
  },
]);

function Page() {
  return <RouterProvider router={router} />;
}

export default Page;
