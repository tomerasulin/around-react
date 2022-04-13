import logo from "../images/HeaderLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__image" alt="Around the U.S. logo" src={logo} />
    </header>
  );
};

export default Header;
