import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.light,
        minHeight: '100vh',
    },
    rootGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(4)
    },
    avatar: {
        margin: theme.spacing(5),
        backgroundColor: theme.palette.secondary.main
    },
    avatarTitle: {
        color: theme.palette.primary.main
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.primary.main
    },
    content: {
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 600px)": {
          flexDirection: "column"
        }
      },
      aboutContent: {
        "@media (max-width: 600px)": {
          maxWidth: "100%"
        }
      }
}));

export {useStyles};