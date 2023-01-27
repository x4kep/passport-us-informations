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
import Typography from "@mui/material/Typography";
import nationalities from "../../data/nationalities.json";

function Main() {
  return (
    <main className="main">
      <div className="get-started-container">
        <Typography
          sx={{
            pt: 3,
            textAlign: "center",
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: 0,
            textTransform: "uppercase",
          }}
        >
          Get started
        </Typography>
        <div className="get-started-container__content">
          <Box sx={{ pt: 2 }}>
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
                {Object.keys(nationalities).map((item, pos) => {
                  return (
                    <option value={item} key={pos}>
                      {nationalities[item]}
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
          </Box>
          <Box sx={{ pt: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I have more then 1 citizenship"
              />
            </FormGroup>
          </Box>
          <Box sx={{ pt: 2 }}>
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
            <Link className="nav-link nav-link--white" to="/summary">
              <Button variant="contained" size="large" fullWidth>
                Continue
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </main>
  );
}

export default Main;
