import { Grid, styled, Typography } from "@mui/material"
import { SiNodedotjs, SiReact, SiGit, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiFlutter, SiSpring } from 'react-icons/si';

const Skills = () => {

    const StyledSkills = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
    }))

    return (
            <StyledSkills id="skills">
                <Grid container spacing={2} maxWidth="lg" margin="auto">
                    <Grid size={{xs: 12, md: 12}}>
                        <Typography color="secondary" variant="h2" textAlign={"center"} pb={"10%"} gutterBottom>Skills</Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 12}} display="flex" justifyContent="space-evenly" alignItems="center" spacing={5} pb={3}>
                        <SiNodedotjs size={80} color="#339933"/>
                        <SiTypescript size={80} color="#3178C6"/>
                        <SiJavascript size={80} color="#F7DF1E"/>
                        <SiHtml5 size={80} color="#E34F26"/>
                        <SiCss3 size={80} color="#1572B6"/>
                        <SiReact size={80} color="#61DAFB"/>
                        <SiSpring size={80} color="#6DB33F"/>                        
                        <SiAngular size={80} color="#DD0031"/>
                        <SiFlutter size={80} color="#02569B"/>
                        <SiGit size={80} color="#F05032"/>
                    </Grid>
                </Grid>
            </StyledSkills>
    )
}

export default Skills