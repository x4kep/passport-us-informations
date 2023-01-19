import "./main.styles.scss";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function Main() {
  return (
    <main className="main">
      <div className="get-started-container">
        <div className="get-started-container__header">
          <h1 className="get-started-container__header-title">Get Started</h1>
        </div>
        <div className="get-started-container__content">
          <Box sx={{ pb: 2 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                What is your citizenship ?
              </InputLabel>
              <NativeSelect
                className="native-select--light"
                variant="standard"
                defaultValue={1}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={0}>Please choose citizenship</option>
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
          <Box sx={{ pb: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I have more then 1 citizenship"
              />
            </FormGroup>
          </Box>
          <Box sx={{ pb: 2 }}>
            <FormControl component="fieldset" variant="standard">
              <FormLabel component="legend">
                Select reason(s) for travel to United States
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="tourism-or-visit" />}
                  label="Tourism or visit"
                />
                <FormControlLabel
                  control={<Checkbox name="business" />}
                  label="Business"
                />
                <FormControlLabel
                  control={<Checkbox name="transit" />}
                  label="Transit"
                />
                <FormControlLabel
                  control={<Checkbox name="study" />}
                  label="Study"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" size="large" fullWidth>
              <Link className="nav-link nav-link--white" to="/support">
                Continue
              </Link>
            </Button>
          </Box>
        </div>
      </div>
    </main>
  );
}

export default Main;
