import { Grid, styled, Typography } from "@mui/material"
import WalkWithWoofs from "../../../assets/images/WalkWithWoofs.png"
import MyWeather from "../../../assets/images/MyWeather.png"
import IceCreamDelicious from "../../../assets/images/IceCreamDelicious.png"
import MyCard from "../../../components/Card/Card"
const Projects = () => {

    const StyledProjects = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
    }))

    return (
            <StyledProjects id="projects">
                <Grid container maxWidth={"lg"} spacing={2} margin={"5%"}>
                    <Grid size={{xs: 12, md: 12}} display="flex" justifyContent="center">
                        <Typography color="secondary" variant="h2" textAlign={"center"} mt={5} pb={3} gutterBottom>Top Projects</Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <MyCard 
                            image={WalkWithWoofs} 
                            title="WalkWithWoofs"
                            description="A dog-walking application that helps users find nearby dog walkers and manage walking routines in real time, with chat and review systems. It uses the Google Maps API for location tracking and Firebase for authentication and data storage. The app is built with Flutter and Firebase, offering a smooth and responsive experience across both Android and iOS devices."
                            buttonText="See Project"
                            onClick={() => window.open("https://www.figma.com/design/0REVXfTwy8qKARnZTmFVCJ/Prot%C3%B3tipo---Trabalho-de-Gradua%C3%A7%C3%A3o?node-id=0-1&t=W2no5daOFVj0xXNi-1", "_blank")}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <MyCard 
                            image={MyWeather} 
                            title="MyWeather"
                            description="A weather application that provides real-time weather information and forecasts for any location. It uses the OpenWeatherMap API to fetch data and displays it in a user-friendly interface. The app is built with React and styled with Material-UI, ensuring a responsive design for both desktop and mobile users."
                            buttonText="See Code"
                            onClick={() => window.open("https://github.com/JoaoSouza04/MyWeather", "_blank")}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center" alignItems="center" spacing={5}>
                        <MyCard 
                            image={IceCreamDelicious} 
                            title="Ice Cream Delicious"
                            description="a full stack web application to serve as a virtual showcase for a real milkshake shop. The platform allows users to browse available products, view individual product details, log in, manage their cart, reset their passwords, and access the shop's physical location through a purchase. The application is built with Spring Boot, Angular, and PostgreSQL."
                            buttonText="See Code"
                            onClick={() => window.open("https://github.com/JoaoSouza04/P2_PWEB", "_blank")}
                        />
                    </Grid>
                </Grid>
            </StyledProjects>
    )
}

export default Projects