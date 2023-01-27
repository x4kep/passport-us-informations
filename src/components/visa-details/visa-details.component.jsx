import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import ApplicationInformation from "./forms/application-information.component";
import PassportInformation from "./forms/passport-information.component";
import ContactInformation from "./forms/contact-information.component";
import TripDetails from "./forms/trip-details.component";
import UsContract from "./forms/us-contract.component";
import FamilyBackground from "./forms/family-background.component";
import EmploymentEducation from "./forms/employment-education.component";
import SecurityQuestion from "./forms/security-question.component";
import ReviewCertification from "./forms/review-certification.component";

import { Divider, Paper } from "@mui/material";

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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ApplicationInformation />;
    case 1:
      return <PassportInformation />;
    case 2:
      return <ContactInformation />;
    case 3:
      return <TripDetails />;
    case 4:
      return <UsContract />;
    case 5:
      return <FamilyBackground />;
    case 6:
      return <EmploymentEducation />;
    case 7:
      return <SecurityQuestion />;
    case 8:
      return <ReviewCertification />;
    default:
      throw new Error("Unknown step");
  }
}

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

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container
      maxWidth="false"
      component={"main"}
      sx={{
        pb: 4,
        bgcolor: "#fff",
        color: "#5e5e5e",
      }}
    >
      <Box
        sx={{
          pl: { xs: "0%", sm: "5%", md: "10%" },
          pr: { xs: "0%", sm: "5%", md: "10%" },
          pb: 3,
          textAlign: "center",
        }}
      >
        <Typography sx={{ pt: 5, fontSize: 20 }}>
          Welcome, you are entitled to a United States Nonimmigrant Visa!
        </Typography>
        <Typography sx={{ pt: 2, fontSize: 14 }}>
          Exclusively for tourism, visit, medical treatment, business (max. 6
          months stay) transit or crew member (max. 29 days stay), study or
          exchange program.
        </Typography>
        <Typography sx={{ pt: 2, fontSize: 14 }}>
          <strong>Renewal with Interview Waiver:</strong> use this form if you
          have a valid U.S. visa and want to renew it. Embassy interview
          attendance is <strong>also not required</strong> if your visa has{" "}
          <strong>expired</strong> in the last <strong>12 to 48 months</strong>
          (depending on your citizenship).
        </Typography>
        <Typography sx={{ pt: 2, pb: 2, fontSize: 14 }}>
          All questions must be answered in English using only English-language
          characters, <strong>except</strong> when you are asked for your full
          name in your native alphabet.
        </Typography>
        <Typography
          sx={{
            pt: 2,
            pb: 2,
            fontSize: 14,
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
          }}
        >
          <strong>Groups / Family:</strong> Currently there is no grouping on
          our forms, please submit your applications individually for each
          person.
        </Typography>
      </Box>
      <Box
        sx={{
          pl: { xs: "0%", sm: "5%", md: "10%" },
          pr: { xs: "0%", sm: "5%", md: "10%" },
          width: "100%",
          minHeight: "300px",
        }}
      >
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography
                  fontSize={{ md: 8, lg: 12, xl: 16 }}
                  fontWeight="bold"
                  display={{ p: 0, xs: "none", md: "block" }}
                >
                  {label}
                </Typography>
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
              <Paper
                elevation={2}
                sx={{
                  pt: 2,
                  pl: 2,
                  pr: 2,
                  mt: { xs: 1, sm: 3 },
                  borderTopRightRadius: 6,
                  borderTopLeftRadius: 6,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#f2f2f2",
                }}
              >
                {getStepContent(activeStep)}
                <Divider sx={{ borderColor: "#b9b9b9" }}></Divider>{" "}
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#f2f2f2",
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                  }}
                >
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Previous step
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next step
                  </Button>
                  {/* {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 && "Finish"
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))} */}
                </Box>
              </Paper>
            </React.Fragment>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default VisaDetails;
