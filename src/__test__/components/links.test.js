import { render, screen } from "@testing-library/react";
import Links from "components/links";
import links from "./data";

test("should render links component", () => {
  render(<Links links={links} />);

  const linkItem = screen.getByText(links[0].name);

  console.log(linkItem);

  expect(linkItem.innerHTML).toBe("GitHub");
});
