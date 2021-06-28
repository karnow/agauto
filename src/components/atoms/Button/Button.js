import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: #251e20;
  color: #ffe900;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
  :active {
    background-color: white;
  }
  @media (max-width: 1211px) {
    width: 80px;
    font-size: 11px;
  }
`;
export default Button;
