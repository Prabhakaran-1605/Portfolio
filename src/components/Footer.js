import React from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { motion } from "framer-motion";

const emojiVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: [0, -5, 0], // Small bounce effect
        transition: { duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" },
    },
};

const Footer = ({ scrollToSection, refs }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                py: 6,
                background: isDarkMode
                    ? "linear-gradient(135deg, #36013F 0%, #FF1493 100%)"
                    : "linear-gradient(135deg, #0066FF 0%, #00C6FF 100%)",
                color: "#fff",
                mt: 4,
                boxShadow: "0px -5px 20px rgba(0,0,0,0.3)",
            }}
        >
            {/* Wave SVG for Animated Effect */}

            {/* Footer Branding */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, fontFamily: "Poppins, sans-serif" }}>
                Prabhakaran Haribaskar
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontStyle: "italic", opacity: 0.9 }}>
                "Empowering the Future of Digital Innovation 
                <motion.span variants={emojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
                        🌟
                    </motion.span> " 
            
            </Typography>

            {/* Animated Social Icons with Neon Glow */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
                {[
                    { icon: <Facebook />, color: "#1877F2" },
                    { icon: <Instagram />, color: "#E4405F" },
                    { icon: <LinkedIn />, color: "#0A66C2" },
                    { icon: <Twitter />, color: "#1DA1F2" },
                ].map((social, index) => (
                    <IconButton
                        key={index}
                        sx={{
                            color: "#fff",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.2)",
                                boxShadow: `0px 0px 15px ${social.color}`,
                            },
                        }}
                    >
                        {social.icon}
                    </IconButton>
                ))}
            </Box>

            {/* Footer Links with Hover Animation */}
              {/* Footer Links */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
                {[
                    { text: "About", ref: refs.aboutRef },
                    { text: "Services", ref: refs.skillsRef }, // Assuming services are skills
                    { text: "Contact", ref: refs.contactRef }
                ].map((item, index) => (
                    <Typography
                        key={index}
                        variant="body2"
                        sx={{
                            cursor: "pointer",
                            fontWeight: "500",
                            transition: "color 0.3s ease, transform 0.3s ease",
                            "&:hover": {
                                color: isDarkMode ? "#FFD700" : "#FF4500",
                                transform: "translateY(-3px) scale(1.1)",
                                textShadow: `0px 0px 10px ${isDarkMode ? "#FFD700" : "#FF4500"}`,
                            },
                        }}
                        onClick={() => scrollToSection(item.ref)}
                    >
                        {item.text}
                    </Typography>
                ))}
            </Box>

            {/* Copyright Section with a Stylish Divider */}
            <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.3)", py: 2, mt: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    © {new Date().getFullYear()} Prabhakaran Haribaskar. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
