import Button from '@mui/material/Button';
import styled from 'styled-components';

interface SubmitButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(Button)`
  width: 50%;
`

export const SubmitButton = ({onClick}: SubmitButtonProps) => {
  return <StyledButton variant="contained" onClick={onClick}>Submit</StyledButton>;
}
