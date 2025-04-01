import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Snackbar,
  SnackbarContent,
  IconButton,
  useTheme,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const emojiVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [1, 1.2, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Contact = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all required fields.");
      setOpenSnackbar(true);
      return;
    }

    emailjs
      .send(
        "service_26r0i0b",
        "template_bya2hpr",
        formData,
        "9GJ6eTHTpGXFRalR-"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setOpenSnackbar(true);
        },
        () => {
          setStatusMessage("Failed to send message. Try again.");
          setOpenSnackbar(true);
        }
      );
  };

  return (
    <Container maxWidth="xl" sx={{ my: 8 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Box
          sx={{
            maxWidth: "1100px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: isDarkMode ? "#ffcc00" : "#1976d2" }}
          >
            Contact Us{" "}
            <motion.span variants={emojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
            ✉️
            </motion.span>
          </Typography>

          <Grid container spacing={4}>
            {/* Left Contact Info */}
            <Grid item xs={12} md={5}>
  <Box
    sx={{
      border: `1px solid ${isDarkMode ? "#444" : "#ccc"}`,
      borderRadius: 3,
      p: 3,
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fafafa",
      boxShadow: isDarkMode
        ? "0 2px 10px rgba(0,0,0,0.4)"
        : "0 2px 12px rgba(0,0,0,0.05)",
      height: "100%",
    }}
  >
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Contact Information
    </Typography>
    <Typography variant="body2" sx={{ mb: 3, color: isDarkMode ? "#aaa" : "#666" }}>
      We'd love to hear from you! Whether you have a question, want to start a project, or just say hello—feel free to reach out.
    </Typography>

    <Box display="flex" alignItems="center" mb={2}>
      <Phone sx={{ mr: 1, color: isDarkMode ? "#ff4081" : "#1976d2" }} /> +91 7708819449
    </Box>
    <Box display="flex" alignItems="center">
      <Email sx={{ mr: 1, color: isDarkMode ? "#ff4081" : "#1976d2" }} /> 1605prabhu@gmail.com
    </Box>

    <Box mt={4}>
      <Typography variant="body2" mb={1}>Follow us</Typography>
      <Box display="flex" gap={2}>
        <IconButton sx={{ color: isDarkMode ? "#fff" : "#333", "&:hover": { color: "#3b5998" } }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ color: isDarkMode ? "#fff" : "#333", "&:hover": { color: "#E4405F" } }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ color: isDarkMode ? "#fff" : "#333", "&:hover": { color: "#0e76a8" } }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
</Grid>

            {/* Right Form */}
            <Grid item xs={12} md={7}>
            <Box
    sx={{
      border: `1px solid ${isDarkMode ? "#444" : "#ccc"}`,
      borderRadius: 3,
      p: 2,
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fafafa",
      boxShadow: isDarkMode
        ? "0 2px 10px rgba(0,0,0,0.4)"
        : "0 2px 12px rgba(0,0,0,0.05)",
      height: "100%",
    }}
  >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: "30px",
                    fontWeight: "bold",
                    background: isDarkMode
                      ? "linear-gradient(45deg, #ff4081, #ffcc00)"
                      : "linear-gradient(45deg, #1976d2, #21cbf3)",
                    color: "#fff",
                    "&:hover": {
                      opacity: 0.9,
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
              </Box>    
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      {/* Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          message={statusMessage}
          sx={{
            backgroundColor: statusMessage.includes("successfully") ? "green" : "#d32f2f",
            color: "#fff",
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
        />
      </Snackbar>
    </Container>
  );
};

export default Contact;
