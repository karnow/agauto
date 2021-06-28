import React, { useState } from 'react';
import styled from 'styled-components';
import { NotificationContainer } from 'react-notifications';
import UserPageTemplate from 'templates/UserPageTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar';
import Footer from 'components/molecules/Footer';

const StyledButtonIcon = styled(ButtonIcon)`
  width: 80px;
  height: 40px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #ffe900;
  border-radius: 30px;
  background-size: 35%;
  border: solid 1px #251e20;
  z-index: 11;
  font-size: 14px;
  font-weight: bold;
`;

const GridTemplate = ({ children, pageType }) => {
  const [state, setState] = useState(false);
  const handleNewItemBarToggle = () => {
    setState(!state);
  };

  return (
    <UserPageTemplate pageType={pageType}>
      <NotificationContainer />
      {children}
      <StyledButtonIcon onClick={() => handleNewItemBarToggle()} icon={''} pageType={pageType}>
        KONTAKT
      </StyledButtonIcon>
      <NewItemBar
        handleNewItemBarToggle={handleNewItemBarToggle}
        pageType={pageType}
        isVisible={state}
      />
      <Footer />
    </UserPageTemplate>
  );
};

export default GridTemplate;
