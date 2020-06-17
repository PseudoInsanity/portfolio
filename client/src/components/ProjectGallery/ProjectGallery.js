import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        '&.MuiPaper-root': {
            backgroundColor: theme.palette.primary.main,
        },
        color: theme.palette.primary.light,
        height: '650px',
        width: '65%',
        "@media (max-width: 600px)": {
            width: "100%",
        }
    },
    gridList: {
        width: 500,
        height: 300,
        transform: 'translateZ(0)',
    },
}));


export { useStyles };