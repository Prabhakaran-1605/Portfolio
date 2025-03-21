import React from "react";
import { Container, Typography, Grid, Paper, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { 
    SiHtml5, SiCss3, SiGithub, SiJsonwebtokens, // Newly Added Icons
    SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiRedux, 
    SiTypescript, SiMui, SiBootstrap 
} from "react-icons/si";

// Skills Data with Icons and Colors
const skills = [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E44D26" }, 
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ff9999" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#99b3ff" },
    { name: "MySQL", icon: <SiMysql />, color: "#99ffff" },
    { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#ef2708" },
    { name: "GitHub", icon: <SiGithub />, color: "#72b83f" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#b31470" },
    { name: "Material-UI", icon: <SiMui />, color: "#df8e09" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#ee0f4c" },
];

const emojiVariants = {
    hidden: { rotate: 0, y: 0 },
    visible: { rotate: [0, -10, 10, -5, 5, 0], y: [-5, 5, -5, 5, 0], transition: { duration: 1.5, repeat: Infinity } },
};

function Skills() {
    const theme = useTheme(); // Get the theme
    const isDarkMode = theme.palette.mode === "dark"; // Check if dark mode is enabled

    return (
        <Container sx={{ minHeight: "100vh", paddingTop: 8 }}>
            {/* Section Title */}
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    textAlign: "center", 
                    fontWeight: "bold", 
                    color: isDarkMode ? "#ffcc00" : "#1976d2", // Dynamic title color
                    marginBottom: "25px",
                    marginTop: "25px"
                }}
            >
                My Technical Skills <motion.span variants={emojiVariants} animate="visible" style={{ display: "inline-block" }}>
                                                🚀
                                            </motion.span>
            </Typography>

            {/* Skills Grid */}
            <Grid container spacing={3} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                        <Paper 
                            elevation={6} 
                            sx={{ 
                                padding: 3, 
                                textAlign: "center", 
                                background: isDarkMode 
                                    ? `linear-gradient(135deg, ${skill.color} 30%, #333 100%)` // Dark mode gradient
                                    : `linear-gradient(135deg, ${skill.color} 30%, #ffffff 100%)`, // Light mode gradient
                                color: isDarkMode ? "#fff" : "#333",
                                borderRadius: 3,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                            }}
                        >
                            {/* Animated Icon */}
                            <Box sx={{ fontSize: "3rem" }}>
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }} 
                                    animate={{ scale: 1, opacity: 1 }} 
                                    whileHover={{ scale: 1.2, rotate: 10 }} 
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    {skill.icon}
                                </motion.div>
                            </Box>

                            {/* Animated Skill Name - Continuous Animation */}
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ 
                                    scale: [1, 1.1, 1], // Scale effect
                                    color: ["#333", "#000", "#333"], // Color transition effect
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            >
                                <Typography 
                                    variant="subtitle1" 
                                    sx={{ fontWeight: "bold", fontSize: "1.1rem" ,color: isDarkMode ? "#fff" : "#333",}}
                                >
                                    {skill.name}
                                </Typography>
                            </motion.div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Skills;
