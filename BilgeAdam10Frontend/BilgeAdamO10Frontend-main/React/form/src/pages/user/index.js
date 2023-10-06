import React, { useContext, useEffect, useState } from "react";

import UserTable from "./table";

import { addUser, getUsers } from "../../services/user";

import PermissionContext from "../../context/PermissionContext";

import "./index.scss";

const User = () => {
  const { permissions } = useContext(PermissionContext);
  const [users, setUsers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      gender: e.target.gender.value,
    };
    addUser(data).then((response) => {
      setUsers((prevState) => [...prevState, response]);
    });
  };

  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);

  return (
    <div className="user">
      {permissions.some((p) => p === "user.form.visible") && (
        <form onSubmit={onSubmit}>
          <input type="text" name="firstname" />
          <input type="text" name="lastname" />
          <select name="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <button type="submit">Save</button>
        </form>
      )}
      <UserTable data={users} />
    </div>
  );
};

export default User;
