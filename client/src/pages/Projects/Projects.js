import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    rootGrid: {

        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.light
    },
    background: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100vh'
    }
}));

export {useStyles};