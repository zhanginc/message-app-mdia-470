import styled from 'styled-components';

const StyledContainer = styled.div`
      display: flex;
      flex-direction: column;
      height: 100dvh;
      width: 100vw;
      justify-content: center;
      box-sizing: border-box;
      padding: 30px;
`
const Header = styled.h3`
    line-height: 1.5;
`
const Subheader = styled.p`
    line-height: 1.5;
`

export const MessageSubmissionScreen = () => {
    return(
        <StyledContainer>
            <Header>Your message is being planted.</Header>
            <Subheader>(go to the rose garden to see if it blooms - rose seeds only have a 30% success rate of germinating)</Subheader>
        </StyledContainer>

    );
}