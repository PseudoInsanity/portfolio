import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },


}));

export { useStyles };