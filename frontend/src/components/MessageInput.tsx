import TextField from '@mui/material/TextField';
import styled from 'styled-components';

interface MessageInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ErrorText = styled.p`
    font-family: GaeguRegular;
    font-size: 24px;
    color: #5A0000;
`

export const MessageInput: React.FC<MessageInputProps> = ({value, onChange}) => {

  return <TextField
    required
    multiline
    rows={8}
    value={value}
    onChange={onChange}
    type="text"
    placeholder="Plant a message here - it will take root automatically and flourish in the garden."
    color="primary"
    slotProps={{ 
      htmlInput: { maxLength: 280 },
      formHelperText: {
        sx: {
          fontFamily: "GaeguRegular",
          fontSize: "16px", 
          textAlign: "right"
        }
      },
      input:{
        sx:{
          fontFamily: "GaeguRegular",
          fontSize: "16px", 
        }
      }
   }}
    helperText={`${value.length === 280 ? <ErrorText>Character Limit Reached</ErrorText> : `${value.length}/280 characters`}`}
    sx={{
      backgroundColor: "white",
      borderRadius: "8px",
      border: "none",
      "& textarea::placeholder": {
          fontFamily: "GaeguRegular",
          fontSize: "18px", 
        },
      "& .MuiOutlinedInput-root": {
      "& fieldset": { 
        border: "none" 
      }
      
      }

    }}
    />;
}