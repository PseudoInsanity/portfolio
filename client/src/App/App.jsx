import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import darkTheme from '../themes/darkTheme';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Projects from '../pages/Projects/Projects.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import Fade from 'react-reveal/Fade';
import TopBar from '../components/TopBar/TopBar.jsx';
import { useStyles } from './App.js';

const App = () => {
    const classes = useStyles()

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <div className={classes.root}>
            <Home />
            <TopBar />
                <Fade unMountOnExit={true} >
                    <About />
                    <Projects />
                    <Contact />
                </Fade>
            </div>

        </ThemeProvider>
    );
}

export default App;