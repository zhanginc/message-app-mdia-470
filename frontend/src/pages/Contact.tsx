import { Footer } from "../components/Footer";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { StyledContainer,
         StyledContent,
         StyledHeaderContainer,
         SecondaryHeader,
         StyledDescription } from "../components/PageStyles";


export const Contact = () => {
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
                <SecondaryHeader>Contact</SecondaryHeader>
                </StyledHeaderContainer>
                <StyledDescription>
                    We are a group of students from the MDIA 470 class.
                </StyledDescription>

            </StyledContent>
            <Footer />
        </StyledContainer>  
    )
}