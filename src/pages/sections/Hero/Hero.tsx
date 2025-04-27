import { Button, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/my_image.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
    }))
    
    const StyledImg = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%",
        padding: "10px",
    }))

    return (
        <>
            <StyledHero>
                <Grid container spacing={2} maxWidth={"lg"}>
                    <Grid size={{xs: 12, md: 4}}>
                        <StyledImg src={Avatar} alt="Hero" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                    <Grid size={{xs: 12, md: 8}} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography color="secondary" variant="h1" textAlign={"center"}>João Pedro</Typography>
                        <Typography color="primary.contrastText"variant="h2"textAlign={"center"}>I'm a Web Developer</Typography>
                        <Grid container display={"flex"} justifyContent="center" alignItems="center">
                            <Grid size={{xs: 12, md: 6}} display={"flex"} justifyContent="center">
                                <Button color="secondary" variant="contained" style={{margin: "2%"}}>
                                    <DownloadIcon/>
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{xs: 12, md: 6}} display={"flex"} justifyContent="center">
                                <Button color="secondary" variant="contained" style={{margin: "2%"}}>
                                    <EmailIcon />
                                    Contact Me
                                </Button> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledHero>
        </>
    )
}
  
export default Hero
  