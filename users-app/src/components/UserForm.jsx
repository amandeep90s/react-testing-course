import PropTypes from "prop-types";
import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 15 }}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 15 }}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 15 }}>
        <input type="submit" value="Add User" />
      </div>
    </form>
  );
};

UserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default UserForm;
