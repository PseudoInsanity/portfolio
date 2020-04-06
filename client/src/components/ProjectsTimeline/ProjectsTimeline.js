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

function getSteps() {
    return ['01/2020 - 05/2020', '02/2020 - 03/2020', '10/2019 - 02/2020', '08/2019 - 12/2019', '03/2019 - 05/2019', '05/2019'];
}

function getStepTitle(step) {
    switch (step) {
        case 0:
            return `NinjaCardManager at tretton37`;
        case 1:
            return `Rent A Butler`
        case 2:
            return 'EPPN app for European Network for Pilot Production Facilities and Innovation Hubs';
        case 3:
            return `Smart House Server (school project)`;
        case 4:
            return 'Aasfalis (school project)'
        case 5:
            return 'Magic Mirror'
        default:
            return 'Unknown step';
    }
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Helped develop the case study for my bachelors thesis. The application was built in React, where I was a part of the frontend team. This is where I had my first exposure to React.js and where I started learning it.`;
        case 1:
            return 'Involed in a team of 4 developers to create a web application for our course in Software Development for the Web';
        case 2:
            return 'Developed an Android application for a European funded network for nano technology.';
        case 3:
            return `Involved with a team of 5 developers where we were responsible for developing the backend for a Smart House project. I was also responsible of deploying the backend on AWS.`;
        case 4:
            return 'Involved with a team of 4 developers where we created an Android application with authorization, Google map features and chat functionality';
        case 5:
            return 'Built a Magic Mirror with a Raspberry 3 and a home made mirror using an old screen and a frame';
        default:
            return 'Unknown step';
    }
}

function getGithubLink(step) {
    switch (step) {
        case 0:
            return `Not applicable`;
        case 1:
            return `https://github.com/PseudoInsanity/rent-a-butler`;
        case 2:
            return `Not applicable`;
        case 2:
            return `https://github.com/mmadrus/HouseServer`;
        case 3:
            return `https://github.com/mmadrus/Aasfalis`;
        case 4:
            return `Not applicable`;
    }
}


export { useStyles, getSteps, getStepTitle, getStepContent, getGithubLink };