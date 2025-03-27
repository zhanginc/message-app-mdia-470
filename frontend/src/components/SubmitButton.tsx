import { Button, Typography }  from '@mui/material';
import styled from 'styled-components';

interface SubmitButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(Button)`
  width: 100%;
  fontFamily: GaeguRegular;
  backgroundColour: #5A0000;
`
export const SubmitButton = ({onClick}: SubmitButtonProps) => {
  return <StyledButton sx={{backgroundColor: "#5A0000", borderRadius: "8px", height: "50px"}}variant="contained" onClick={onClick}>
    <Typography
        sx={{
          fontFamily: "GaeguRegular",
          fontSize: "18px",
          color: "white", 
          textTransform: "none"
        }}
      >
  Plant your message
</Typography>
</StyledButton>;
}
