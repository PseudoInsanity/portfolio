import makeStyles from "@material-ui/core/styles/makeStyles";
import Image from "../../img/road_background.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        background: `url(${Image})`,
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "@media (max-width: 600px)": {
            maxWidth: "100%",
            background: theme.palette.secondary.main
        }
    }
}));

export { useStyles };