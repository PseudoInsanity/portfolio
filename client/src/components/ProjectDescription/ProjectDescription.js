import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    paper: {
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
    grid: {
        margin: theme.spacing(3),
        
    },

}));

export { useStyles };