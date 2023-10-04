const Paragraph = ({ style, className, children, ...otherProps }) => {
  return (
    <p className={className} style={style} {...otherProps}>
      {children}
    </p>
  );
};

export default Paragraph;
