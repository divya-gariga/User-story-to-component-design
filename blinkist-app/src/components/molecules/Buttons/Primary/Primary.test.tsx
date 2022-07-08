import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Primary from "./Primary";

test("calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(
    <Primary
      label={"Finished"}
      displayElement={{ display: "" }}
      buttonBorderRadius={{ borderRadius: "0px 0px 8px 8px" }}
      onClickHandler={handleClick}
    />
  );
  fireEvent.click(screen.getByText(/Finished/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(screen.getByText(/Finished/i)).toBeInTheDocument();
});
