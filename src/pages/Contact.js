import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Grid, useTheme, Snackbar, SnackbarContent } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatusMessage("Please fill all required fields.");
            setOpenSnackbar(true);
            return;
        }

        emailjs
            .send(
                'service_26r0i0b', // Replace with EmailJS Service ID
                'template_bya2hpr', // Replace with EmailJS Template ID
                formData,
                '9GJ6eTHTpGXFRalR-' // Replace with EmailJS Public Key
            )
            .then(
                () => {
                    setStatusMessage("Message sent successfully!");
                    setOpenSnackbar(true);
                    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form after success
                },
                () => {
                    setStatusMessage("Failed to send message. Try again.");
                    setOpenSnackbar(true);
                }
            );
    };

    // Enhanced emoji animation (subtle pulse effect)
const emojiVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: [1, 1.2, 1], // Gentle pop effect
        transition: { duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" },
    },
};

    return (
        <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", py: 4 }}>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#f5f5f5",
                    borderRadius: 2,
                    color: isDarkMode ? "#fff" : "#000",
                    padding: 6,
                }}
            >
                {/* Contact Title */}
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: isDarkMode ? "#ffcc00" : "#1976d2",
                        mb: 11,
                    }}
                >
                    Contact  <motion.span variants={emojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
        💬
    </motion.span>
                </Typography>

                <Grid container spacing={6}>
                    {/* Left Side: Contact Information */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            background: isDarkMode ? "#30004d" : "#30004d",
                            color: "#fff",
                            padding: 4,
                            borderRadius: 3,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                            Contact Information
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Fill up the form and we will get back to you within 24 hours.
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Phone sx={{ color: "#ff4081", mr: 1 }} />
                            <Typography variant="body1">+91 7708819449</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                            <Email sx={{ color: "#ff4081", mr: 1 }} />
                            <Typography variant="body1">1605prabhu@gmail.com</Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                            <Box sx={{ width: 40, height: 40, borderRadius: "50%", background: "#b300a3", mx: 1 }} />
                            <Box sx={{ width: 20, height: 20, borderRadius: "50%", background: "#ff4081", mx: 1, alignSelf: "flex-end" }} />
                        </Box>

                        {/* Social Media Icons */}
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: -2 }}>
                            <FacebookIcon sx={{ cursor: "pointer", fontSize: 36, transition: "transform 0.3s ease, color 0.3s ease", "&:hover": { transform: "scale(1.2)", color: "#E4405F" } }} />
                            <InstagramIcon sx={{ cursor: "pointer", fontSize: 36, transition: "transform 0.3s ease, color 0.3s ease", "&:hover": { transform: "scale(1.2)", color: "#E4405F" } }} />
                            <LinkedInIcon sx={{ cursor: "pointer", fontSize: 36, transition: "transform 0.3s ease, color 0.3s ease", "&:hover": { transform: "scale(1.2)", color: "#E4405F" } }} />
                        </Box>
                    </Grid>

                    {/* Right Side: Contact Form */}
                    <Grid item xs={12} md={7} sx={{ background: isDarkMode ? "#121212" : "#fff", padding: 4, borderRadius: 3 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                variant="standard"
                                value={formData.name}
                                onChange={handleChange}
                                sx={{ mb: 2, borderBottom: "2px solid #800080" }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                variant="standard"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{ mb: 2, borderBottom: "2px solid #800080" }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                variant="standard"
                                value={formData.phone}
                                onChange={handleChange}
                                sx={{ mb: 2, borderBottom: "2px solid #800080" }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                variant="standard"
                                placeholder="Write your message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                sx={{ mb: 3, borderBottom: "2px solid #800080" }}
                                required
                            />

                            {/* Submit Button */}
                            <Button type="submit" variant="contained" sx={{ background: "#800080", "&:hover": { background: "#660066" } }}>
                                Send Message
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>

            {/* Snackbar for Status Messages */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000} // Hides after 3 seconds
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <SnackbarContent
                    message={statusMessage}
                    sx={{ backgroundColor: statusMessage.includes("successfully") ? "green" : "red", color: "white", borderRadius: "8px", padding: "12px 24px" }}
                />
            </Snackbar>
        </Container>
    );
}

export default Contact;
