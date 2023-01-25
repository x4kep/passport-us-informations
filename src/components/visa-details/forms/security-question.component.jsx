import { Divider, Typography } from "@mui/material";
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
    </Container>
  );
}

export default SecurityQuestion;
