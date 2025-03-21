import { 
    Container, Typography, Table, TableBody, TableCell, TableContainer, 
    TableRow, Paper, useTheme, Avatar, Box, Grid 
} from "@mui/material";
import { motion } from "framer-motion";

// Import Local Logos
import psgLogo from "../assets/PSG_College_of_Technology_logo.jpeg";
import vedhhaLogo from "../assets/vvks_logo.jpeg";
import stPaulsLogo from "../assets/pauls_logo.jpeg";
import heeddataLogo from "../assets/heeddata_logo.jpeg";
import infolobLogo from "../assets/infolob_logo.jpeg";

const educationEmojiVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        y: [0, -5, 0], // Small bounce effect
        scale: [1, 1.2, 1], // Glow effect
        transition: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeOut" },
    },
};

// Animation for 💼 (Rotates + Scale Effect)
const experienceEmojiVariants = {
    hidden: { opacity: 0, rotate: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: [0, 10, -10, 0], // Subtle rotation animation
        scale: [1, 1.1, 1], // Subtle scaling
        transition: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    },
};

function Experience() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Container sx={{ minHeight: "100vh", paddingTop: 8 }}>
            {/* Section Title */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: isDarkMode ? "#ffcc00" : "#1976d2",
                    mb: 4,
                    marginTop: "20px",
                    marginBottom: "50px"
                }}
            >
                <motion.span variants={educationEmojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
                    🎓
                </motion.span> Education & <motion.span variants={experienceEmojiVariants} initial="hidden" animate="visible" style={{ display: "inline-block" }}>
                    💼
                </motion.span> Experience
            </Typography>

            {/* Two Column Layout */}
            <Grid container spacing={4} justifyContent="center">
                {/* Education Table - Left Side */}
                <Grid item xs={12} md={6}>
                    <TableContainer 
                        component={Paper} 
                        sx={{
                            borderRadius: 3,
                            boxShadow: "5px 15px 15px rgba(0,0,0,0.2)",
                            height: "100%"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                padding: "16px",
                                background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
                                color: isDarkMode ? "#fff" : "#000"
                            }}
                        >
                            🎓 Education
                        </Typography>
                        <Table>
                            <TableBody>
                                {/* Education Row 1 */}
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar src={psgLogo} alt="PSG College Logo" sx={{ width: 80, height: 80 }} />
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    Bachelor of Engineering in Metallurgical Engineering
                                                </Typography>
                                                <Typography variant="body2">PSG College of Technology</Typography>
                                                <Typography variant="body2" sx={{ fontStyle: "italic" }}>2017</Typography>
                                                <Typography variant="body2"><strong>CGPA:</strong> 7.23 / 10.0</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                {/* Education Row 2 */}
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar src={vedhhaLogo} alt="Vedhha Vikass Logo" sx={{ width: 80, height: 80 }} />
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    Higher Secondary (XII)
                                                </Typography>
                                                <Typography variant="body2">Vedhha Vikass Higher Secondary School, Salem</Typography>
                                                <Typography variant="body2">2013</Typography>
                                                <Typography variant="body2"><strong>Percentage:</strong> 94.75%</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                {/* Education Row 3 */}
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar src={stPaulsLogo} alt="ST Paul's Logo" sx={{ width: 80, height: 80 }} />
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    Secondary (X)
                                                </Typography>
                                                <Typography variant="body2">ST. Paul’s Higher Secondary School, Salem</Typography>
                                                <Typography variant="body2">2011</Typography>
                                                <Typography variant="body2"><strong>Percentage:</strong> 95.4%</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* Experience Table - Right Side */}
                    {/* Experience Table - Right Side */}
                    <Grid item xs={12} md={6}>
                    <TableContainer 
                        component={Paper} 
                        sx={{
                            borderRadius: 3,
                            boxShadow: "5px 15px 15px rgba(0,0,0,0.2)",
                            height: "100%"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                padding: "16px",
                                background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
                                color: isDarkMode ? "#fff" : "#000"
                            }}
                        >
                            💼 Experience
                        </Typography>
                        <Table>
                            <TableBody>
                                {/* Experience Row 1 */}
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar 
                                                src={heeddataLogo}
                                                alt="Heeddata Logo"
                                                sx={{ width: 80, height: 80 }}
                                            />
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    Software Engineer (Jul 2023 - Present)
                                                </Typography>
                                                <Typography variant="body2">Heeddata India Pvt. Ltd., Hyderabad</Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    Heeddata is a multi-cloud cost optimization platform designed to analyze and optimize cloud spending. It provides cost-saving suggestions for AWS, GCP, OCI, and Azure.
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    <strong>Technologies Used:</strong> React.js, TypeScript, Material UI, Redux Toolkit, Node.js, Express.js, MongoDB, SQL, Azure, React Testing
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                {/* Experience Row 2 */}
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Avatar 
                                                src={infolobLogo}
                                                alt="Infolob Logo"
                                                sx={{ width: 80, height: 80 }}
                                            />
                                            <Box>
                                                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                    Software Engineer (Jan 2023 - Jun 2023)
                                                </Typography>
                                                <Typography variant="body2">Infolob Solution Pvt. Ltd., Hyderabad</Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    CloudMonk is a multi-cloud cost optimization platform that provides tailored recommendations for major cloud providers like AWS, GCP, OCI, and Azure.
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 1 }}>
                                                    <strong>Technologies Used:</strong> React.js, Material UI, Redux Toolkit, Node.js, Express.js, MongoDB, SQL, Azure, React Testing
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Experience;
