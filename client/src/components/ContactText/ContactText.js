import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
    },
    grid: {
        margin: theme.spacing(2)
    },
    text: {
        color: theme.palette.primary.light,
        margin: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
    title: {
        color: theme.palette.primary.light,
        margin: theme.spacing(1),
    },


}));

export { useStyles };