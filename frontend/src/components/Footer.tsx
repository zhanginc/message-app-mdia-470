import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const StyledContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const StyledTextContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`
const Text = styled.p`
    font-family: GaeguRegular;
    color: #5A0000;
    font-size: 24px;
`

export const Footer = () => {
    const navigate = useNavigate();

    return(
        <StyledContainer>
            <Box component="img" src="/flower.svg" alt="Logo" sx={{height: "60px", width: "60px", marginRight: "15px"}}/>
            <StyledTextContainer>
                <Text onClick={() => {navigate("/about")}}>
                    About 
                </Text>
                <Text onClick={() => {navigate("/contact")}}>
                    Contact
                </Text>
            </StyledTextContainer>

        </StyledContainer>
    )
}