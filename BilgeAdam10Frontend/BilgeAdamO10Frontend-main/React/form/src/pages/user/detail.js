import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card } from "antd";

import { getUser } from "../../services/user";

const UserDetail = () => {
  const { userid, username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(username);
    getUser(userid).then((response) => {
      setUser(response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Card
      title={`${user.firstname} ${user.lastname}`}
      style={{
        width: 300,
      }}
    >
      {user.gender}
    </Card>
  );
};

export default UserDetail;
