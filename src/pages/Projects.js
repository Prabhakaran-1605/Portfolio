import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const projects = [
    { title: "Heeddata", description: "Cloud cost optimization platform", tech: "React, Node.js, MongoDB" },
    { title: "CloudMonk", description: "Multi-cloud monitoring tool", tech: "React, Express, SQL" }
];

function Projects() {
    return (
        <Container sx={{ minHeight: "100vh", paddingTop: 8 }}>
            <Typography variant="h4">Projects</Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{project.title}</Typography>
                                <Typography variant="body2">{project.description}</Typography>
                                <Typography variant="caption">Tech: {project.tech}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;
