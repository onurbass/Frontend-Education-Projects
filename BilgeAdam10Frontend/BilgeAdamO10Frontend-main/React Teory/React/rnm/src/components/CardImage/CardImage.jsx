import "./CardImage.css";

const CardImage = ({ src, alt }) => {
  return (
    <div className="card-image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default CardImage;
