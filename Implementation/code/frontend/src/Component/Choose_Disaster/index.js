import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Disaster from "src/Component/Notification";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import swal from 'sweetalert';

import "./Style.css";
import VictimService from "../ApiService/VictimService";

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

export default function AutoGrid() {
  const classes = useStyles();
  const [modalContent, setModalContent] = React.useState(<div></div>);
  const [modalState, setModalState] = React.useState(false);

  const sendDisaster = (disaster) => {
    var victim = {
      disaster: disaster
    }
    swal({
      text: 'Please fill out your username!',
      content: "input",
      button: {
        text: "OK!",
        closeModal: false,
      },
    })
      .then(name => {
        if (!name) throw new Error("Name Not Found");
        VictimService.updateDisaster(victim, name).then((res) => {
          swal.stopLoading();
          swal.close();
          setModalState(true)
        }).catch(err => {
          if (err) {
            swal("Oh noes!", "Check your username!", "error");
          } else {
            swal.stopLoading();
            swal.close();
          }
        }
        )
      })

  }

  const openModal = (disaster) => {
    console.log(disaster);
    sendDisaster(disaster)
    switch (disaster) {
      case "HandWashing":
        setModalContent(<Disaster />);
        break;
      case "Earthquake":
        setModalContent(<Disaster />);
        break;
      case "Landslide":
        setModalContent(<Disaster />);
        break;
      case "Flood":
        setModalContent(<Disaster />);
        break;
      case "Fire":
        setModalContent(<Disaster />);
        break;
      case "Thunderstorm":
        setModalContent(<Disaster />);
        break;
      case "Windstorm":
        setModalContent(<Disaster />);
        break;
      case "Snakebite":
        setModalContent(<Disaster />);
        break;
      case "Epidemic":
        setModalContent(<Disaster />);
        break;
      case "Drought":
        setModalContent(<Disaster />);
        break;
      case "Avalanche":
        setModalContent(<Disaster />);
        break;
      case "Hailstorm":
        setModalContent(<Disaster />);
        break;
      default:
        alert("Not found..");
        return;
    }
    setModalState(false);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center">
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("HandWashing")}
            >
              <Typography variant="subtitle2">HAND WASHING</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Earthquake")}
            >
              <Typography variant="subtitle2">EARTHQUAKE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Landslide")}
            >
              <Typography variant="subtitle2">LANDSLIDE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Flood")}
            >
              <Typography variant="subtitle2">FLOOD</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Fire")}
            >
              <Typography variant="subtitle2">FIRE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Thunderstorm")}
            >
              <Typography variant="subtitle2">THUNDERSTORM</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Windstorm")}
            >
              <Typography variant="subtitle2">WINDSTORM</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Snakebite")}
            >
              <Typography variant="subtitle2">SNAKEBITE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Epidemic")}
            >
              <Typography variant="subtitle2">EPIDEMIC</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Drought")}
            >
              <Typography variant="subtitle2">DROUGHT</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Avalanche")}
            >
              <Typography variant="subtitle2">AVALANCHE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Hailstorm")}
            >
              <Typography variant="subtitle2">HAILSTORM</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Modal open={modalState} onClose={() => setModalState(false)}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>{modalContent}</div>
        </Container>
      </Modal>
    </React.Fragment>
  );
}
