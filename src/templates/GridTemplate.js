import React, { useState } from 'react';
import styled from 'styled-components';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar';
import Footer from 'components/molecules/Footer';

const StyledGrid = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  } */
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

// const StyledHeading = styled(Heading)`
//   margin: 25px 0 0 0;
//   ::first-letter {
//     text-transform: uppercase;
//   }
// `;

// const StyledParagraph = styled(Paragraph)`
//   margin: 0;
//   font-weight: ${({ theme }) => theme.bold};
// `;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 150;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #ffe900;
  border-radius: 30px;
  background-size: 35%;
  border: solid 1px #251e20;
  z-index: 11;
  font-size: 12px;
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
