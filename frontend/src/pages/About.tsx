import { Footer } from "../components/Footer";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { StyledContainer,
        StyledContent,
        StyledHeaderContainer,
        SecondaryHeader,
        StyledDescription } from "../components/PageStyles"

export const About = () => {
    const navigate = useNavigate();
    
    return(
        <StyledContainer>
            <StyledContent>
            <Box component="img" src="/arrow.svg" 
                            alt="Logo" 
                            sx={{height: "40px", width: "40px"}}
                            onClick={() => {navigate("/")}} />
            
                <StyledHeaderContainer>
                <Box component="img" src="/mountain.svg" alt="Logo" sx={{height: "100px", width: "100px"}} />
                <SecondaryHeader>About Us</SecondaryHeader>
                </StyledHeaderContainer>
                <StyledDescription>
                    About text will go here 
                    hello hello hello idk what to write 
                    rn something about bringing the blooms 
                    to the rose garden year round 
                    and making community
                </StyledDescription>

            </StyledContent>
            

            <Footer />
        </StyledContainer>
        

        
    )
}