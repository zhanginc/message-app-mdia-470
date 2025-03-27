import { Footer } from "../components/Footer";
import styled from "styled-components";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const StyledContainer = styled.div`
      display: flex;
      flex-direction: column;
      height: 100dvh;
      width: 100vw;
      box-sizing: border-box;
      padding: 30px;
      justify-content: space-between;
`
const StyledContent = styled.div`
      display: flex;
      flex-direction: column;
      gap: 20px;
`
const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const SecondaryHeader = styled.h1`
    line-height: 0.1;
    font-family: GaeguBold;
    font-size: 48px;
    padding: 20px;
`
const StyledDescripton = styled.div`
    display: flex;
    text-align: center;
    font-family: GaeguRegular;
    font-size: 24px;
    color: #5A0000;

`

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
                <StyledDescripton>
                    About text will go here 
                    hello hello hello idk what to write 
                    rn something about bringing the blooms 
                    to the rose garden year round 
                    and making community
                </StyledDescripton>

            </StyledContent>
            

            <Footer />
        </StyledContainer>
        

        
    )
}