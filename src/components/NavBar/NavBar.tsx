import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.primary.main,
        padding: "0 20px",
        height: "60px",
        '& .MuiMenuItem-root': {
            alignItems: "center",
            color: theme.palette.primary.contrastText,
            fontSize: "1.2rem",
            fontWeight: "bold",
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                transition: "0.5s",
                cursor: "pointer",
            }
        },
    }))

    return(
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About Me</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar