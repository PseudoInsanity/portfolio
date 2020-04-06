import React from 'react';  
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import darkTheme from '../themes/darkTheme';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Projects from '../pages/Projects/Projects.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import Fade from 'react-reveal/Fade';

const App = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Home />
            <Fade unMountOnExit={true} >
                <About />
                <Projects />
                <Contact />
            </Fade>

        </ThemeProvider>
    );
}

export default App;