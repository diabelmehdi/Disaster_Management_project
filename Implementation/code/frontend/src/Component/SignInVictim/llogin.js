import React from "react";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "date-fns";
import VictimService from "../ApiService/VictimService";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(0, 0, 1),
  },
  Modal: {
    overflow: "scroll",
  },
});

class SignInVictim extends React.Component {
  
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event);
    let input = this.state.input;
    if (event.target.name !== "check") {
      input[event.target.name] = event.target.value;
    } else {
      input[event.target.name] = event.target.checked;
    }
    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    if (this.validate()) {

      var un2 = this.state.input["username"];
      var nm2 = this.state.input["name"];
      var eml2 = this.state.input["email"];
      var nstr2 = this.state.input["nrStreet"];
      var str2 = this.state.input["street"];
      var city2 = this.state.input["city"];
      var decp2 = this.state.input["description"];
      var dofb2 = this.state.input["dateOfBirth"];
      var alg2 = this.state.input["allergy"];
      var blt2 = this.state.input["bloodType"];
      var tel2 = this.state.input["tel"];

      VictimService.createVictim(
        un2,
        nm2,
        eml2,
        nstr2,
        str2,
        city2,
        decp2,
        dofb2,
        alg2,
        blt2,
        tel2,
        "/Landing"
      );

    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["check"]) {
      isValid = false;
      errors["check"] = "Please agree to the policy";
    }
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your full name.";
    }
    if (!input["allergy"]) {
      isValid = false;

      errors["allergy"] = "Please enter your type of allergy.";
    }
    if (!input["bloodType"]) {
      isValid = false;
      errors["bloodType"] = "Please enter your blood type.";
    }
    if (!input["tel"]) {
      isValid = false;
      errors["tel"] = "Please enter your phone number.";
    }

    if (!input["dateOfBirth"]) {
      isValid = false;
      errors["dateOfBirth"] = "Please enter your date of birth.";
    } else {
      // must check birthday date
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" className={classes.paper} maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            FORM
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="name"
                value={this.state.input["name"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Full Name"
                id="name"
              />
              <div className="text-danger">{this.state.errors["name"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="username"
                value={this.state.input["username"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="User Name"
                id="username"
              />
              <div className="text-danger">{this.state.errors["username"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="street"
                value={this.state.input["street"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="street"
                id="street"
              />
              <div className="text-danger">{this.state.errors["street"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dateOfBirth"
                label="dateOfBirth"
                type="date"
                value={this.state.input["dateOfBirth"]}
                onChange={this.handleChange}
                className={classes.textField}
                name="dateOfBirth"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className="text-danger">
                {this.state.errors["dateOfBirth"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                variant="outlined"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                value={this.state.input["email"]}
                onChange={this.handleChange}
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="nrStreet"
                value={this.state.input["nrStreet"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="number street"
                id="nrStreet"
              />
              <div className="text-danger">{this.state.errors["nrStreet"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                variant="outlined"
                required
                fullWidth
                id="city"
                placeholder="city"
                value={this.state.input["city"]}
                onChange={this.handleChange}
                name="city"
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="allergy"
                variant="outlined"
                placeholder="allergy"
                label="allergy"
                class="form-control"
                value={this.state.input["allergy"]}
                onChange={this.handleChange}
              />{" "}
              <div className="text-danger">{this.state.errors["allergy"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="bloodType"
                value={this.state.input["bloodType"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Blood type"
                id="bloodType"
              />
              <div className="text-danger">
                {this.state.errors["bloodType"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="tel"
                value={this.state.input["tel"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="tel"
                id="tel"
              />
              <div className="text-danger">{this.state.errors["tel"]}</div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    checked={this.state.input["check"]}
                    color="primary"
                    name="check"
                  />
                }
                label="I Agree to the Policy"
              />
              <div className="text-danger">{this.state.errors["check"]}</div>
            </Grid>
            <Grid item xs={12}>
              <form className={classes.root} noValidate autoComplete="off">
                <input
                  type="text"
                  name="description"
                  class="form-control"
                  placeholder="Description"
                  value={this.state.input["description"]}
                  onChange={this.handleChange}
                  id="filled-basic"
                  variant="filled"
                />
              </form>
            </Grid>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              className={classes.submit}
              style={{ textTransform: "none" }}
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </Grid>
          <Box
            mt={1}
            mb={1}
            display="flex"
            justifyContent="flex-end"
            width="100%"
          ></Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(SignInVictim);
