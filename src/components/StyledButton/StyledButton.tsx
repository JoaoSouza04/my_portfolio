import { styled } from "@mui/material";

interface StyledButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "8px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            transition: "0.5s",
            cursor: "pointer",
        }
    }))
    
    return(
        <>
        <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    )
}

export default StyledButton;