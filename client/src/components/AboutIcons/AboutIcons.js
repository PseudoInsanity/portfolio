import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(5),
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