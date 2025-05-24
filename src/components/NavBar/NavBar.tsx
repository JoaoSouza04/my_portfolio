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
                    <MenuItem>
                        <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
                            About Me
                        </a>
                    </MenuItem>
                    <MenuItem href="#skills">
                        <a href="#skills" style={{ textDecoration: "none", color: "inherit" }}>
                            Skills
                        </a>
                    </MenuItem>
                    <MenuItem href="#projects">
                        <a href="#projects" style={{ textDecoration: "none", color: "inherit" }}>
                            Projects
                        </a>
                    </MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar