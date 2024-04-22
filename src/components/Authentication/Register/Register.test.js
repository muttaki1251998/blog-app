import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Register from "./Register";

describe("snapshot", () => {
  it("should pass snapshot tests", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe("component tests", () => {
//   it("should show error message when username is short", async () => {
//     render(
//       <Provider store={store}>
//         <Register />
//       </Provider>
//     );
//     const usernameInput = screen.getByTestId("username");
//     fireEvent.change(usernameInput, { target: { value: "a" } });
//     fireEvent.blur(usernameInput);

//     expect(
//       await screen.findByText("This field cannot be empty", {}, {timeout: 400})
//     ).toBeInTheDocument();
//   });
// });
