import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import auto from 'assets/img/Auto.jpg';
import home from 'assets/icons/home.svg';
import Button from 'components/atoms/Button/Button';
import Kontakt from 'components/molecules/Kontakt';
import { useNavigate } from 'react-router';

const StyledWrapper = styled.nav`
  position: fixed;
  display: inline-flex;
  left: 0;
  top: 0;
  padding: 0 0;
  width: 100vw;
  height: 120px;
  background-color: #ffe900;
  z-index: 10;
`;

const StyledLogoButton = styled(Button)`
  width: 120px;
  height: 30px;
  color: #ffe900;
  :active {
    background-color: white;
  }
  /* background-image: url(${home});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
  background-clip: border-box; */
`;

const StyledDivLogo = styled.div`
  background-image: url(${auto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 360px 120px;
  background-clip: border-box;

  padding: 10px 10px;
  width: 350px;
  height: 120px;
  margin-right: 0px;
  margin-left: 0px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const UlStyled = styled.ul`
  padding: 20px 40px 20px 40px;
  border-top: solid 2px;
  border-left: solid 2px;
  border-right: solid 2px;
  border-bottom: solid 2px;
  margin-left: 100px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.7);
`;
const LiStyled = styled.li`
  margin-right: 5px;
`;

const Sidebar = ({ pageType }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper activeColor={pageType}>
      <StyledDivLogo></StyledDivLogo>
      <StyledDiv>
        <UlStyled>
          <LiStyled>
            <StyledLogoButton onClick={() => navigate('/')}> HOME </StyledLogoButton>
          </LiStyled>
          <LiStyled>
            <Button onClick={() => {}} activeColor={pageType}>
              RESERVEDELE
            </Button>
          </LiStyled>
          <LiStyled>
            <Button onClick={() => {}} activeColor={pageType}>
              BILSALG
            </Button>
          </LiStyled>
          <LiStyled>
            <Button onClick={() => {}} activeColor={pageType}>
              BILKØB
            </Button>
          </LiStyled>
          <LiStyled>
            <Button onClick={() => navigate('/omos')}>OM OS</Button>
          </LiStyled>
        </UlStyled>

        <Kontakt />
      </StyledDiv>
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
