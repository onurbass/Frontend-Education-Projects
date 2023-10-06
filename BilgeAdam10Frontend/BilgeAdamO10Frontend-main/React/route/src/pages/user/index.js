import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/home");
  };

  return <button onClick={onClickHome}>Go to Home</button>;
};

export default User;
