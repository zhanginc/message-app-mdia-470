import leoProfanity from "leo-profanity";
import { SubmitButton } from '../components/SubmitButton';
import { MessageInput } from '../components/MessageInput';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StyledContainer } from '../components/PageStyles';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { profanityFilter } from "../profanityFilter";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const StyledContent = styled.div`
      display: flex;
      flex-direction: column;
      gap: 30px;
`
const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const StyledText = styled.p`
    font-size: 18px;
`
const Header = styled.h1`
    font-size: 24px;
`
const SecondaryHeader = styled.h1`
    font-family: GaeguBold;
    font-size: 48px;
`

export const MessageInputScreen = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleSubmission = async () => { // cleans inputs
        if (!message.trim()) {
            alert("Please enter a message before submitting.");
            return;
          }
      
          try {
            if (leoProfanity.check(message) || profanityFilter.includes(message.toLowerCase())) {
                alert("Word(s) not allowed.");
                return;
            }
            const cleanText = leoProfanity.clean(message); 
            setMessage(cleanText);

            await push(ref(db, "notes/"), {
              text: message,
            });
      
            setMessage(""); 
            navigate("/submission"); 
          } catch (error) {
            console.error("Error adding message:", error);
        }
        navigate("/submission"); 
    }

    return(
        <StyledContainer>  
            <StyledContent>
                <StyledHeaderContainer>
                    <Box component="img" src="/envelope.svg" alt="Logo" sx={{height: "60px", width: "60px"}} />
                    <Header>NOTES FOR THE</Header>
                    <SecondaryHeader>ROSE GARDEN</SecondaryHeader>
                </StyledHeaderContainer>
                
                <StyledInputContainer>
                    <StyledText>A virtual garden where messages bloom</StyledText>
                    <MessageInput value={message} onChange={(e) => setMessage(e.target.value)} />
                    <SubmitButton onClick={handleSubmission}/>
                </StyledInputContainer>
            </StyledContent>
          <Footer />   
        </StyledContainer>
    );
}
