import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
  RadioGroup,
  Radio,
  Container,
  Tooltip,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import { Stack } from "@mui/system";
import HelpIcon from "@mui/icons-material/Help";
import countries from "../../../data/countries.json";
import { Form, Formik, Field } from "formik";
import { object, string, date, mixed } from "yup";

const initialValues = {
  passportTravelDocumentType: "",
  passportTravelDocumentTypeOtherExplain: "",
  passportTravelDocumentNumber: "",
  passportBookNumber: "",
  passportBookNumberDisabled: false,
  countryAuthority: "",
  city: "",
  stateRegionProvince: "",
  countryRegion: "",
  passportIssuanceDate: "",
  passportExpirationDate: "",
  passportExpirationDateDisabled: false,
  lostPassport: "",
  lostPassportDocumentNumber: "",
  lostPassportDocumentNumberDisabled: false,
  lostPassportCountryAuthorityIssued: "",
  lostPassportExplain: "",
  countryRegionOrigin: "",
  otherNationality: "",
  otherNationalityCountryRegion: "",
  otherNationalityCountryRegionTravelDocumentNumber: "",
  otherNationalityCountry: "",
  otherNationalityPassport: "",
  otherCountry: "",
  otherCountryRegion: "",
  otherCountryRegionAbove: "",
  otherCountryRegionAbovePermanentResident: "",
  nationalIdentificationNumber: "",
  nationalIdentificationNumberDisabled: false,
  usSocialSecurityAreaNumber: "",
  usSocialSecurityAreaNumberDisabled: false,
  usSocialSecurityGroup: "",
  usSocialSecurityGroupDisabled: false,
  usSocialSecuritySerialNumber: "",
  usSocialSecuritySerialNumberDisabled: false,
  usSocialTaxpayerNumber: "",
  usSocialTaxpayerNumberDisabled: false,
};

function PassportInformation() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={object({
          passportTravelDocumentType: string().required(
            "Please select a passport / travel document type"
          ),
          passportTravelDocumentNumber: string()
            .required("Please provide passport / travel document number")
            .min(
              8,
              "Please recheck your passport information. Passport numbers are 8 to 10 characters long"
            )
            .max(
              10,
              "Please recheck your passport information. Passport numbers must be at most 10 characters"
            ),
          passportBookNumber: mixed().when("passportBookNumberDisabled", {
            is: "true",
            then: string(),
            otherwise: string().required(
              "Please select a Passport Book Number if applicable, or tick does not apply"
            ),
          }),
          passportBookNumberDisabled: string(),
          countryAuthority: string().required(
            "Please select country / authority"
          ),
          city: string().required(
            "Please choose the city where your travel document was issued."
          ),
          stateRegionProvince: string().min(
            1,
            "Minimum number of characters are 2."
          ),
          countryRegion: string().required(
            "Please select choose the country / region where your travel document was issued."
          ),
          passportIssuanceDate: date().required("Date must be in the past"),
          passportExpirationDate: mixed().when(
            "passportExpirationDateDisabled",
            {
              is: "true",
              then: string(),
              otherwise: string().required("Date must be in the future!"),
            }
          ),
          lostPassport: string().required(
            "Please select an answer to the question: have you ever lost a passport or had one stolen?"
          ),
          lostPassportDocumentNumber: mixed().when("lostPassport", {
            is: "true",
            then: string().required("Please provide passport number."),
            otherwise: string(),
          }),
          lostPassportCountryAuthorityIssued: mixed().when("lostPassport", {
            is: "true",
            then: string().required(
              "Please select country / authority that issued the passport / travel document."
            ),
            otherwise: string(),
          }),
          lostPassportExplain: mixed().when("lostPassport", {
            is: "true",
            then: string().required("This field is required."),
            otherwise: string(),
          }),
          countryRegionOrigin: string().required(
            "Please select the country of citizenship as displayed on your passport or travel document"
          ),
          otherNationalityCountryRegion: mixed().when("otherNationality", {
            is: "true",
            then: string().required(
              "The Other Country/Region cannot be same as origin nationality."
            ),
            otherwise: string(),
          }),
          otherNationalityCountryRegionTravelDocumentNumber: mixed().when(
            "otherNationalityCountryRegion",
            {
              is: "true",
              then: string().required(
                "Enter the passport number exactly as it appears on the passport information page."
              ),
              otherwise: string(),
            }
          ),
          otherNationalityPassport: mixed().when("otherNationalityCountry", {
            is: "true",
            then: string().required(
              "Please select what is your Other Permanent Country/Region?."
            ),
            otherwise: string(),
          }),
          nationalIdentificationNumber: mixed().when(
            "nationalIdentificationNumberDisabled",
            {
              is: "true",
              then: string(),
              otherwise: string().required(
                "Please fill in your National Identification Number"
              ),
            }
          ),
          usSocialSecurityAreaNumber: mixed().when(
            "usSocialSecurityAreaNumberDisabled",
            {
              is: "true",
              then: string(),
              otherwise: string().required(
                "Please fill in your National Identification Number"
              ),
            }
          ),
          usSocialSecurityGroup: mixed().when("usSocialSecurityGroupDisabled", {
            is: "true",
            then: string(),
            otherwise: string().required(
              "Please fill in your National Identification Number"
            ),
          }),
          usSocialSecuritySerialNumber: mixed().when(
            "usSocialSecuritySerialNumberDisabled",
            {
              is: "true",
              then: string(),
              otherwise: string().required(
                "Please fill in your National Identification Number"
              ),
            }
          ),
          usSocialTaxpayerNumber: mixed().when(
            "usSocialTaxpayerNumberDisable",
            {
              is: "true",
              then: string(),
              otherwise: string().required(
                "Please fill in your National Identification Number"
              ),
            }
          ),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          console.log(formikHelpers);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            {/* <Field name="passportTravelDocumentType"></Field> */}
            <pre>{JSON.stringify(values, null, 4)}</pre>
            <pre>{JSON.stringify(errors, null, 4)}</pre>
            <Container
              component="main"
              maxWidth="false"
              sx={{
                p: { xs: 0, sm: 2 },
              }}
            >
              <Typography sx={{ fontSize: { xs: 20, md: 32 } }}>
                Passport Information
              </Typography>
              <Divider
                sx={{
                  pt: { xs: 2, sm: 4 },
                  mb: { xs: 2, sm: 4 },
                  borderColor: "#1976d2",
                }}
              />
              <Grid container spacing={{ xs: 1, sm: 3 }}>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Passport / Travel document type
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                    </Typography>

                    <Field
                      name="passportTravelDocumentType"
                      as={TextField}
                      select
                      variant="standard"
                      defaultValue=""
                      fullWidth
                      error={
                        touched.passportTravelDocumentType &&
                        errors.passportTravelDocumentType
                      }
                      helperText={
                        touched.passportTravelDocumentType &&
                        errors.passportTravelDocumentType
                          ? errors.passportTravelDocumentType
                          : null
                      }
                      label="Passport / Travel document type"
                    >
                      <MenuItem value="">Select document type</MenuItem>
                      <MenuItem value="regular">Regular</MenuItem>
                      <MenuItem value="official">Official</MenuItem>
                      <MenuItem value="diplomatic">Diplomatic</MenuItem>
                      <MenuItem value="laissez-passer">Laissez-passer</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Field>
                  </Stack>
                </Grid>
                {values.passportTravelDocumentType === "other" && (
                  <Grid item xs={12}>
                    <Stack
                      spacing={2}
                      direction={{ sx: "column", md: "row" }}
                      alignItems={{ sx: "left", md: "center" }}
                    >
                      <Typography className="form-input-label">
                        Explain
                        <Typography
                          component="span"
                          className="form-input-required"
                        >
                          *
                        </Typography>
                        <Tooltip title="Please describe what type of document do you plan to use for travel and the reason">
                          <IconButton>
                            <HelpIcon className="form-input-tooltip" />
                          </IconButton>
                        </Tooltip>
                      </Typography>
                      <Field
                        as={TextField}
                        name="passportTravelDocumentTypeOtherExplain"
                        multiline
                        rows={5}
                        sx={{
                          mt: 2,
                          width: { xs: "280px", sm: "440px", lg: "600px" },
                        }}
                        error={
                          touched.passportTravelDocumentTypeOtherExplain &&
                          errors.passportTravelDocumentTypeOtherExplain
                        }
                        helperText={
                          touched.passportTravelDocumentTypeOtherExplain &&
                          errors.passportTravelDocumentTypeOtherExplain
                            ? errors.passportTravelDocumentTypeOtherExplain
                            : null
                        }
                      ></Field>
                    </Stack>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Passport / Travel document number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Most passport numbers are 8 to 10 characters long. If the number you plan to add is much longer or much smaller that this check you are using the right number">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="passportTravelDocumentNumber"
                      as={TextField}
                      variant="standard"
                      label="Travel document Number"
                      fullWidth
                      error={
                        touched.passportTravelDocumentNumber &&
                        errors.passportTravelDocumentNumber
                      }
                      helperText={
                        touched.passportTravelDocumentNumber &&
                        errors.passportTravelDocumentNumber
                          ? errors.passportTravelDocumentNumber
                          : null
                      }
                    ></Field>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Passport book number
                      <Typography
                        component="span"
                        fontWeight="bold"
                        color="red"
                      >
                        *
                      </Typography>
                      <Tooltip title="The passport Book Number can also be called the Inventory Control Number. You may or may not have a Passport Book Number on your passport. If you are unable to determine whether on not your passport contains a Passport Book Number, you should reach out to your passport issuing authority.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="passportBookNumber"
                      as={TextField}
                      disabled={values.passportBookNumberDisabled}
                      variant="standard"
                      label="Passport book number"
                      fullWidth
                      error={
                        touched.passportBookNumber && errors.passportBookNumber
                      }
                      helperText={
                        touched.passportBookNumber && errors.passportBookNumber
                          ? errors.passportBookNumber
                          : null
                      }
                    ></Field>
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="passportBookNumberDisabled"
                          color="primary"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Country / Authority that issued the passport / travel
                      document
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please choose the county which issued your travel document.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="countryAuthority"
                      as={TextField}
                      variant="standard"
                      label="Select country"
                      select
                      fullWidth
                      error={
                        touched.countryAuthority && errors.countryAuthority
                      }
                      helperText={
                        touched.countryAuthority && errors.countryAuthority
                          ? errors.countryAuthority
                          : null
                      }
                    >
                      <MenuItem>Select country</MenuItem>
                      {Object.keys(countries).map((item, pos) => {
                        return (
                          <MenuItem value={item} key={pos}>
                            {countries[item]}
                          </MenuItem>
                        );
                      })}
                    </Field>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      City
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please identify on your travel document, the city where it was issued.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="city"
                      as={TextField}
                      variant="standard"
                      label="City"
                      fullWidth
                      error={touched.city && errors.city}
                      helperText={
                        touched.city && errors.city ? errors.city : null
                      }
                    >
                      Please choose the city where your travel document was
                      issued.
                    </Field>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      State / Region / Province
                      <Tooltip title="Please identify on your travel document, the State / Region / Province where it was issued">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="stateRegionProvince"
                      as={TextField}
                      fullWidth
                      variant="standard"
                      label="Travel document Number"
                      error={
                        touched.stateRegionProvince &&
                        errors.stateRegionProvince
                      }
                      helperText={
                        touched.stateRegionProvince &&
                        errors.stateRegionProvince
                          ? errors.stateRegionProvince
                          : null
                      }
                    ></Field>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Country / Region
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please identify on your travel document, the Country / Region where it was issued.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="countryRegion"
                      as={TextField}
                      variant="standard"
                      label="Select country"
                      select
                      fullWidth
                      error={touched.countryRegion && errors.countryRegion}
                      helperText={
                        touched.countryRegion && errors.countryRegion
                          ? errors.countryRegion
                          : null
                      }
                    >
                      <MenuItem>Select country</MenuItem>
                      {Object.keys(countries).map((item, pos) => {
                        return (
                          <MenuItem value={item} key={pos}>
                            {countries[item]}
                          </MenuItem>
                        );
                      })}
                    </Field>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Passport issuance date
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please find this date on your passport or travel document.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="passportIssuanceDate"
                      as={TextField}
                      label="Passport issuance date"
                      variant="standard"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={
                        touched.passportIssuanceDate &&
                        errors.passportIssuanceDate
                      }
                      helperText={
                        touched.passportIssuanceDate &&
                        errors.passportIssuanceDate
                          ? errors.passportIssuanceDate
                          : null
                      }
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Passport expiration date
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please identify on your travel document, the city where it was issued.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="passportExpirationDate"
                      as={TextField}
                      disabled={values.passportExpirationDateDisabled}
                      label="Passport expiration date"
                      variant="standard"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      error={
                        touched.passportExpirationDate &&
                        errors.passportExpirationDate
                      }
                      helperText={
                        touched.passportExpirationDate &&
                        errors.passportExpirationDate
                          ? errors.passportExpirationDate
                          : null
                      }
                    />
                    <FormControlLabel
                      control={
                        <Field
                          name="passportExpirationDateDisabled"
                          as={Checkbox}
                          color="primary"
                        />
                      }
                      label="No Expiration"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Have you ever lost a passport or had one stolen?
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                    </Typography>
                    <Field
                      name="lostPassport"
                      as={RadioGroup}
                      row
                      error={touched.lostPassport && errors.lostPassport}
                      helperText={
                        touched.lostPassport && errors.lostPassport
                          ? errors.lostPassport
                          : null
                      }
                    >
                      <FormControlLabel
                        control={<Radio />}
                        label="Yes"
                        value="true"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        label="No"
                        value="false"
                      />
                    </Field>
                  </Stack>
                </Grid>
                {values.lostPassport === "true" && (
                  <>
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Passport / Travel document number
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                        </Typography>
                        <Field
                          name="lostPassportDocumentNumber"
                          as={TextField}
                          disabled={values.lostPassportDocumentNumberDisabled}
                          label="Passport document number"
                          variant="standard"
                          fullWidth
                          error={
                            touched.lostPassportDocumentNumber &&
                            errors.lostPassportDocumentNumber
                          }
                          helperText={
                            touched.lostPassportDocumentNumber &&
                            errors.lostPassportDocumentNumber
                              ? errors.lostPassportDocumentNumber
                              : null
                          }
                        />
                        <FormControlLabel
                          control={
                            <Field
                              name="lostPassportDocumentNumberDisabled"
                              as={Checkbox}
                              color="primary"
                            />
                          }
                          label="Don't know"
                          sx={{ minWidth: { xs: 40, md: 150 } }}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Country / Authority that issued the passport / travel
                          document
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                          <Tooltip title="Please identify on your travel document, the Country / Region where it was issued.">
                            <IconButton>
                              <HelpIcon className="form-input-tooltip" />
                            </IconButton>
                          </Tooltip>
                        </Typography>
                        <Field
                          name="lostPassportCountryAuthorityIssued"
                          as={TextField}
                          variant="standard"
                          label="Select country"
                          select
                          fullWidth
                          error={
                            touched.lostPassportCountryAuthorityIssued &&
                            errors.lostPassportCountryAuthorityIssued
                          }
                          helperText={
                            touched.lostPassportCountryAuthorityIssued &&
                            errors.lostPassportCountryAuthorityIssued
                              ? errors.lostPassportCountryAuthorityIssued
                              : null
                          }
                        >
                          <MenuItem>Select country</MenuItem>
                          {Object.keys(countries).map((item, pos) => {
                            return (
                              <MenuItem value={item} key={pos}>
                                {countries[item]}
                              </MenuItem>
                            );
                          })}
                        </Field>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Explain
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                          <Tooltip title="Please describe what type of document do you plan to use for travel and the reason">
                            <IconButton>
                              <HelpIcon className="form-input-tooltip" />
                            </IconButton>
                          </Tooltip>
                        </Typography>
                        <Field
                          name="lostPassportExplain"
                          as={TextField}
                          rows={5}
                          sx={{
                            mt: 2,
                            width: { xs: "280px", sm: "440px", lg: "600px" },
                          }}
                          multiline
                          error={
                            touched.lostPassportExplain &&
                            errors.lostPassportExplain
                          }
                          helperText={
                            touched.lostPassportExplain &&
                            errors.lostPassportExplain
                              ? errors.lostPassportExplain
                              : null
                          }
                        ></Field>
                      </Stack>
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Country / Region of origin ( Nationality )
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please select the country of citizenship as displayed on your passport or travel document..">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="lostPassportCountryAuthorityIssued"
                      as={TextField}
                      variant="standard"
                      label="Select country"
                      select
                      fullWidth
                      error={
                        touched.lostPassportCountryAuthorityIssued &&
                        errors.lostPassportCountryAuthorityIssued
                      }
                      helperText={
                        touched.lostPassportCountryAuthorityIssued &&
                        errors.lostPassportCountryAuthorityIssued
                          ? errors.lostPassportCountryAuthorityIssued
                          : null
                      }
                    >
                      <MenuItem>Select country</MenuItem>
                      {Object.keys(countries).map((item, pos) => {
                        return (
                          <MenuItem value={item} key={pos}>
                            {countries[item]}
                          </MenuItem>
                        );
                      })}
                    </Field>
                  </Stack>
                </Grid>
              </Grid>
              <Typography variant="h4" paddingTop={10}>
                Additional Nationalities
              </Typography>
              <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Do you hold or have you held any nationality other that
                      the one indicated above on nationality?
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                    </Typography>

                    <Field name="otherNationality" as={RadioGroup} row>
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="No"
                      />
                    </Field>
                  </Stack>
                </Grid>
                {values.otherNationality === "true" && (
                  <>
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Other country / region of origin ( nationality )
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                        </Typography>
                        <Field
                          name="otherNationalityCountry"
                          as={TextField}
                          variant="standard"
                          label="Select country"
                          select
                          fullWidth
                          error={
                            touched.otherNationalityCountry &&
                            errors.otherNationalityCountry
                          }
                          helperText={
                            touched.otherNationalityCountry &&
                            errors.otherNationalityCountry
                              ? errors.otherNationalityCountry
                              : null
                          }
                        >
                          <MenuItem>Select country</MenuItem>
                          {Object.keys(countries).map((item, pos) => {
                            return (
                              <MenuItem value={item} key={pos}>
                                {countries[item]}
                              </MenuItem>
                            );
                          })}
                        </Field>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Do you hold a passport for the other country / region
                          of origin ( nationality) above ?
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                        </Typography>
                        <Field
                          name="otherNationalityPassport"
                          as={RadioGroup}
                          row
                        >
                          <FormControlLabel
                            value="true"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="false"
                            control={<Radio />}
                            label="No"
                          />
                        </Field>
                      </Stack>
                    </Grid>
                  </>
                )}

                {values.otherNationality === "true" &&
                  values.otherNationalityPassport === "true" && (
                    <Grid item xs={12}>
                      <Stack
                        spacing={2}
                        direction={{ sx: "column", md: "row" }}
                        alignItems={{ sx: "left", md: "center" }}
                      >
                        <Typography className="form-input-label">
                          Passport / Travel document number
                          <Typography
                            component="span"
                            className="form-input-required"
                          >
                            *
                          </Typography>
                          <Tooltip title="The National Identification Number can also be know as the National ID Number and it is a unique number that your government provides to all citizens. You should be able ti locate this number on another ID issued by your country's government.">
                            <IconButton>
                              <HelpIcon className="form-input-tooltip" />
                            </IconButton>
                          </Tooltip>
                        </Typography>
                        <Field
                          name="otherNationalityCountryRegionTravelDocumentNumber"
                          as={TextField}
                          variant="standard"
                          label="Passport number"
                          fullWidth
                          error={
                            touched.otherNationalityCountry &&
                            errors.otherNationalityCountry
                          }
                          helperText={
                            touched.otherNationalityCountryRegionTravelDocumentNumber &&
                            errors.otherNationalityCountryRegionTravelDocumentNumber
                              ? errors.otherNationalityCountryRegionTravelDocumentNumber
                              : "Enter the passport number exactly as it appears on the passport information page"
                          }
                        ></Field>
                      </Stack>
                    </Grid>
                  )}
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      Are you a permanent resident of a country / region other
                      than your country / region of origin (nationality)
                      indicated above ?
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                    </Typography>
                    <Field name="otherCountryRegionAbove" as={RadioGroup} row>
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="No"
                      />
                    </Field>
                  </Stack>
                </Grid>
                {values.otherCountryRegionAbove === "true" && (
                  <Grid item xs={12}>
                    <Stack
                      spacing={2}
                      direction={{ sx: "column", md: "row" }}
                      alignItems={{ sx: "left", md: "center" }}
                    >
                      <Typography className="form-input-label">
                        Other permanent resident country / region
                        <Typography
                          component="span"
                          className="form-input-required"
                        >
                          *
                        </Typography>
                      </Typography>
                      <Field
                        name="otherCountryRegionAbovePermanentResident"
                        as={TextField}
                        variant="standard"
                        label="Select country"
                        select
                        fullWidth
                        error={
                          touched.otherCountryRegionAbovePermanentResident &&
                          errors.otherCountryRegionAbovePermanentResident
                        }
                        helperText={
                          touched.otherCountryRegionAbovePermanentResident &&
                          errors.otherCountryRegionAbovePermanentResident
                            ? errors.otherCountryRegionAbovePermanentResident
                            : null
                        }
                      >
                        <MenuItem>Select country</MenuItem>
                        {Object.keys(countries).map((item, pos) => {
                          return (
                            <MenuItem value={item} key={pos}>
                              {countries[item]}
                            </MenuItem>
                          );
                        })}
                      </Field>
                    </Stack>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      National identification number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="The National Identification Number can also be know as the National ID Number and it is a unique number that your government provides to all citizens. You should be able ti locate this number on another ID issued by your country's government.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="nationalIdentificationNumber"
                      as={TextField}
                      disabled={values.nationalIdentificationNumberDisabled}
                      variant="standard"
                      label="National identification number"
                      fullWidth
                      error={
                        touched.otherCountryRegionAbovePermanentResident &&
                        errors.otherCountryRegionAbovePermanentResident
                      }
                      helperText={
                        touched.otherCountryRegionAbovePermanentResident &&
                        errors.otherCountryRegionAbovePermanentResident
                          ? errors.otherCountryRegionAbovePermanentResident
                          : "Please fill in your National Identification Number"
                      }
                    ></Field>
                    <FormControlLabel
                      control={
                        <Field
                          name="nationalIdentificationNumberDisabled"
                          as={Checkbox}
                          color="primary"
                          value="yes"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      U.S. social security group number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="The US Government provides unique numbers to those who seek employment (Social Security Number). Please identify and fill in the U.S. Social Security group number, where applicable.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="usSocialSecurityGroup"
                      as={TextField}
                      disabled={values.usSocialSecurityGroupDisabled}
                      variant="standard"
                      label="U.S. social security area number"
                      fullWidth
                      error={
                        touched.usSocialSecurityGroup &&
                        errors.usSocialSecurityGroup
                      }
                      helperText={
                        touched.usSocialSecurityGroup &&
                        errors.usSocialSecurityGroup
                          ? errors.usSocialSecurityGroup
                          : "Please fill in U.S. Social Security area number"
                      }
                    >
                      U.S. social security area number
                      <HelpIcon sx={{ ml: 0.5, mb: 0.5 }} />
                    </Field>
                    <FormControlLabel
                      control={
                        <Field
                          name="usSocialSecurityGroupDisabled"
                          as={Checkbox}
                          color="primary"
                          value="yes"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      U.S. social security serial number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="The US Government provides unique numbers to those who seek employment (Social Security Number). Please identify and fill in the U.S. Social Security Serial number, where applicable.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="usSocialSecuritySerialNumber"
                      as={TextField}
                      disabled={values.usSocialSecuritySerialNumberDisabled}
                      variant="standard"
                      label="U.S. social security serial number"
                      fullWidth
                      error={
                        touched.usSocialSecuritySerialNumber &&
                        errors.usSocialSecuritySerialNumber
                      }
                      helperText={
                        touched.usSocialSecuritySerialNumber &&
                        errors.usSocialSecuritySerialNumber
                          ? errors.usSocialSecuritySerialNumber
                          : "Please fill in U.S. Social Security Serial number"
                      }
                    ></Field>
                    <FormControlLabel
                      control={
                        <Field
                          name="usSocialSecuritySerialNumberDisabled"
                          as={Checkbox}
                          color="primary"
                          value="yes"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      U.S. social security area number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="Please identify on your travel document, the city where it was issued.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="usSocialSecurityAreaNumber"
                      as={TextField}
                      disabled={values.usSocialSecurityAreaNumberDisabled}
                      variant="standard"
                      label="U.S. social security area number"
                      fullWidth
                      error={
                        touched.usSocialSecurityAreaNumber &&
                        errors.usSocialSecurityAreaNumber
                      }
                      helperText={
                        touched.usSocialSecurityAreaNumber &&
                        errors.usSocialSecurityAreaNumber
                          ? errors.usSocialSecurityAreaNumber
                          : "Please fill in the U.S. Taxpayer ID Number"
                      }
                    >
                      U.S. social security area number
                      <HelpIcon sx={{ ml: 0.5, mb: 0.5 }} />
                    </Field>
                    <FormControlLabel
                      control={
                        <Field
                          name="usSocialSecurityAreaNumberDisabled"
                          as={Checkbox}
                          color="primary"
                          value="yes"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    spacing={2}
                    direction={{ sx: "column", md: "row" }}
                    alignItems={{ sx: "left", md: "center" }}
                  >
                    <Typography className="form-input-label">
                      U.S. social taxpayer id number
                      <Typography
                        component="span"
                        className="form-input-required"
                      >
                        *
                      </Typography>
                      <Tooltip title="The US Government provides unique numbers, also name Taxpayer IDs, to individuals who pay taxes. Please identify and fill in the U.S. Taxpayer ID Number, if applicable.">
                        <IconButton>
                          <HelpIcon className="form-input-tooltip" />
                        </IconButton>
                      </Tooltip>
                    </Typography>
                    <Field
                      name="usSocialTaxpayerNumber"
                      as={TextField}
                      disabled={values.usSocialTaxpayerNumberDisabled}
                      variant="standard"
                      label="U.S. social taxpayer id number"
                      fullWidth
                      error={
                        touched.usSocialTaxpayerNumber &&
                        errors.usSocialTaxpayerNumber
                      }
                      helperText={
                        touched.usSocialTaxpayerNumber &&
                        errors.usSocialTaxpayerNumber
                          ? errors.usSocialTaxpayerNumber
                          : "Please fill in the U.S. Taxpayer ID Number"
                      }
                    >
                      U.S. social taxpayer id number
                    </Field>
                    <FormControlLabel
                      control={
                        <Field
                          name="usSocialTaxpayerNumberDisabled"
                          as={Checkbox}
                          color="primary"
                        />
                      }
                      label="Does not apply"
                      sx={{ minWidth: { xs: 40, md: 150 } }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Container>
            <Button type="submit">Test Form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PassportInformation;
