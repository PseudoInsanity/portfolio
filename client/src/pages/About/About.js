import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles =  makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.light,
        height: '100vh',
    },
    rootGrid: {
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