import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import HelpIcon from "@mui/icons-material/Help";
import Popover from "@mui/material/Popover";
import * as React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  NativeSelect,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";

function ApplicationInformation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box sx={{ pt: 2, pl: 2, fontSize: 30 }}>
        <Typography sx={{ fontSize: 30 }}>General Information</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} paddingBottom={2}>
            <Box sx={{ display: "flex", alignItems: "end" }}>
              <TextField
                label="Email Address"
                variant="standard"
                sx={{ minWidth: "250px" }}
              />
              <HelpIcon onClick={handleClick} sx={{ marginLeft: 1 }} />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                Please add a personal email address that your use frequently.
              </Popover>
            </Box>
            <Typography sx={{ pt: 1, fontSize: 12 }}>
              Please make sure you enter a valid email address. We will use it
              to contact you about your application.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ pt: 2, borderColor: "#1976d2" }} />
      </Box>
      <Box sx={{ pt: 2, pl: 2 }}>
        <Typography sx={{ fontSize: 30 }}>Application information</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="First (given) Name(s)" variant="standard" />
            <Typography sx={{ pt: 1, fontSize: 12 }}>
              Please make sure the first name(s) are exactly as shown on your
              passport or travel document
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Family name(s)" variant="standard" />
            <Typography sx={{ pt: 1, fontSize: 12 }}>
              Please make sure the family name(s) are exactly as shown on your
              passport or travel document.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full name in native alphabet"
              variant="standard"
              sx={{ minWidth: "210px" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Does not apply"
              sx={{ mt: 1, ml: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  label="Have you ever used other names (I.E., maiden, religious, professional, alias, etc.) ?"
                  labelPlacement="start"
                  sx={{ margin: 0 }}
                />
              </FormGroup>
              <HelpIcon onClick={handleClick} sx={{ marginLeft: 1 }} />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                Please list out all names that you used in past.
              </Popover>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  label="Do you have a telecode that represents your name?"
                  labelPlacement="start"
                  sx={{ margin: 0 }}
                />
              </FormGroup>
              <HelpIcon onClick={handleClick} sx={{ marginLeft: 1 }} />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                Please list out all names that you used in past.
              </Popover>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel id="radio-btn-gender">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="radio-btn-gender"
                name="radio-btn-gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "end",
                }}
              >
                <HelpIcon onClick={handleClick} sx={{ position: "relative" }} />
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Marital Status
                </InputLabel>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  A marriage must be recognized under of law of country where it
                  was performed and under US law.
                </Popover>
              </Box>
              <Box>
                <NativeSelect
                  defaultValue="Married"
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value="Married">Married</option>
                  <option value="Common law marriage">
                    Common law marriage
                  </option>
                  <option value="civil union/domestic partnership">
                    Civil union/domestic partnership
                  </option>
                  <option value="single">Single</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                  <option value="legally separated">Legally separated</option>
                  <option value="Other">Other</option>
                </NativeSelect>
              </Box>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              label="Day of birth"
              type="date"
              defaultValue="1992-01-01"
              variant="standard"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City of birth"
              variant="standard"
              sx={{ maxWidth: "300px" }}
            />
            <Typography sx={{ pt: 1, fontSize: 12 }}>
              If you can't find this listed on your passport, enter the name of
              the city/town/village where you were born
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State/Region/province of birth"
              variant="standard"
              sx={{ minWidth: "250px" }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Does not apply"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} paddingBottom={4}>
            <TextField
              label="County of birth"
              variant="standard"
              sx={{ minWidth: "250px" }}
            />
            <Typography sx={{ pt: 1, fontSize: 12 }}>
              Please choose the country you were born in, as per your travel
              documents.
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </>
  );
}

export default ApplicationInformation;
