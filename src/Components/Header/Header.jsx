import "./header.css";
import logoM6 from "../../assets/Images/M6-logo.jpg";
const Header = () => {
  return (
    <header>
      <img src={logoM6} alt="logo de M6" />
      <h1>M6</h1>
    </header>
  );
};

export default Header;
