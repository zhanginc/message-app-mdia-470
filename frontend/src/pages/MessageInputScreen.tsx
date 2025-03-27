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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8y_O8HgA-AvDg0Ql6-BBvrdPqt6Tekzs",
  authDomain: "media-470-project.firebaseapp.com",
  projectId: "media-470-project",
  storageBucket: "media-470-project.firebasestorage.app",
  messagingSenderId: "716941064622",
  appId: "1:716941064622:web:a7a6c8949c838e8204b03f",
  measurementId: "G-40BGXX3MV5"
};

// Initialize Firebase
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

    const handleSubmission = async () => {
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
      
            console.log("Message added successfully!");
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
