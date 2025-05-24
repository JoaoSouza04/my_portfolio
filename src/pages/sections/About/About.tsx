import { Grid, styled, Typography } from "@mui/material"
import Art from "../../../assets/images/programming.svg"

function About() {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "5%",
    }))

    const StyledImg = styled("img")(() => ({
        width: "70%",
        maxWidth: "300px",
    }))

    const StyledText = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
        padding: "0 20px",
    }))

    return (
        <StyledAbout id="about">
            <Grid container spacing={2} maxWidth="lg" margin="auto">
                <Grid size={{xs: 12}}>
                    <Typography color="secondary" variant="h2" align="center" pb={5} gutterBottom>
                        About Me
                    </Typography>
                </Grid>
                <Grid container spacing={5} maxWidth="lg" margin="auto">
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center">
                        <StyledImg src={Art}/>
                    </Grid>
                    <Grid size={{xs: 12, md: 8}} display="flex" justifyContent="center" alignItems="center">
                        <StyledText>
                            I'm João Pedro de Souza, an IT professional with entry-level experience in web development, focused on backend.<br/><br/>
                            I have a degree in Systems Analysis and Development and am currently seeking an opportunity to contribute in this field, using my knowledge, and learning from different people.<br/><br/>
                            Across my college journey, I’ve developed web and mobile applications, getting better on both technical and interpersonal skills that prepared me for team environments and real-world software development challenges.<br/><br/>
                            I'm constantly seeking knowledge and professional growth, aiming to specialize in this field and build solutions that add real value to the job market.
                        </StyledText>
                    </Grid>
                </Grid>
            </Grid>
        </StyledAbout>
    )
}

export default About
