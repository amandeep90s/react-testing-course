import PropTypes from "prop-types";
import React from "react";

const UserList = ({ users }) => {
  const renderedUsers = users.map((user, index) => {
    return (
      <tr key={`${user.name}-${index}`}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
