import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.primary.main,
        padding: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main
    },
    avatarTitle: {
        color: theme.palette.primary.main
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
    title: {
        color: theme.palette.primary.main,
        margin: theme.spacing(1),
    },
  

}));

export { useStyles };