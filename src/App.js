import React, { useRef, useState, useMemo, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme, GlobalStyles } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import lightLogo from "./assets/light-mode-logo.png";  // Light mode logo
import darkLogo from "./assets/dark-mode-logo.png";    // Dark mode logo

function App() {
    // State for theme mode (default to dark)
    const storedTheme = localStorage.getItem("theme") || "dark";
    const [mode, setMode] = useState(storedTheme);

    // Save theme preference in local storage
    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    // Create theme based on mode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    ...(mode === "dark"
                        ? { background: { default: "#121212", paper: "#1e1e1e" }, text: { primary: "#fff" } }
                        : { background: { default: "#f5f5f5", paper: "#fff" }, text: { primary: "#000" } }
                    ),
                },
            }),
        [mode]
    );

    // Create section references for scrolling
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const testimonialRef = useRef(null);
    const contactRef = useRef(null);

    // Function to handle smooth scrolling
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Global Scrollbar Styles */}
            <GlobalStyles
                styles={{
                    "::-webkit-scrollbar": {
                        width: "10px",
                    },
                    "::-webkit-scrollbar-track": {
                        background: theme.palette.mode === "dark" ? "linear-gradient(135deg, #ff758c, #ff7eb3)" : "linear-gradient(135deg, #6a11cb, #2575fc)",
                        borderRadius: "10px",
                    },
                    "::-webkit-scrollbar-thumb": {
                        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-in-out",
                    },
                    "::-webkit-scrollbar-thumb:hover": {
                        background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
                        cursor: "pointer",
                    },
                    "html": {
                        scrollbarColor: mode === "dark" ?" #6a11cb #ff758c" : " #6a11cb, #2575fc",
                        scrollbarWidth: "thin",
                    }
                }}                                      
            />

            <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, experienceRef, skillsRef, testimonialRef, contactRef }} />
            
            <Box ref={homeRef} sx={{ scrollMarginTop: { xs: '70px', md: '80px' } }}>
  <Home />
</Box>

<Box ref={aboutRef} sx={{ scrollMarginTop: { xs: '70px', md: '80px' } }}>
  <About />
</Box>

<Box ref={experienceRef} sx={{ scrollMarginTop: { xs: '15px', md: '15px' } }}>
  <Experience />
</Box>

<Box ref={skillsRef} sx={{ scrollMarginTop: { xs: '15px', md: '15px' } }}>
  <Skills />
</Box>

<Box ref={testimonialRef} sx={{ scrollMarginTop: { xs: '5px', md: '5px' } }}>
  <Testimonial />
</Box>

<Box ref={contactRef} sx={{ scrollMarginTop: { xs: '5px', md: '5px' } }}>
  <Contact />
</Box>

            <Footer scrollToSection={scrollToSection} refs={{ aboutRef, skillsRef, testimonialRef, contactRef }} />

            {/* Vibrant Theme Toggle Logo */}
            <img 
                src={mode === "dark" ? darkLogo : lightLogo} 
                alt="Toggle Theme" 
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                    borderRadius: "50%",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1.0)"}
            />
        </ThemeProvider>
    );
}

export default App;
