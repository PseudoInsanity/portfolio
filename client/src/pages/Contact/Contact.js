import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    rootGrid: {

        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(2),
    },
    background: {
        minHeight: '100vh',
        minWidth: '100%',
        backgroundColor: theme.palette.primary.main
    }
}));

export {useStyles};