const Image = ({ src, alt, className, ...otherProps }) => {
  return <img src={src} className={className} alt={alt} {...otherProps} />;
};

export default Image;
