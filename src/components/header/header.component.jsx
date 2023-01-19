import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

function Header() {
  return (
    <header className="header">
      <Link className="nav-link" to="/">
        <div className="logo">
          <Logo className="logo__icon" alt="Travel info logo"></Logo>
          <span className="logo__title">travel info</span>
        </div>
      </Link>
      <div className="header__settings">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <NativeSelect
              className="native-select--light"
              variant="standard"
              defaultValue={1}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={1}>English</option>
              <option value={2}>Nederlands</option>
              <option value={3}>Français</option>
              <option value={4}>Deutsch</option>
              <option value={5}>Italiano</option>
              <option value={6}>Русский</option>
              <option value={7}>Español</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ ml: 3 }}>
          <Button variant="contained">
            <Link className="nav-link nav-link--white" to="/support">
              Support
            </Link>
          </Button>
        </Box>
      </div>
    </header>
  );
}

export default Header;
