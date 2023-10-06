import React, { useState, useEffect } from "react";

import UserCard from "../../components/UserCard";

import { getUsers } from "../../service/user";

import "./index.scss";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);
  return (
    <div className="user">
      {users.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
};

export default User;
