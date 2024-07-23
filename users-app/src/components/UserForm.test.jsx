import { render, screen } from "@testing-library/react";
import {
  default as UserEvent,
  default as userEvent,
} from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("When evrything is OK", () => {
  test("should shows two inputs and a button", () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("should first", async () => {
    const mock = jest.fn();

    render(<UserForm onAddUser={mock} />);

    const [nameInput, emailInput] = screen.getAllByRole("textbox");

    userEvent.click(nameInput);
    userEvent.keyboard("John Doe");

    userEvent.click(emailInput);
    userEvent.keyboard("john@example.com");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
    });
  });
});
