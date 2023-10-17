import useAuth from "../../hooks/auth"

const AuthComp = ({ authKey, children }) => {
  const checkAuth = useAuth(authKey);

  return checkAuth && children;
};

export default AuthComp;
