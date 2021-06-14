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
  /* background-image: url(${WarAuto});
  background-repeat: no-repeat; */
  background-size: cover;
  height: 920px;
  /* padding-top: 0px;
  margin-top: 120px; */

  z-index: 1;
`;

const Notes = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper></StyledWrapper>
      <StyledWrapper2></StyledWrapper2>
    </GridTemplate>
  );
};
export default Notes;
