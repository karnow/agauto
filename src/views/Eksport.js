import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${WarAuto});
  background-repeat: no-repeat;
  background-size: cover;
  height: 920px;
  padding-top: 0px;
  margin-top: 120px;

  z-index: 1;
`;
const StyledWrapper2 = styled.div`
  position: relative;
  background-color: grey;
  background-size: cover;
  height: 900px;
  padding-top: 20px;
  z-index: 1;
`;

const Eksport = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>Eksport</StyledWrapper>
      <StyledWrapper2></StyledWrapper2>
    </GridTemplate>
  );
};
export default Eksport;
