import React from "react";
import HomeText from "../../components/HomeText/HomeText.jsx";
import { useStyles } from "./Home.js";
import { Grid } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={12}
      id="home"
      alignItems="center"
      className={classes.background}
    >
      <HomeText />
    </Grid>
  );
};

export default Home;
