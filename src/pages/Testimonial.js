import React from "react";
import { Box, Typography, Avatar, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Suresh",
        role: "Software Engineer",
        feedback: "I've had the pleasure of working with Prabhakaran HariBaskar. He has an innate ability to take complex requirements and turn them into efficient, scalable, and user-friendly applications.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
        name: "Ravinadh",
        role: "DevOps Engineer",
        feedback: "I had the privilege of collaborating with Prabhakaran HariBaskar, a highly skilled MERN Stack Developer. He excels at breaking down complex problems and delivering robust, scalable, and user-centered applications.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    },
    {
        name: "Haseena",
        role: "Frontend Engineer",
        feedback: "With 2 years of experience in MERN development, he quickly understands new concepts and implements them efficiently. His problem-solving ability, adaptability, and willingness to support others make him a great asset to any team.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
        name: "Mounika",
        role: "Frontend Engineer",
        feedback: "Beyond his technical abilities, He is a great mentor who constantly encourages growth and learning. His support and clear explanations have helped me navigate challenges with ease, and I am grateful for the opportunity to work alongside him.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140049.png",
    },
    {
        name: "Samyuktha",
        role: "Product Manager",
        feedback: "One of Prabhakaran's key strengths is his exceptional ability to focus on detail and analyze information thoroughly. This has been instrumental in all his tasks. His technical expertise also provides a solid foundation for his contributions, making him a reliable and knowledgeable member of our team.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    },  
    {
        name: "Thirupathi",
        role: "Testing Team Lead",
        feedback: "I highly recommend Prabhakaran, his focus on performance and clean code, combined with his passion for staying current, makes him an invaluable asset.  He's a true professional with exceptional work ethic and problem-solving skills.",
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140066.png",
    },
];

const emojiVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: [0, -5, 0], // Small bounce effect
        transition: { duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" },
    },
};

const Testimonial = () => {
    const theme = useTheme();

    return (
        <Box
            id="testimonials"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                py: { xs: 2, md: 4 },
                px: 2,
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    mx: "auto",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        color: theme.palette.mode === "dark" ? "#ffcc00" : "#1976d2",
                        paddingTop: { xs: "60px", md: "60px" },
                    }}
                >
                    Testimonials <motion.span variants={emojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
        🌟
    </motion.span>
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        color: theme.palette.mode === "dark" ? "#ffcc00" : "#1976d2",
                        mb: 3,
                    }}
                >
                    Experience Shared, Knowledge Gained – Hear from Our Community
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 2,
                        mt: 2,
                        width: "100%",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Paper
                                elevation={5}
                                sx={{
                                    padding: 2,
                                    borderRadius: 5,
                                    background: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
                                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                                    display: "flex",
                                    flexDirection: "column",
                                    textAlign: "left",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    minHeight: "180px",
                                    maxHeight: "250px",
                                    overflow: "hidden",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <Avatar
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        sx={{ width: 45, height: 45, mr: 1 }}
                                    />
                                    <Box>
                                        <Typography variant="body1" fontWeight="bold">
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "gray" }}>
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        maxWidth: "100%",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    "{testimonial.feedback}"
                                </Typography>
                            </Paper>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonial;