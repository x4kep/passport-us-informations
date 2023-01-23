import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";

const steps = [
  "Application Information",
  "Passport Information",
  "Contact Information",
  "Trip Details",
  "U.S Contact",
  "Family Background",
  "Employment / Education",
  "Security Questions",
  "Review & Certification",
];

const VisaDetails = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container maxWidth="false" sx={{ bgcolor: "#fff", color: "#5e5e5e" }}>
      <Box sx={{ pl: "10%", pr: "10%", pb: 4, textAlign: "center" }}>
        <Typography sx={{ pt: 5, fontSize: "20px" }}>
          Welcome, you are entitled to a United States Nonimmigrant Visa!
        </Typography>
        <Typography sx={{ pt: 2, fontSize: "14px" }}>
          Exclusively for tourism, visit, medical treatment, business (max. 6
          months stay) transit or crew member (max. 29 days stay), study or
          exchange program.
        </Typography>
        <Typography sx={{ pt: 2, fontSize: "14px" }}>
          <strong>Renewal with Interview Waiver:</strong> use this form if you
          have a valid U.S. visa and want to renew it. Embassy interview
          attendance is <strong>also not required</strong> if your visa has{" "}
          <strong>expired</strong> in the last <strong>12 to 48 months</strong>
          (depending on your citizenship).
        </Typography>
        <Typography sx={{ pt: 2, pb: 2, fontSize: "14px" }}>
          All questions must be answered in English using only English-language
          characters, <strong>except</strong> when you are asked for your full
          name in your native alphabet.
        </Typography>
        <Typography
          sx={{
            pt: 2,
            pb: 2,
            fontSize: "14px",
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
          }}
        >
          <strong>Groups / Family:</strong> Currently there is no grouping on
          our forms, please submit your applications individually for each
          person.
        </Typography>
      </Box>
      <Box sx={{ pl: "10%", pr: "10%", width: "100%", minHeight: "300px" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default VisaDetails;
