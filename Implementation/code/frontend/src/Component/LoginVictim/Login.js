import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  Button,
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import SignUp from "src/Component/SignInVictim/llogin";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
  paper: {
    backgroundColor: "white",
  },
});

class LoginTab extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
  }

  manageModal(openModalParam) {
    this.setState({
      openModal: openModalParam,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={1} className={classes.padding}>
        <Grid container justify="center" style={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            color="primary"
            style={{ textTransform: "none" }}
            onClick={() => this.manageModal(true)}
          >
            Register Yourself !
          </Button>

          <Modal
            open={this.state.openModal}
            onClose={() => this.manageModal(false)}
          >
            <SignUp />
          </Modal>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(LoginTab);
