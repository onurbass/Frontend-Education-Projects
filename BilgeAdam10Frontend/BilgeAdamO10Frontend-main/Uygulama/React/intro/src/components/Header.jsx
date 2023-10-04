const Header = ({ className, myList }) => {
  return (
    <header className={className}>
      <nav>
        <ul>
          <li>
            <a href={`#${myList[0]}`}>{myList[0]}</a>
          </li>
          <li>
            <a href={`#${myList[1]}`}>{myList[1]}</a>
          </li>
          <li>
            <a href={`#${myList[2]}`}>{myList[2]}</a>
          </li>
          <li>
            <a href={`#${myList[3]}`}>{myList[3]}</a>
          </li>
          <li>
            <a href={`#${myList[4]}`}>{myList[4]}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
