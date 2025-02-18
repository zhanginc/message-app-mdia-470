import './App.css'
import { MessageInputScreen } from './pages/MessageInputScreen';
import { MessageSubmissionScreen } from './pages/MessageSubmissionScreen';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
     <Routes>
             <Route path="/" element={ <MessageInputScreen />} />
             <Route path="/submission" element={<MessageSubmissionScreen />} />
      </Routes>
      
  )
}

export default App
