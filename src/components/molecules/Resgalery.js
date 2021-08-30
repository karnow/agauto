import React from 'react';
import { Link } from 'react-router-dom';
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
  @media (max-width: 806px) {
    display: none;
  }
`;
const StyledContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  @media (min-width: 807px) {
    display: none;
  }
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
    <>
      <StyledContainer className='container'>
        <Link to={`/reservedele/${1}`}>
          <StyledImg src={res1}></StyledImg>
        </Link>
        <Link to={`/reservedele/${2}`}>
          <StyledImg src={res2}></StyledImg>
        </Link>
        <Link to={`/reservedele/${3}`}>
          <StyledImg src={res3}></StyledImg>
        </Link>
        <Link to={`/reservedele/${4}`}>
          <StyledImg src={res4}></StyledImg>
        </Link>
        <Link to={`/reservedele/${5}`}>
          <StyledImg src={res5}></StyledImg>
        </Link>
        <Link to={`/reservedele/${6}`}>
          <StyledImg src={res6}></StyledImg>
        </Link>
      </StyledContainer>

      <StyledContainer2>
        <StyledImg src={res1}></StyledImg>
        <StyledImg src={res2}></StyledImg>
        <StyledImg src={res3}></StyledImg>
        <StyledImg src={res4}></StyledImg>
        <StyledImg src={res5}></StyledImg>
        <StyledImg src={res6}></StyledImg>
      </StyledContainer2>
    </>
  );
};

export default Resgalery;
