import { Button, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/my_image.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../components/StyledButton/StyledButton";

function Hero() {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
    }))
    
    const StyledImg = styled("img")(({theme})=> ({
        width: "70%",
        borderRadius: "50%",
        boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
    }))

    return (
        <>
            <StyledHero>
                <Grid container spacing={2} maxWidth={"lg"}>
                    <Grid size={{xs: 12, md: 5}} display="flex" justifyContent="center" alignItems="center">
                        <StyledImg src={Avatar} alt="Hero"/>
                    </Grid>
                    <Grid size={{xs: 12, md: 7}} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography color="secondary" variant="h1" textAlign={"center"} pb={2}>João Pedro</Typography>
                        <Typography color="primary.contrastText"variant="h2"textAlign={"center"}>I'm a Web Developer</Typography>
                        <Grid container display={"flex"} justifyContent="center" pt={3} spacing={3}>
                            <Grid size={{xs: 12, md: 6}} display={"flex"} justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{xs: 12, md: 6}} display={"flex"} justifyContent="center">
                                <StyledButton>
                                    <EmailIcon />
                                    <Typography>
                                        Contact Me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledHero>
        </>
    )
}
  
export default Hero
  