import "./footer.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <footer className="footer">
      <Link className="nav-link" to="/">
        <div className="logo logo--spaced">
          <Logo className="logo__icon" alt="Travel info logo"></Logo>
          <span className="logo__title logo__title--inverse">travel info</span>
        </div>
      </Link>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography>
          Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left", mb: 3 }}>
        <Typography>
          Disclaimer: GovAssist was developed to provide visitors from all over
          the world with information about immigration topics.
          https://govassist.com is not affiliated with the United States
          Department of State (US DOS), the United States Department of Homeland
          Security (US DHS), the United States Citizenship & Immigration
          Services (USCIS), or any other United States governmental agency. Your
          access to the website is subject to our Terms of Use and Conditions.
          Communications between you and GovAssist are protected by our Privacy
          Policy but not by the attorney-client privilege or as work product.
          Listed purchase prices for application preparation assistance services
          do NOT include any government application, medical examination fee,
          filing, or biometrics fees. Neither govassist.com nor its employees
          claim to have any special knowledge of immigration law or procedure.
          GovAssist is affiliated with the UT law firm GovAssist Legal which
          provides legal services on immigration matters. Only licensed
          immigration professionals can provide advice, explanation, opinion, or
          recommendation about possible legal rights, remedies, defenses,
          options, selection of forms or strategies.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <div className="navigation">
          <Link className="nav-link" to="/terms-conditions">
            Terms Conditions
          </Link>
          <span className="nav-link-spacer">|</span>
          <Link className="nav-link" to="/policy-privacy">
            Policy Privacy
          </Link>
          <span className="nav-link-spacer">|</span>
          <Link className="nav-link" to="/policy-refund">
            Policy Refund
          </Link>
          <span className="nav-link-spacer">|</span>
          <Link className="nav-link" to="/legal-disclamer">
            Legal Disclaimer
          </Link>
          <span className="nav-link-spacer">|</span>
          <Link className="nav-link" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </Box>
    </footer>
  );
}

export default Footer;
