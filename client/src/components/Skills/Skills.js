import { makeStyles, lighten, withStyles } from '@material-ui/core/styles/';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.paper.secondary,
        color: theme.palette.paper.accent,
        height: '650px',
        width: '65%'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center'
    },
    bodyGrid: {
    },
    title: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main
    },
    skill: {
        paddingLeft: '8px',
        color: theme.palette.primary.main
    },
    bars: {
        width: '80%',
    },
    margin: {
        marginLeft: theme.spacing(1),
    },

}));


const BorderLinearProgress = withStyles({
    root: {
        width: 340,
        height: 31,
        borderRadius: 3,
        backgroundColor: lighten('#32615c', 1),

    },
    bar: {
        borderRadius: 3,
        backgroundColor: '#32615c'
    },
})(LinearProgress);

const SKILLS = [
    { type: "Java", level: 90 },
    { type: "HTML", level: 65 },
    { type: "Javascript", level: 50 },
    { type: "React", level: 40 },
    { type: "Git", level: 65 },
    { type: "Android", level: 70 },
];

export { useStyles, SKILLS, BorderLinearProgress };