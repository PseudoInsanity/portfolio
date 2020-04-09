import { makeStyles } from '@material-ui/core/styles/';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.secondary.main
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
    },
}));



export { useStyles };