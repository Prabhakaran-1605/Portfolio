import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  useTheme,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Ensure you have an image

// Animation variants for letter appearance
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 }
  },
};

// Combined staggered animation for the name and tagline
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Rocket (or cool emoji) animation variant
const emojiVariants = {
  hidden: { rotate: 0, y: 0 },
  visible: { 
    rotate: [0, -15, 15, -10, 10, 0], 
    y: [0, -5, 5, -5, 5, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  },
};

function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container
      id="home"
      sx={{
        marginTop: "80px",
        py: 10,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Side: Rich Text Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainerVariants}
          >
            <Typography variant="h3" gutterBottom>
              Hi, I'm{" "}
              <motion.span
                variants={letterVariants}
                style={{
                  color: isDarkMode ? "#FFCC00" : "#1976d2",
                  display: "inline-block",
                }}
              >
                {"Prabhakaran Haribaskar".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>{" "}
              <motion.span
                variants={emojiVariants}
                style={{ display: "inline-block" }}
              >
                🚀
              </motion.span>
            </Typography>
            <motion.div
  animate={{ opacity: 1, color: ["#FF4500", "#f5b041", "#52be80", "#a569bd ", "#FF69B4"] }}
  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
>
  <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
    Full-Stack MERN Developer & Tech Enthusiast
  </Typography>
</motion.div>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome to my personal portfolio! I specialize in building scalable web applications using <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, <b>MongoDB</b>, and <b>Redux Toolkit</b>. I am passionate about crafting engaging user experiences and optimizing performance.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2">
                With a focus on <b>responsive design</b>, <b>clean code</b>, and <b>innovation</b>, I continuously explore new technologies to enhance the way users interact with digital experiences.
              </Typography>
            </Box>
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
