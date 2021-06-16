import styled from 'styled-components';
const StyledDivFooter = styled.div`
  background-color: darkgray;
  align-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Heading = styled.h4`
  text-align: center;
  text-shadow: 2px 2px #3b66b0;
  margin-bottom: 1px;
  color: #ffe900;
  margin-top: 0px;
`;
const StyledP = styled.p`
  text-align: center;
  color: black;
  font-size: 12px;
  margin-bottom: 0px;
`;
const StyledHr = styled.hr`
  background-color: #ffe900;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 3px;
  border-radius: 1px;
`;
function Footer() {
  return (
    <StyledDivFooter>
      <Heading>AG-AUTO ApS</Heading>
      <StyledHr />
      <StyledP>AG-AUTO ApS Copyright @ All Rights Reserved</StyledP>
    </StyledDivFooter>
  );
}

export default Footer;
