import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  NativeSelect,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

function TripDetails() {
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        p: 2,
        pb: 4,
      }}
    >
      <Typography variant="h4">Trip Details</Typography>
      <Divider sx={{ pt: 4, mb: 4, borderColor: "#1976d2" }} />
      <Grid container spacing={3}>
        {" "}
        <Grid item xs={12}>
          <Stack
            direction={{ sx: "column", md: "row" }}
            alignItems={{ sx: "left", md: "center" }}
            spacing={2}
          >
            <Typography
              className="form-input-label"
              maxWidth={{ sx: "100%", md: "30%" }}
              minWidth={{ sx: "100%", md: "30%" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Select a location where you will be applying for visa
            </Typography>
            <NativeSelect fullWidth>
              <option>Select</option>
              <option value="official">ALBANIA, TIRANA</option>
              <option value="diplomatic">ALGERIA, ALGIERS</option>
              <option value="laissez-passer">ARGENTINA, BUENOS AIRES</option>
              <option value="laissez-passer">AUSTRALIA, MELBOURNE</option>
              <option value="laissez-passer">AUSTRALIA, PERTH</option>
              <option value="laissez-passer">AUSTRALIA, SYDNEY</option>
              <option value="laissez-passer">AUSTRIA, VIENNA</option>
              <option value="laissez-passer">AZERBAIJAN, BAKU</option>
              <option value="laissez-passer">BAHAMAS, NASSAU</option>
              <option value="laissez-passer">BAHRAIN, MANAMA</option>
              <option value="laissez-passer">BANGLADESH, DHAKA</option>
              <option value="laissez-passer">BARBADOS, BRIDGETOWN</option>
              <option value="laissez-passer">BELARUS, MINSK</option>
              <option value="laissez-passer">BELGIUM, BRUSSELS</option>
              <option value="laissez-passer">BENIN, COTONOU</option>
              <option value="laissez-passer">BERMUDA, HAMILTON</option>
              <option value="laissez-passer">BOLIVIA, LA PAZ</option>
              <option value="laissez-passer">
                BOSNIA-HERZEGOVINA, SARAJEVO
              </option>
              <option value="laissez-passer">BOTSWANA, GABORONE</option>
              <option value="laissez-passer">BRAZIL, PORTO ALEGRE</option>
              <option value="laissez-passer">BRAZIL, SAO PAULO</option>
              <option value="laissez-passer">
                BRUNEI, BANDAR SERI BEGAWAN
              </option>
              <option value="laissez-passer">BULGARIA, SOFIA</option>
              <option value="other">BURMA, RANGOON</option>
              <option value="other">BURUNDI, BUJUMBURA</option>
              <option value="other">CABO VERDE, PRAIA</option>
              <option value="other">CAMBODIA, PHNOM PENH</option>
              <option value="other">CAMEROON, YAOUNDE</option>
              <option value="other">CANADA, CALGARY</option>
              <option value="other">CANADA, HALIFAX</option>
              <option value="other">CANADA, MONTREAL</option>
              <option value="other">CANADA, OTTAWA</option>
              <option value="other">CANADA, QUEBEC</option>
              <option value="other">CANADA, TORONTO</option>
              <option value="other">CANADA, VANCOUVER</option>
              <option value="other">CHAD, N`DJAMENA</option>
              <option value="other">CHILE, SANTIAGO</option>
              <option value="other">CHINA, BEIJING</option>
              <option value="other">CHINA, GUANGZHOU</option>
              <option value="other">CHINA, SHANGHAI</option>
              <option value="other">CHINA, SHENYANG</option>
              <option value="other">COLOMBIA, BOGOTA</option>
              <option value="other">CONGO, BRAZZAVILLE</option>
              <option value="other">CONGO, KINSHASA</option>
              <option value="other">COSTA RICA, SAN JOSE</option>
              <option value="other">COTE D`IVORIE, ABIDJAN</option>
              <option value="other">CROATIA, ZAGREB</option>
              <option value="other">CURACAO, CURACAO</option>
              <option value="other">YPRUS, NICOSIA</option>
              <option value="other">CZECH REPUBLIC, PRAGUE</option>
              <option value="other">DENMARK, COPENHAGEN</option>
              <option value="other">DJIBOUTI, DJIBOUTI</option>
              <option value="other">DOMINICAN REPUBLIC, SANTO DOMINGO</option>
              <option value="other">ECUADOR, GUAYAQUIL</option>
              <option value="other">ECUADOR, QUITO</option>
              <option value="other">EGYPT, CAIRO</option>
              <option value="other">EL SALVADOR, SAN SALVADOR</option>
              <option value="other">UNITED KINGDOM, ENGLAND, LONDON</option>
              <option value="other">EQUATORIAL GUINEA, MALABO</option>
              <option value="other">ERITREA, ASMARA</option>
              <option value="other">ESTONIA, TALLINN</option>
              <option value="other">ESWATINI, MBABANE</option>
              <option value="other">ETHIOPIA, ADDIS ABABA</option>
              <option value="other">FIJI, SUVA</option>
              <option value="other">FINLAND, HELSINKI</option>
              <option value="other">FRANCE, PARIS</option>
              <option value="other">GABON, LIBREVILLE</option>
              <option value="other">GAMBIA, BANJUL</option>
              <option value="other">GEORGIA, TBILISI</option>
              <option value="other">GERMANY, BERLIN</option>
              <option value="other">GERMANY, FRANKFURT</option>
              <option value="other">GERMANY, MUNICH</option>
              <option value="other">GHANA, ACCRA</option>
              <option value="other">GREECE, ATHENS</option>
              <option value="other">GUATEMALA, GUATEMALA CITY</option>
              <option value="other">GUINEA, CONAKRY</option>
              <option value="other">GUYANA, GEORGETOWN</option>
              <option value="other">HAITI, PORT-AU-PRINCE</option>
              <option value="other">HONDURAS, TEGUCIGALPA</option>
              <option value="other">HONG KONG</option>
              <option value="other">HUNGARY, BUDAPEST</option>
              <option value="other">ICELAND, REYKJAVIK</option>
              <option value="other">INDIA, CHENNAI</option>
              <option value="other">INDIA, HYDERABAD</option>
              <option value="other">INDIA, KOLKATA</option>
              <option value="other">INDIA, MUMBAI</option>
              <option value="other">INDIA, NEW DELHI</option>
              <option value="other">INDONESIA, JAKARTA</option>
              <option value="other">INDONESIA, SURABAYA</option>
              <option value="other">IRAQ, BAGHDAD</option>
              <option value="other">IRAQ, ERBIL</option>
              <option value="other">IRELAND, DUBLIN</option>
              <option value="other">ISRAEL, TEL AVIV</option>
              <option value="other">ITALY, FLORENCE</option>
              <option value="other">ITALY, MILAN</option>
              <option value="other">ITALY, NAPLES</option>
              <option value="other">ITALY, ROME</option>
              <option value="other">JAMAICA, KINGSTON</option>
              <option value="other">JAPAN, NAHA</option>
              <option value="other">JAPAN, OSAKA/FUKUOKA</option>
              <option value="other">JAPAN, TOKYO/SAPPORO</option>
              <option value="other">JERUSALEM</option>
              <option value="other">JORDAN, AMMAN</option>
              <option value="other">KAZAKHSTAN, ALMATY</option>
              <option value="other">KAZAKHSTAN, NUR-SULTAN</option>
              <option value="other">KENYA, NAIROBI</option>
              <option value="other">KOSOVO, PRISTINA</option>
              <option value="other">KUWAIT, KUWAIT CITY</option>
              <option value="other">KYRGYZSTAN, BISHKEK</option>
              <option value="other">LAOS, VIENTIANE</option>
              <option value="other">LATVIA, RIGA</option>
              <option value="other">LEBANON, BEIRUT</option>
              <option value="other">LESOTHO, MASERU</option>
              <option value="other">LIBERIA, MONROVIA</option>
              <option value="other">LITHUANIA, VILNIUS</option>
              <option value="other">LUXEMBOURG, LUXEMBOURG</option>
              <option value="other">NORTH MACEDONIA, SKOPJE</option>
              <option value="other">MADAGASCAR, ANTANANARIVO</option>
              <option value="other">MALAWI, LILONGWE</option>
              <option value="other">MALAYSIA, KUALA LUMPUR</option>
              <option value="other">MALTA, VALLETTA</option>
              <option value="other">MARSHALL ISLANDS, MAJURO</option>
              <option value="other">MAURITANIA, NOUAKCHOTT</option>
              <option value="other">MAURITIUS, PORT LOUIS</option>
              <option value="other">MEXICO, CIUDAD JUAREZ</option>
              <option value="other">MEXICO, GUADALAJARA</option>
              <option value="other">MEXICO, HERMOSILLO</option>
              <option value="other">MEXICO, MATAMOROS</option>
              <option value="other">MEXICO, MERIDA</option>
              <option value="other">MEXICO, MEXICO CITY</option>
              <option value="other">MEXICO, MONTERREY</option>
              <option value="other">MEXICO, NOGALES</option>
              <option value="other">MEXICO, NUEVO LAREDO</option>
              <option value="other">MEXICO, TIJUANA</option>
              <option value="other">MICRONESIA, KOLONIA</option>
              <option value="other">MOLDOVA, CHISINAU</option>
              <option value="other">MONGOLIA, ULAANBAATAR</option>
              <option value="other">MONTENEGRO, PODGORICA</option>
              <option value="other">MOROCCO, CASABLANCA</option>
              <option value="other">MOZAMBIQUE, MAPUTO</option>
              <option value="other">NAMIBIA, WINDHOEK</option>
              <option value="other">NEPAL, KATHMANDU</option>
              <option value="other">NETHERLANDS, AMSTERDAM</option>
              <option value="other">NEW ZEALAND, AUCKLAND</option>
              <option value="other">NICARAGUA, MANAGUA</option>
              <option value="other">NIGER, NIAMEY</option>
              <option value="other">NIGERIA, ABUJA</option>
              <option value="other">NIGERIA, LAGOS</option>
              <option value="other">
                UNITED KINGDOM, NORTHERN IRELAND, BELFAST
              </option>
              <option value="other">NORWAY, OSLO</option>
              <option value="other">PAKISTAN, ISLAMABAD</option>
              <option value="other">PAKISTAN, KARACHI</option>
              <option value="other">PALAU, KOROR</option>
              <option value="other">PANAMA, PANAMA CITY</option>
              <option value="other">PAPUA NEW GUINEA, PORT MORESBY</option>
              <option value="other">PARAGUAY, ASUNCION</option>
              <option value="other">PHILIPPINES, MANILA</option>
              <option value="other">POLAND, KRAKOW</option>
              <option value="other">POLAND, WARSAW</option>
              <option value="other">PORTUGAL, LISBON</option>
              <option value="other">QATAR, DOHA</option>
              <option value="other">ROMANIA, BUCHAREST</option>
              <option value="other">RUSSIA, MOSCOW</option>
              <option value="other">RUSSIA, YEKATERINBURG</option>
              <option value="other">RWANDA, KIGALI</option>
              <option value="other">SAMOA, APIA</option>
              <option value="other">SAUDI ARABIA, DHAHRAN</option>
              <option value="other">SAUDI ARABIA, JEDDAH</option>
              <option value="other">SAUDI ARABIA, RIYADH</option>
              <option value="other">SENEGAL, DAKAR</option>
              <option value="other">SERBIA, BELGRADE</option>
              <option value="other">SIERRA LEONE, FREETOWN</option>
              <option value="other">SINGAPORE, SINGAPORE</option>
              <option value="other">SLOVAKIA, BRATISLAVA</option>
              <option value="other">SLOVENIA, LJUBLJANA</option>
              <option value="other">SOUTH AFRICA, CAPE TOWN</option>
              <option value="other">SOUTH AFRICA, DURBAN</option>
              <option value="other">SOUTH AFRICA, JOHANNESBURG</option>
              <option value="other">SOUTH KOREA, SEOUL</option>
              <option value="other">SOUTH SUDAN, JUBA</option>
              <option value="other">SPAIN, MADRID</option>
              <option value="other">SRI LANKA, COLOMBO</option>
              <option value="other">SURINAME, PARAMARIBO</option>
              <option value="other">SWEDEN, STOCKHOLM</option>
              <option value="other">SWITZERLAND, BERN</option>
              <option value="other">TAIWAN, TAIPEI</option>
              <option value="other">TAJIKISTAN, DUSHANBE</option>
              <option value="other">TANZANIA, DAR ES SALAAM</option>
              <option value="other">THAILAND, BANGKOK</option>
              <option value="other">THAILAND, CHIANG MAI</option>
              <option value="other">TIMOR LESTE, DILI</option>
              <option value="other">TOGO, LOME</option>
              <option value="other">TRINIDAD, PORT OF SPAIN</option>
              <option value="other">TUNISIA, TUNIS</option>
              <option value="other">TURKEY, ANKARA</option>
              <option value="other">TURKEY, ISTANBUL</option>
              <option value="other">TURKMENISTAN, ASHGABAT</option>
              <option value="other">UGANDA, KAMPALA</option>
              <option value="other">UKRAINE, KYIV</option>
              <option value="other">UNITED ARAB EMIRATES, ABU DHABI</option>
              <option value="other">UNITED ARAB EMIRATES, DUBAI</option>
              <option value="other">URUGUAY, MONTEVIDEO</option>
              <option value="other">UZBEKISTAN, TASHKENT</option>
              <option value="other">VENEZUELA, CARACAS</option>
              <option value="other">VIETNAM, HANOI</option>
              <option value="other">VIETNAM, HO CHI MINH CITY</option>
              <option value="other">ZAMBIA, LUSAKA</option>
              <option value="other">ZIMBABWE, HARARE</option>
            </NativeSelect>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Reason for the trip
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="Reason for the trip"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box className="box-border-wrapper">
            <Typography
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Purpose of Trip to the US. #1
            </Typography>
            <Stack
              direction={{ sx: "column", md: "row" }}
              alignItems={{ sx: "left", md: "center" }}
              spacing={2}
              sx={{ pt: 3, justifyContent: "space-between" }}
            >
              <Typography
                className="form-input-label"
                maxWidth={{ sx: "100%", md: "30%" }}
                minWidth={{ sx: "100%", md: "30%" }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                Purpose of trip to the us.
              </Typography>
              <NativeSelect fullWidth>
                <option>Select</option>
                <option>Academic or language student ( F )</option>
              </NativeSelect>
            </Stack>
            <Stack
              direction={{ sx: "column", md: "row" }}
              alignItems={{ sx: "left", md: "center" }}
              spacing={2}
              sx={{ pt: 3, justifyContent: "space-between" }}
            >
              <Typography
                className="form-input-label"
                maxWidth={{ sx: "100%", md: "30%" }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                Specify
              </Typography>
              <NativeSelect fullWidth>
                <option>Select</option>
                <option>Academic or language student ( F )</option>
              </NativeSelect>
            </Stack>
            <Stack sx={{ pt: 2 }}>
              <Button variant="contained" sx={{ maxWidth: "200px" }}>
                Add trip purpose
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Have you made specific travel plans ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Are there other persons tra veling with you ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Have you ever been in the U.S. ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Have you ever been issued a U.S. visa ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Have you ever been refused a u.s. visa, or been refused admission
              to the united states, or withdraw your application for admission
              at the port of entry ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Has anyone ever filed an immigrant petition on your behalf withh
              the united states citizenship and immigration service ?
            </Typography>
            <RadioGroup row>
              <FormControlLabel control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ sx: "column", md: "row" }}
            alignItems={{ sx: "left", md: "center" }}
            spacing={2}
            sx={{ pt: 3, justifyContent: "space-between" }}
          >
            <Typography
              className="form-input-label"
              maxWidth={{ sx: "100%", md: "30%" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Person paying for trip.
            </Typography>
            <NativeSelect fullWidth>
              <option>Select</option>
              <option>Self</option>
              <option>Other Company / Organization</option>
              <option>Other Person</option>
              <option>Present Employer</option>
              <option>Employer in the U.S.</option>
            </NativeSelect>
          </Stack>
        </Grid>
        {/* Other person more forms*/}
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              First name of the person paying for trip
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="First name of the person paying for trip"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Last name of the person paying for trip
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="Last name of the person paying for trip"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Telephone number
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="Telephone number"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Email Address
            </Typography>
            <TextField
              variant="standard"
              label="State / Province"
              fullWidth
              required
            >
              Please make sure you have completed the State / Province.
            </TextField>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" />}
              label="Does not apply"
              sx={{ minWidth: { xs: 40, md: 150 } }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Relationship to you
            </Typography>
            <NativeSelect fullWidth>
              <option>Select</option>
              <option>Child</option>
              <option>Parent</option>
              <option>Spouse</option>
              <option>Other relatives</option>
              <option>Friend</option>
              <option>Other</option>
            </NativeSelect>
          </Stack>
        </Grid>
        {/* Other Company / Organization more forms*/}
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Company payer name
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="Company payer name"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Telephone number
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="+1 231 231 1111"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Relationship to you
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              label="Telephone number"
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Street address (line 1)
            </Typography>
            <TextField
              variant="standard"
              label="Street address (Line 1)"
              fullWidth
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Street address (line 1)
            </Typography>
            <TextField
              variant="standard"
              label="Street address (Line 1)"
              fullWidth
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              City
            </Typography>
            <TextField
              variant="standard"
              label="City"
              fullWidth
              required
            ></TextField>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              State / Province
            </Typography>
            <TextField
              variant="standard"
              label="State / Province"
              fullWidth
              required
            >
              Please make sure you have completed the State / Province.
            </TextField>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" />}
              label="Does not apply"
              sx={{ minWidth: { xs: 40, md: 150 } }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth="30%"
              minWidth="30%"
            >
              Postal zone / zip code
            </Typography>
            <TextField
              variant="standard"
              label="Postal zone / zip code"
              fullWidth
              required
            >
              Please make sure you have Postal zone / zip code.
            </TextField>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" />}
              label="Does not apply"
              sx={{ minWidth: { xs: 40, md: 150 } }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={{ sx: "column", md: "row" }}
            alignItems={{ sx: "left", md: "center" }}
            spacing={2}
            sx={{ pt: 3, justifyContent: "space-between" }}
            alignItems={{ sx: "left", md: "center" }}
          >
            <Typography
              className="form-input-label"
              maxWidth={{ sx: "100%", md: "30%" }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              Country
            </Typography>
            <NativeSelect fullWidth>
              <option>Select Country</option>
              <option>America</option>
            </NativeSelect>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TripDetails;
