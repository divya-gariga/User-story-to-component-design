import React from "react";
import PersonAvatar  from "../../components/atoms/Icons/PersonAvatar/PersonAvatar.svg";

import { ComponentMeta } from "@storybook/react";

import BookCardReader from "./BookCards";

export default {
  title: "Molecules",
  component: BookCardReader,
} as ComponentMeta<typeof BookCardReader>;
export const BookCard = () => (
  <BookCardReader
    img={"assets/beingboss.png"}
    increasedHeight="310px"
    title={"Being Boss"}
    author={"Kathleen Shannon and Emily"}
    readTime={"13-minutes read"}
    readCount={"16k reads"}
    personAvatar={PersonAvatar}
  />
);
