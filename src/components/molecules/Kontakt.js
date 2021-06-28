import styled, { css } from 'styled-components';
import telefon from '../../assets/icons/phone.svg';
import mobil from '../../assets/icons/mobil.svg';
import email from '../../assets/icons/email.svg';
import fax from '../../assets/icons/fax.svg';
const StylesParagraph = styled.p`
  font-size: 14px;
  margin: 0 0;
  font-style: oblique;
  font-weight: bold;
`;

const StyledImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;
export { StyledImage };

const StyledSpan = styled.span`
  margin-left: 40px;
  padding: 18px 0 18px;

  @media (max-width: 1395px) {
    display: none;
  }
`;
function Kontakt() {
  return (
    <StyledSpan>
      <StylesParagraph>
        <StyledImage src={telefon} />
        +45 40623660
      </StylesParagraph>
      <StylesParagraph>
        <StyledImage src={mobil} />
        +45 21930777
      </StylesParagraph>
      <StylesParagraph>
        <StyledImage src={fax} />
        +45 36308485
      </StylesParagraph>
      <StylesParagraph>
        <StyledImage src={email} />
        info@ag-auto.dk
      </StylesParagraph>
    </StyledSpan>
  );
}

export default Kontakt;
