import React from "react";
import { render, screen } from "@testing-library/react";
import BookCards from "./BookCards";
import PersonAvatar  from "../../atoms/Icons/PersonAvatar/PersonAvatar.svg";

test("rendering the Bookcard", () => {
  render(
    <BookCards
      img={"assets/beingboss.png"}
      increasedHeight="310px"
      title={"Being Boss"}
      author={"Kathleen Shannon and Emily"}
      readTime={"13-minutes read"}
      readCount={"16k reads"}
      personAvatar={PersonAvatar}
    />
  );
  expect(screen.getByText(/Being Boss/i)).toBeInTheDocument();
  expect(screen.getByText(/Kathleen Shannon and Emily/i)).toBeInTheDocument();
  expect(screen.getByText(/13-minutes read/i)).toBeInTheDocument();
});
