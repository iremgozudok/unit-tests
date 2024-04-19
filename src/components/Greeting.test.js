import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // arrange
    render(<Greeting />);

    // act
    // ... nothing

    // assert
    const helloWorldElement = screen.getByText("Hello, World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("good to see you", { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    // buttonElement.click(); this is working too
    userEvent.click(buttonElement);

    // assert
    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const paragraphElement = screen.queryByText("good to see you", { exact: false });
    expect(paragraphElement).toBeNull();
  } );
});
