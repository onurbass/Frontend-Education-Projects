import { Link } from "react-router-dom";

const UserTable = ({ data = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, firstname, lastname, gender }) => (
          <tr key={id}>
            <td>
              <Link to={`/user/${id}/${firstname}`}>{id}</Link>
            </td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
