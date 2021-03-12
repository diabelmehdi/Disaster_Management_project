import React from "react";
import "./Style.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Logo = (props) => {
  return (
    <Grid item xs={12}>
      <Box Cdisplay="flex" justifyContent="center" m={1} p={1}>
        {/* <a herf="#">Disaster Management Application</a> */}
        <Typography className="lego" align="center">
          Disaster Management Application
        </Typography>
      </Box>
    </Grid>
  );
};

export default Logo;
