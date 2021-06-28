import React from 'react';
import res1 from '../../assets/img/res1.jpg';
import res2 from '../../assets/img/res2.jpg';
import res3 from '../../assets/img/res3.jpg';
import res4 from '../../assets/img/res4.jpg';
import res5 from '../../assets/img/res5.jpg';
import res6 from '../../assets/img/res6.jpg';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;

  justify-content: space-around;
`;
const StyledImg = styled.img`
  width: 250px;
  height: 180px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
`;
const Resgalery = () => {
  return (
    <StyledContainer className='container'>
      <a href={res1}>
        <StyledImg src={res1}></StyledImg>
      </a>
      <a href={res2}>
        <StyledImg src={res2}></StyledImg>
      </a>
      <a href={res3}>
        <StyledImg src={res3}></StyledImg>
      </a>
      <a href={res4}>
        <StyledImg src={res4}></StyledImg>
      </a>
      <a href={res5}>
        <StyledImg src={res5}></StyledImg>
      </a>
      <a href={res6}>
        <StyledImg src={res6}></StyledImg>
      </a>
    </StyledContainer>
  );
};

export default Resgalery;
