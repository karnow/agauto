import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import WarAuto from '../assets/img/ba11.png';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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
const StyledSection = styled.div`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 930px;
`;
const StyledH2 = styled.h3`
  color: white;
`;
const StyledA = styled.a`
  color: yellowgreen;
`;

const Notes = () => {
  return (
    <GridTemplate pageType='note'>
      <StyledWrapper>
        <StyledSection>
          <StyledH2>FÅ SKROTPRÆMIE, SKROT DIN BIL HOS EN MILJØGODKENDT AUTO-OPHUG</StyledH2>
          <Paragraph>
            Ansøg om skrotningsgodtgørelse via dette{' '}
            <StyledA
              href='https://www.borger.dk/Handlingsside?selfserviceId=c84cf651-6e1b-4ab1-9508-17df4eb96413'
              target='_blank'
            >
              link
            </StyledA>
          </Paragraph>
        </StyledSection>
      </StyledWrapper>
      <StyledWrapper2></StyledWrapper2>
    </GridTemplate>
  );
};
export default Notes;

// class RealTimeClock extends React.Component {
//   state = {
//     hours: 0,
//     minutes: 0,
//     secounds: 0,
//   };
//   componentDidMount() {
//     this.getDate();
//   }

//   componentWillUnmount() {
//     this.stopTimer();
//     console.log('interval zatrzymany');
//   }

//   getDate = () => {
//     this.intervalId = window.setInterval(() => {
//       console.count('liczę zegar');
//       let hour = new Date().getHours();
//       let minute = new Date().getMinutes();
//       let secound = new Date().getSeconds();

//       this.setState({ hours: hour, minutes: minute, secounds: secound });
//     }, 1000);
//   };
//   stopTimer = () => {
//     window.clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <h2 className={'clock '}>
//         Aktualny Czas <span className='clock__minutes'>{this.state.hours}</span>:
//         <span className='clock__minutes'>{this.state.minutes}</span>.
//         <span className='clock__secunds'>{this.state.secounds}</span>
//       </h2>
//     );
//   }
// }
