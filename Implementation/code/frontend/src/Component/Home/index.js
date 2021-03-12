import React from "react";
import "./Style.css";
import Card2 from "src/Component/UI/Card2";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Login from "src/Component/LoginVictim/Login";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import LoginResc from "src/Component/LoginforRescue/LoginResc";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
}));

function Home() {
  const classes = useStyles();
  const [modalContent, setModalContent] = React.useState(<div></div>);
  const [modalState, setModalState] = React.useState(false);

  const openModal = (login) => {
    console.log(login);
    switch (login) {
      case "Victim":
        setModalContent(<Login />);
        break;
      case "Rescue":
        setModalContent(<LoginResc />);
        break;
      default:
        alert("Not found..");
        return;
    }
    setModalState(true);
  };
  return (
    <Card2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box pr={5} pl={5} flexDirection="row">
            <Typography align="right">Login As:</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pr={2} pl={2} display="flex" flexDirection="row-reverse">
            <Button
              className="bt"
              variant="contained"
              color="primary"
              startIcon={<FlightTakeoffIcon />}
              onClick={() => openModal("Victim")}
            >
              Victim
            </Button>

            <Button
              className="bt"
              variant="contained"
              color="primary"
              onClick={() => openModal("Rescue")}
              startIcon={<FlightLandIcon />}
            >
              Rescue Helper
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <Button
              className="bt3"
              variant="contained"
              color="secondary"
              href="/SOS"
            >
              <Typography variant="h1">SOS</Typography>
            </Button>
          </Box>
        </Grid>
        <Modal open={modalState} onClose={() => setModalState(false)}>
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>{modalContent}</div>
          </Container>
        </Modal>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Allow sharing IPaddress and your Location"
            />
          </Box>
        </Grid>
      </Grid>
    </Card2>
  );
}

export default Home;
