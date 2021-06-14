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
`;
const StyledSpan = styled.span`
  margin-left: 80px;
  padding: 30px 0 30px;
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
