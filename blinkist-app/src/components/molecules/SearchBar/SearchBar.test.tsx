import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

it("Is searchbar is visible", async () => {
    // render(<SearchBar icon="search"></SearchBar>);
    const text = screen.getByPlaceholderText("Search by title or author");
    const search = screen.getByTestId("search");
    expect(text).toBeInTheDocument();
    expect(search).toBeInTheDocument();
});