import React from "react";
import HomeText from "../../components/HomeText/HomeText.jsx";
import Buttonbase from "../../components/Buttonbase/Buttonbase.jsx";
import Particles from "react-particles-js";
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
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.background}
    >
      <HomeText />
      <Buttonbase />
    </Grid>
  );
};
export default Home;