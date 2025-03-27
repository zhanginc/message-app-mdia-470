import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled(FlexColumn)`
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
`;

const StyledContent = styled(FlexColumn)`
  gap: 20px;
`;

const StyledHeaderContainer = styled(FlexColumn)`
  align-items: center;
  margin-top: 20px;
`;

const SecondaryHeader = styled.h1`
  line-height: 0.1;
  font-family: GaeguBold;
  font-size: 48px;
  padding: 20px;
`;

const StyledDescription = styled(FlexColumn)`
  text-align: center;
  font-family: GaeguRegular;
  font-size: 24px;
  color: #5A0000;
`;

export {
  StyledContainer,
  StyledContent,
  StyledHeaderContainer,
  SecondaryHeader,
  StyledDescription,
};