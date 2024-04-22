import React from "react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Addpost from "./Addpost";

describe("snapshot", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Addpost />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Addpost Component", () => {
  test("initial UI is rendered as expected", () => {
    render(<Addpost />);
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByText("Create")).toBeInTheDocument();
  });
  it("should show errors when inputting wrong texts", async () => {

      render(<Addpost />);
      const titleInput = screen.getByTestId("title");

      fireEvent.change(titleInput, { target: { value: "Ab" } });
      fireEvent.blur(titleInput);

      expect(
        await screen.findByText("Too Short!", {}, { timeout: 500 })
      ).toBeInTheDocument();

  });
});
