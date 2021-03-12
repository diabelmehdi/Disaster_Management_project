import React from "react";
import "./Style.css";
import Card2 from "src/Component/UI/Card2";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import SchoolIcon from "@material-ui/icons/School";
const Help = (props) => {
  return (
    <Card2>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={8}>
          <Typography className="Led" align="center">
            Disaster Management web App designed to help the victims or the
            emergency cases to get in contact with rescue helpers quickly also
            to avoid huge damages in order to help the maximum peoples in short
            amount of time.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div className="h1">General Contact</div>
          <ul>
            <div>
              <SchoolIcon />
              Frankfurt University of Applied Sciences
            </div>
            <div>
              <RoomIcon />
              Nibelungenplatz 1 D-60318 Frankfurt am Main
            </div>
            <div>
              <PhoneIcon />
              Phone: +49 69 1533-0
            </div>
            <div>
              <EmailIcon />
              post (at) fra-uas. de
            </div>
          </ul>
        </Grid>
      </Grid>
    </Card2>
  );
};

export default Help;
