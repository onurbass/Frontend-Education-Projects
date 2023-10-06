const Header = ({ className, children, ...otherProps }) => {
  return (
    <header className={className} {...otherProps}>
      {children}
    </header>
  );
};

export default Header;
