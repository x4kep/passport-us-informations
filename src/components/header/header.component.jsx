import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="nav-link" to="/">
        <div className="logo">
          <Logo className="logo__icon" alt="Travel info logo"></Logo>
          <span className="logo__title">travel info</span>
        </div>
      </Link>
      <Link className="nav-link" to="/support">
        Support
      </Link>
    </header>
  );
}

export default Header;
