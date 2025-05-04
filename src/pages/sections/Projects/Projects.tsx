import { Grid, styled, Typography } from "@mui/material"

const Projects = () => {

    const StyledProjects = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
    }))

    const StyledCard = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
    }))

    return (
            <StyledProjects>
                <Grid container maxWidth={"lg"} spacing={2} margin={"5%"}>
                    <Grid size={{xs: 12, md: 12}} display="flex" justifyContent="center">
                        <Typography color="secondary" variant="h2" textAlign={"center"} mt={5} pb={3} gutterBottom>Top Projects</Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <StyledCard>
                            <Typography color="secondary" variant="h4" textAlign={"center"} mt={5} pb={3} gutterBottom>Project 1</Typography>
                            <Typography color="text.primary" variant="body1" textAlign={"center"} mt={5} pb={3} gutterBottom>This is a description of project 1.</Typography>
                        </StyledCard>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <StyledCard>
                            <Typography color="secondary" variant="h4" textAlign={"center"} mt={5} pb={3} gutterBottom>Project 2</Typography>
                            <Typography color="text.primary" variant="body1" textAlign={"center"} mt={5} pb={3} gutterBottom>This is a description of project 2.</Typography>
                        </StyledCard>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <StyledCard>
                            <Typography color="secondary" variant="h4" textAlign={"center"} mt={5} pb={3} gutterBottom>Project 3</Typography>
                            <Typography color="text.primary" variant="body1" textAlign={"center"} mt={5} pb={3} gutterBottom>This is a description of project 3.</Typography>
                        </StyledCard>
                    </Grid>
                </Grid>
            </StyledProjects>
    )
}

export default Projects