import styled from 'styled-components';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledContainer } from '../components/PageStyles';

const StyledContent = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
`
const Header = styled.h1`
    font-family: GaeguBold;
    font-size: 40px;
`
const Subheader = styled.p`
    font-size: 24px;
`
const MessageResubmissionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const MessageSubmissionScreen = () => {
    const navigate = useNavigate();

    return(
        <StyledContainer>
            <StyledContent>
                <Header>Your message is being planted.</Header>
                <Subheader>(Check back later to see if it blooms - rose seeds only have a 30% success rate of germinating)</Subheader>
                <Box component="img" src="/rose.gif" 
                            alt="Rose GIF" 
                            sx={{height: "300px", width: "200px"}}
                            />
    
            </StyledContent>
            <MessageResubmissionContainer>
                <Subheader>(Write another message)</Subheader>
                <Box component="img" src="/right-arrow.svg" 
                            alt="Flower" 
                            sx={{height: "40px", width: "40px"}}
                            onClick={() => {navigate("/")}} />

            </MessageResubmissionContainer>
           
        </StyledContainer>

    );
}