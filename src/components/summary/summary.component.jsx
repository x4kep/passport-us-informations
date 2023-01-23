import "./summary.styles.scss";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import NativeSelect from "@mui/material/NativeSelect";

function Summary() {
  return (
    <main className="main">
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
        Summary
      </Typography>
      <Box
        sx={{
          pt: 3,
          pl: 23,
          pr: 23,
          display: "flex",
          justifyContent: "space-between",
          color: "#5e5e5e",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>Your nationality</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Pakistan O</Typography>
      </Box>
      <Box sx={{ pt: 2, pl: 23, pr: 23 }}>
        <NativeSelect
          sx={{ width: "100%" }}
          className="native-select--light"
          variant="standard"
          defaultValue={1}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value="B1">B1 Business Visa</option>
          <option value="B2">B2 Tourism Visa</option>
          <option value="B1B2">B1/B2 Business/Tourism</option>
          <option value="C1">C1 Transit Visa</option>
          <option value="C1_D">C1/D Transit/Crewmember</option>
          <option value="D1">D1 Crewmember Visa</option>
          <option value="D2">D2 Crewmember Visa</option>
          <option value="F1">F1 Student Visa</option>
          <option value="F2_CH">Child of an F1 (F2)</option>
          <option value="F2_SP">Spouse of an F1 (F2)</option>
          <option value="J1">J1 Exchange visitor</option>
          <option value="J2_CH">Child of a J1 (J2)</option>
          <option value="J2_SP">Spouse of a J1 (J2)</option>
          <option value="M1">M1 Vocational/Non-Academic Visa</option>
          <option value="M2_CH">Child of a M1 (M2)</option>
          <option value="M2_SP">Spouse of a M1 (M2)</option>
          <option value="I">I Foreign media representative</option>
          <option value="I_CH">Child of an I (I)</option>
          <option value="I_SP">Spouse of an I (I)</option>
        </NativeSelect>
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 23,
          pr: 23,
          display: "flex",
          justifyContent: "space-between",
          color: "#5e5e5e",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>Max Length of Stay:</Typography>
        <Typography sx={{ fontWeight: "bold" }}>180 Days</Typography>
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 23,
          pr: 23,
          display: "flex",
          justifyContent: "space-between",
          color: "#5e5e5e",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>Recommended Visa Type:</Typography>
        <Typography sx={{ fontWeight: "bold" }}>B2 Tourism Visa</Typography>
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 23,
          pr: 23,
          color: "#5e5e5e",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>
          General information about Visa Type:
        </Typography>
        <Typography
          sx={{ pt: 2, fontSize: 12, fontWeight: 500, color: "#5e5e5e" }}
        >
          The B1 and B2 Visas are issued to temporary travellers for tourism,
          business, and medical visits. This visa type allows multiple entries
          over the course of validity as long as no stay exceeds six months.
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 23,
          pr: 23,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#5e5e5e",
        }}
      >
        <Typography variant="string" sx={{ fontSize: 14 }}>
          Change Visa Type:
        </Typography>
        <FormControlLabel
          control={<Switch sx={{ position: "relative", left: "25px" }} />}
        />
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 23,
          pr: 23,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#5e5e5e",
        }}
      >
        <Typography variant="string" sx={{ fontSize: 14 }}>
          Change Visa Type:
        </Typography>
        <NativeSelect
          sx={{ width: "200px" }}
          className="native-select--light"
          variant="standard"
          defaultValue={1}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value="B1">B1 Business Visa</option>
          <option value="B2">B2 Tourism Visa</option>
          <option value="B1B2">B1/B2 Business/Tourism</option>
          <option value="C1">C1 Transit Visa</option>
          <option value="C1_D">C1/D Transit / Crew member</option>
          <option value="D1">D1 Crew member Visa</option>
          <option value="D2">D2 Crew member Visa</option>
          <option value="F1">F1 Student Visa</option>
          <option value="F2_CH">Child of an F1 (F2)</option>
          <option value="F2_SP">Spouse of an F1 (F2)</option>
          <option value="J1">J1 Exchange visitor</option>
          <option value="J2_CH">Child of a J1 (J2)</option>
          <option value="J2_SP">Spouse of a J1 (J2)</option>
          <option value="M1">M1 Vocational/Non-Academic Visa</option>
          <option value="M2_CH">Child of a M1 (M2)</option>
          <option value="M2_SP">Spouse of a M1 (M2)</option>
          <option value="I">I Foreign media representative</option>
          <option value="I_CH">Child of an I (I)</option>
          <option value="I_SP">Spouse of an I (I)</option>
        </NativeSelect>
      </Box>
      <Box sx={{ pt: 3, pl: 20, pr: 20 }}>
        <Link className="nav-link nav-link--white" to="/visa-details">
          <Button variant="contained" size="large" fullWidth>
            Apply now
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          pt: 2,
          pl: 5,
          pr: 5,
          fontSize: 12,
          fontWeight: 500,
          color: "#5e5e5e",
        }}
      >
        <Typography variant="string">
          Please be aware that embassies' schedules may be affected due to the
          Covid-19 pandemic. However, we highly recommend applying now rather
          than wait as we are constantly monitoring and assisting our customers
          in getting the earliest available appointments.
        </Typography>
      </Box>
    </main>
  );
}

export default Summary;
