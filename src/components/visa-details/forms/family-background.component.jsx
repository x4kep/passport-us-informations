import { Container, Divider, Typography } from "@mui/material";

function FamilyBackground() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        p: 2,
        pb: 4,
      }}
    >
      <Typography variant="h4">Family Background</Typography>
      <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
    </Container>
  );
}

export default FamilyBackground;
