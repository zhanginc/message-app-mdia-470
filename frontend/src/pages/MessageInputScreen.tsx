import { SubmitButton } from '../components/SubmitButton';
import { MessageInput } from '../components/MessageInput';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const StyledContainer = styled.div`
      display: flex;
      flex-direction: column;
      height: 100dvh;
      width: 100vw;
      justify-content: center;
      box-sizing: border-box;
      padding: 30px;
`

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Header = styled.h1`
    line-height: 0;
`

const Subheader = styled.p`
    line-height: 1.5;
`

export const MessageInputScreen = () => {
    const navigate = useNavigate();

    const handleSubmission = () => {
        navigate('/submission');
    }

    return(
        <StyledContainer>
            <Header>Plant a Rose</Header>
            <Subheader>Virtual blooms, created with your messages. </Subheader>
            <StyledInputContainer>
                <MessageInput />
                <SubmitButton onClick={handleSubmission}/>
            </StyledInputContainer>
            
        </StyledContainer>
    );
}