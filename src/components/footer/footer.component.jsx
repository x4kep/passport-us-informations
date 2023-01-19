import "./footer.styles.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="navigation">
        <Link className="nav-link" to="/terms-conditions">
          Terms Conditions
        </Link>
        <Link className="nav-link" to="/policy-privacy">
          Policy Privacy
        </Link>
        <Link className="nav-link" to="/policy-refund">
          Policy Refund
        </Link>
        <Link className="nav-link" to="/legal-disclamer">
          Legal Disclamer
        </Link>
        <Link className="nav-link" to="/contact-us">
          ContactUs
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
