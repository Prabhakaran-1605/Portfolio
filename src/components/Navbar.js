import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion"; // Import Framer Motion for smooth animations

function Navbar({ scrollToSection, refs }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuClick = (ref) => {
        scrollToSection(ref);
        setMobileOpen(false); // Close drawer after clicking
    };

    const menuItems = [
        { text: "Home", ref: refs.homeRef },
        { text: "About", ref: refs.aboutRef },
        { text: "Experience", ref: refs.experienceRef },
        { text: "Skills", ref: refs.skillsRef },
        { text: "Testimonials", ref: refs.testimonialRef},
        { text: "Contact", ref: refs.contactRef },
    ];

    return (
        <>
            {/* Navbar */}
            <AppBar
                position="fixed"
                sx={{
                    background: theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #36013F 0%, #FF1493 100%)"
                        : "linear-gradient(135deg, #0066FF 0%, #00C6FF 100%)",
                    backdropFilter: "blur(10px)", // Blurred glass effect
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    px: 2
                }}
            >
                <Toolbar>
                    {/* 🚀 Portfolio - Left-Aligned */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: theme.palette.mode === "dark" ? "#ffcc00" : "#000",
                            }}
                        >
                            🚀 Portfolio
                        </Typography>
                    </motion.div>

                    {/* 🔥 Space Between Portfolio & Buttons */}
                    <Box sx={{ flexGrow: 1 }}></Box>

                    {/* Buttons - Right-Aligned */}
                    {!isMobile ? (
                        <Box sx={{ display: "flex", gap: 2 }}>
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <Button
                                    color="inherit"
                                    sx={{
                                        fontWeight: "bold",
                                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                                        '&:hover': { color: "#f8930a" } // Add hover color to the Button
                                    }}
                                    onClick={() => handleMenuClick(item.ref)}
                                >
                                    {item.text}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>
                    ) : (
                        // Mobile View - Animated Hamburger Menu
                        <IconButton color="black" edge="end" onClick={handleDrawerToggle}>
                            <motion.div
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MenuIcon />
                            </motion.div>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer - Modern Animated Sidebar */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        background: "rgba(255, 191, 0, 0.2)", // Glass effect
                        backdropFilter: "blur(10px)", // Blurred effect
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    }
                }}
            >
                <List sx={{ width: 250 }}>
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <ListItem button onClick={() => handleMenuClick(item.ref)}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
