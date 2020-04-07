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
    }
}));

export {useStyles};