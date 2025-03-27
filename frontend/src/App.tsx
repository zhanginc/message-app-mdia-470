import './App.css'
import { MessageInputScreen } from './pages/MessageInputScreen';
import { MessageSubmissionScreen } from './pages/MessageSubmissionScreen';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {

  return (
      <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/paper-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6, 
          zIndex: -1, 
        },
      }}
        >
            <Routes>
                  <Route path="/" element={ <MessageInputScreen />} />
                  <Route path="/submission" element={<MessageSubmissionScreen />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
            
      </Box>
    )
}

export default App
