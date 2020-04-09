import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
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
            return 'EPPN app';
        case 3:
            return `Smart House Server (school project)`;
        case 4:
            return 'Aasfalis (school project)'
        case 5:
            return 'Magic Mirror'
        case 6:
            return 'Gallery'
        default:
            return 'Unknown step';
    }
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Helped develop the case study for my bachelors thesis. The application was built in React, where I was a part of the frontend team.`;
        case 1:
            return 'Involed in a team of 4 developers to create a web application for our course in Software Development for the Web';
        case 2:
            return 'Development of an Android App regarding EPPN (European Network for Pilot Production Facilities And Innovation Hubs) digital platform to offer the European pilot line facilities.';
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
            return `https://github.com/PseudoInsanity/EPPN`;
        case 3:
            return `https://github.com/mmadrus/HouseServer`;
        case 4:
            return `https://github.com/mmadrus/Aasfalis`;
        case 5:
            return `Not applicable`;
        default:
            return 'Not applicable'    
    }
}

function getDescription(step) {
    switch (step) {
        case 0:
            return `The thesis itself is about performance testing of web applications. Specifically, the frontend of a web application. The case study was built by a team of 7 students and was intended for the company to be used internally by the managers as a planning tool and was built in React.js for the frontend and Express.js for the backend. As this was my first real exposure to web development, I wanted to be a part of the frontend team so that I could properly learn how to create web applications in React. As my knowledge was limited, the rest of the team did have prior knowledge in the subject and made it a great learning experience for me.`;
        case 1:
            return `During the same period, although much shorter, I had a school project due to create a web application. Me and three other classmates decided to build this application using the MERN stack (MongoDB, Express.js, Node.js and React.js). Again, I was involved in the frontend team as I wanted to put my recently learned knowledge in React to the test. It was a challenge indeed since this time I didn't have higher expertise to fall on when I got stuck. The project did turn out good and it also helped me put more pieces together to understand React even more`;
        case 2:
            return `This was an internship at Onvega AB where the purpose was for me to develop an Android application that would be used in the EPPN organisation. The application was designed and developed by myself and really put my skills and self-discipline to the test. Fortunately, I did get help and input on some aspects of it by a senior developer that was not involved in the project. This made the application much more usable, stable and it did teach me many things about Android development. Mostly that it is not my favourite platform to develop for.`;
        case 3:
            return `This school project was a part of Software Engineering 2 where the class was divided in to 4 groups of 15 developers. Each group had 4 sub-groups and I was a part of the Server/Database group. We were 5 developers in the team that created the REST-api, built the database and created the connection between Client and Server. The backend was built in Java. My role involved building the REST-api but mostly I was responsible of deploying the server remotely. After much research I decided on deploying it on an EC2 instance on AWS. Besides having the server running remotely at all times, this also gave us the ability to deploy our local code to the EC2 instance without any interruption, which was very cool.`;
        case 4:
            return 'This school project was a part of Software Engineering where we were divided in to groups of 4 people. Our group decided to create an application that could be used to alert emergency contacts if the user has not reached their destination in a long time. The application was an Android application where we used Google Maps for map placement and directions. Firebase was used for data storing. My role was to implement the map functionality of the application.';
        case 5:
            return 'I was interested in creating my first personal project of some sort as I was getting more and more comfortable in development. I decided to create a Magic Mirror using a Raspberry Pi. The mirror itself was made with a picture frame, reflecting film and an old monitor that I stripped down and but behind the glass. This project gave me very hands on experience with Linux OS (Debian in this case) and using the terminal for operations, which I was not used to at this point.';
        default:
            return 'Unknown step';
    }
}

// eslint-disable-next-line
export { useStyles, getSteps, getStepTitle, getStepContent, getGithubLink, getDescription };
