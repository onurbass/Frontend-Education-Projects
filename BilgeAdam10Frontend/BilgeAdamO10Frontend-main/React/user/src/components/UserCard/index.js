import "./index.scss";

const UserCard = ({
  username,
  address: { city, street, suite, zipcode },
  company,
  email,
  name,
  phone,
  photo,
  website,
}) => {
  return (
    <div className="userCard">
      <div className="userCard-info">
        <img src={photo} alt={username} />
        <div>
          <h2>{name}</h2>
          <h4>
            {username} | {email}
          </h4>
        </div>
      </div>
      <div className="userCard-contact">
        <h4>
          {city} {street}
          <br />
          {suite} {zipcode}
        </h4>
        <h4>
          <a href={`tel:${phone}`}>{phone}</a>
        </h4>
      </div>
      <div className="userCard-job">
        <h4>{company.name}</h4>
        <h4>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default UserCard;
