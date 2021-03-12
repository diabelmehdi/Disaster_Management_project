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
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "date-fns";
import RescueHelperService from "src/Component/ApiService/RescueHelperService";

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

class SignInRescue extends React.Component {
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
    event.preventDefault();
    if (this.validate()) {

      var un1 = this.state.input["Matriculation Number"];
      var pwd1 = this.state.input["password"];
      var nm1 = this.state.input["username"];
      var eml1 = this.state.input["email"];
      var Bird1 = this.state.input["birthday"];
      var age1 = this.state.input["age"];
      var dpr1 = this.state.input["department"];
      var dec1 = this.state.input["description"];
      var tel1 = this.state.input["phoneNumber"];
      var Prf1 = this.state.input["profession"];

      RescueHelperService.createRescueHelper(
        un1,
        pwd1,
        nm1,
        eml1,
        Bird1,
        age1,
        dpr1,
        dec1,
        tel1,
        Prf1,
        "/LoginResc"
      );
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["check"]) {
      isValid = false;
      errors["check"] = "please agree to the policy";
    }

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your Full Name.";
    }
    if (!input["Matriculation Number"]) {
      isValid = false;
      errors["Matriculation Number"] =
        "Please enter your Matriculation Number.";
    }
    if (!input["profession"]) {
      isValid = false;
      errors["profession"] = "Please enter your Profession.";
    }
    if (!input["phoneNumber"]) {
      isValid = false;
      errors["phoneNumber"] = "Please enter your Phone Number.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (!input["birthday"]) {
      isValid = false;
      errors["birthday"] = "Please enter your date Of Birth.";
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
            Sign in
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="username"
                value={this.state.input["username"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Full Name"
                id="username"
              />
              {
                <div className="text-danger">
                  {this.state.errors["username"]}
                </div>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="Matriculation Number"
                value={this.state.input["Matriculation Number"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Matriculation Number"
                id="Matriculation Number"
              />
              <div className="text-danger">
                {this.state.errors["Matriculation Number"]}
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="birthday"
                type="date"
                value={this.state.input["birthday"]}
                onChange={this.handleChange}
                className={classes.textField}
                name="birthday"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className="text-danger">{this.state.errors["birthday"]}</div>
            </Grid>
            <Grid item xs={12}>
              <input
                value={this.state.input["email"]}
                onChange={this.handleChange}
                id="email"
                label="Email Address"
                name="email"
                class="form-control"
                placeholder="Enter your Email"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="password"
                name="password"
                value={this.state.input["password"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter password"
                id="password"
              />

              <div className="text-danger">{this.state.errors["password"]}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                value={this.state.input["department"]}
                onChange={this.handleChange}
                id="department"
                label="department"
                name="department"
                autoComplete="department"
                placeholder="department"
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                name="age"
                variant="outlined"
                value={this.state.input["age"]}
                onChange={this.handleChange}
                id="age"
                label="Age"
                placeholder="Age"
                class="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="profession"
                value={this.state.input["profession"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Profession"
                id="profession"
              />
              {
                <div className="text-danger">
                  {this.state.errors["profession"]}
                </div>
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="text"
                name="phoneNumber"
                value={this.state.input["phoneNumber"]}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Phone Number"
                id="phoneNumber"
              />
              {
                <div className="text-danger">
                  {this.state.errors["phoneNumber"]}
                </div>
              }
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
                  value={this.state.input["description"]}
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="description"
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
          >
            <Link href="LoginResc" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(SignInRescue);
