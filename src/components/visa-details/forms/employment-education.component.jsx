import { Divider, Typography, Container } from "@mui/material";

function EmploymentEducation() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        p: 2,
        pb: 4,
      }}
    >
      <Typography variant="h4">Employment Education</Typography>
      <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
    </Container>
  );
}

export default EmploymentEducation;
