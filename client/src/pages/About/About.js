import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    background: {
        height: '100vh',
        backgroundColor: theme.palette.primary.light
    },
    rootGrid: {
        paddingBottom: theme.spacing(4)
    },
    title: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main
    }
}));

export {useStyles};