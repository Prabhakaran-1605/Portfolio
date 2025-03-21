import { Container, Typography, Grid,useTheme } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Ensure you have an image

// Animation Variants for Text
const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Rocket Animation (Tilt & Bounce)
const emojiVariants = {
    hidden: { rotate: 0, y: 0 },
    visible: { rotate: [0, -10, 10, -5, 5, 0], y: [-5, 5, -5, 5, 0], transition: { duration: 1.5, repeat: Infinity } },
};

function Home() {
        const theme = useTheme();
        const isDarkMode = theme.palette.mode === "dark";
    return (
        <Container sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
            <Grid container spacing={4} alignItems="center">
                
                {/* Left Side: Animated Text Content */}
                <Grid item xs={12} md={6}>
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                        }}
                    >
                        {/* Name with Rocket Emoji 🚀 */}
                        <Typography variant="h3" gutterBottom>
                            Hi, I'm{" "}
                            <motion.span
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.1 }}
                                style={{ color: isDarkMode ? "#FFCC00" : "#1976d2", display: "inline-block" }}
                            >
                                {"Prabhakaran Haribaskar".split("").map((char, index) => (
                                    <motion.span key={index} variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))} </motion.span>{" "}<motion.span variants={emojiVariants} animate="visible" style={{ display: "inline-block" }}>
                                🚀
                            </motion.span>
                        </Typography>

                        {/* Description */}
                        <Typography variant="h6" color="textSecondary">
                            I am a passionate <b>MERN Stack Developer</b> specializing in 
                            <b> React.js, Node.js, Express.js, MongoDB</b>, and <b>Redux Toolkit</b>.
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            With expertise in **performance optimization**, **responsive UI**, and **test-driven development**, 
                            I create seamless user experiences.
                        </Typography>
                    
                    </motion.div>
                </Grid>

                {/* Right Side: Animated Profile Image */}
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <motion.img 
                        src={profilePic} 
                        alt="Profile" 
                        style={{ width: "70%", borderRadius: "5%", maxWidth: "300px" }}
                        initial={{ scale: 0.5, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }} // Slight zoom on hover
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
