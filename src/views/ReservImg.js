import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import spare from '../assets/img/spare1.jpg';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import res1 from '../assets/img/res1.jpg';
import res2 from '../assets/img/res2.jpg';
import res3 from '../assets/img/res3.jpg';
import res4 from '../assets/img/res4.jpg';
import res5 from '../assets/img/res5.jpg';
import res6 from '../assets/img/res6.jpg';

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${spare});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 0px;
  margin-top: 110px;
  text-align: center;
  z-index: 1;
`;
const StyledH2 = styled.h3`
  color: white;
  text-align: center;
`;
const StyledImg = styled.img`
  margin: 0 auto;
  width: 800px;
  height: 600px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
`;
const ReservImg = () => {
  let res = null;
  const { id } = useParams();
  const idNumber = Number(id);
  let imgs = [res1, res2, res3, res4, res5, res6];
  res = imgs[idNumber - 1];

  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <div
          style={{
            paddingTop: '50px',
            paddingLeft: '20%',
            paddingRight: '20%',
          }}
        ></div>
        <Link to={`/reservedele`}>
          <StyledH2>Forsiden</StyledH2>;
        </Link>
        <StyledImg src={res}></StyledImg>
        <a href='https://pl.freepik.com/zdjecia/samochod'>
          <p style={{ fontColor: 'black', fontSize: '3px' }}> walppaper from</p>{' '}
        </a>
        ;
      </StyledWrapper>
    </GridTemplate>
  );
};
export default ReservImg;
