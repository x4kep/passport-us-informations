import { Container, Divider, Typography } from "@mui/material";

function UsContract() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        p: 2,
        pb: 4,
      }}
    >
      <Typography variant="h4">Us Contract</Typography>
      <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
    </Container>
  );
}

export default UsContract;
