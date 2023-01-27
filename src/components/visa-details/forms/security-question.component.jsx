import {
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

function SecurityQuestion() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        p: 2,
        pb: 4,
      }}
    >
      <Typography variant="h4">Security Question</Typography>
      <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
      <Grid container size={3}>
        <Grid item xs={12}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            sx={{ pt: 2, alignItems: { md: "center", xs: "left" } }}
          >
            <Typography
              className="form-input-label"
              maxWidth={{ md: "70%", xs: "100%" }}
            >
              1) Have you ever served in the military ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel
                value="noo"
                control={<Radio />}
                label="No"
                defaultChecked
              />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            sx={{ pt: 2, alignItems: { md: "center", xs: "left" } }}
          >
            <Typography
              className="form-input-label"
              maxWidth={{ md: "70%", xs: "100%" }}
            >
              2) Have you traveled outside your country (not including the
              united states) in the last 5 years ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel
                value="noo"
                control={<Radio />}
                label="No"
                defaultChecked
              />
            </RadioGroup>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SecurityQuestion;
