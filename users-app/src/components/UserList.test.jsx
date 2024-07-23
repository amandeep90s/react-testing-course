import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("should render one row per user", () => {
  const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Alex", email: "alex@example.com" },
  ];
  render(<UserList users={users} />);

  //   screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("should render the email and name of each user", () => {});
