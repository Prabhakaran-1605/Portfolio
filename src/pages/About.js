import { Container, Typography, Box, Grid, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // Ensure this image is in your assets folder

function About() {
    const theme = useTheme(); // Get current theme
    const isDarkMode = theme.palette.mode === "dark"; // Check if dark mode is enabled

    const lightBulbVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: 0 },
        visible: {
            opacity: 1,
            scale: [1, 1.3, 1], // Pulsing effect
            rotate: [0, 10, -10, 0], // Slight rotation
            transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        },
    };
    
    return (
        <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          alignItems: "center"
        }}
      >
      
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ width: "100%" }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* Profile Image on the Left */}
                    <Grid item xs={12} md={4}>
                        <Box
                            component="img"
                            src={profileImage}
                            alt="Profile"
                            sx={{
                                width: "100%",
                                maxWidth: 280,
                                borderRadius: 2,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </Grid>

                    {/* About Content on the Right */}
                    <Grid item xs={12} md={8}>
                        {/* Section Title with Dynamic Theme Color */}
                        <Typography 
                            variant="h4" 
                            gutterBottom 
                            sx={{ fontWeight: "bold", color: isDarkMode ? "#ffcc00" : "#1976d2" }}
                        >
                            About Me <motion.span variants={lightBulbVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
        💡
    </motion.span>
                        </Typography>

                        {/* Summary */}
                        <Typography variant="body1" paragraph>
                            I am a <strong>MERN Stack Developer</strong> with over <strong>2 years of experience</strong> 
                            in developing scalable and user-friendly web applications. With expertise in 
                            <strong> React.js, Node.js, Express.js, MongoDB</strong>, and modern frontend technologies, 
                            I strive to build high-performance applications that solve real-world problems.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            I am passionate about writing clean, maintainable code and staying updated 
                            with the latest trends in web development. I have hands-on experience with 
                            <strong> REST APIs, state management (Redux), UI/UX design, and cloud deployment.</strong>
                        </Typography>

                        <Typography variant="body1" paragraph>
                            When I'm not coding, I love exploring new technologies, contributing to open-source projects, 
                            and mentoring aspiring developers.
                        </Typography>

                        {/* Download CV Button */}
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="/Software Engineer - Resume Prabhakaran Haribaskar.pdf"  
                            download="Prabhakaran_Haribaskar_CV.pdf"
                            sx={{ marginTop: 2, fontWeight: "bold" }}
                        >
                            📄 Download CV
                        </Button>
                    </Grid>
                </Grid>
            </motion.div>
        </Container>
    );
}

export default About;
