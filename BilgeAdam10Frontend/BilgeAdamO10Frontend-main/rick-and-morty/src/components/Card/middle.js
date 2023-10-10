const Middle = ({ title, href, description }) => {
  return (
    <div className="middle">
      <h3>{title}</h3>
      <a href={href} target="_blank" rel="noreferrer noopener">
        {description}
      </a>
    </div>
  );
};

export default Middle;
