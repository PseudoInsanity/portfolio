import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(3)
  },
  text: {
    color: theme.palette.primary.light,
    padding: theme.spacing(1)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  title: {
    color: theme.palette.primary.light
  },
  box: {
    height: '100%',
    '@media (min-width: 700px)': {
      width: '30%',
      height: '100%'
    }
  }
}));
export { useStyles };