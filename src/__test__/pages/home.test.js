import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "./test-utils";
import Home from "pages/home";

test("should render home component", () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  const Component = () => <RouterProvider router={router} />;

  render(<Component />);

  const welcomeText = screen.getByText("Welcome to Multilinks");

  expect(welcomeText).toBeInTheDocument();
});
