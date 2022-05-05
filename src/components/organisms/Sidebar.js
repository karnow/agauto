import React, {
  useState,
} from "react";
import styled from "styled-components";
import auto from "assets/img/Auto.jpg";
import Button from "components/atoms/Button/Button";
import Kontakt from "components/molecules/Kontakt";
import menu from "../../assets/img/menu1.svg";
import { useNavigate } from "react-router";

const StyledWrapper = styled.nav`
  position: fixed;
  display: inline-flex;
  left: 0;
  top: 0;
  padding: 0 0;
  width: 100vw;
  height: 110px;
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
  @media (max-width: 1211px) {
    width: 80px;
    font-size: 10px;
  }
`;

const StyledDivLogo = styled.div`
  background-image: url(${auto});
  background-color: #ffe900;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 350px 110px;
  background-clip: border-box;
  padding: 10px 10px;
  width: 340px;
  height: 110px;
  margin-right: 0px;
  margin-left: 0px;
  @media (max-width: 1211px) {
    background-size: 205px
      80px;
    width: 200px;
    height: 80px;
  }
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
  margin-left: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  box-shadow: 0 10px 20px -10px
    rgba(0, 0, 0, 0.7);

  @media (max-width: 1211px) {
    margin-left: 5px;
    border: none;
    box-shadow: none;
    margin-top: 5px;
    padding: 20px 10px;
  }
  @media (max-width: 741px) {
    flex-direction: column;
    margin-top: 350px;
    background-color: #ffe900;
    border-radius: 3px;
    display: ${({ vis }) =>
      vis ? "" : "none"};
  }
`;
const LiStyled = styled.li`
  margin-right: 5px;
`;
const SwitcherButton = styled.button`
  background-image: url(${menu});
  background-color: #ffe900;
  width: 30px;
  height: 30px;
  border: none;
  margin-left: 20px;
  :active {
    background-color: white;
  }
  @media (min-width: 741px) {
    display: none;
    display: ${({ hidden }) =>
      hidden ? "none" : ""};
  }
`;

const Sidebar = ({
  pageType,
}) => {
  const [state, setState] =
    useState(false);
  const handleMenuToggle =
    () => {
      setState(!state);
    };
  const navigate =
    useNavigate();

  return (
    <StyledWrapper
      activeColor={pageType}
    >
      <StyledDivLogo></StyledDivLogo>
      <StyledDiv>
        <UlStyled vis={state}>
          <LiStyled>
            <StyledLogoButton
              onClick={() => {
                navigate("/");
                handleMenuToggle();
              }}
            >
              HOME
            </StyledLogoButton>
          </LiStyled>
          <LiStyled>
            <Button
              onClick={() => {
                navigate(
                  "/reservedele"
                );
                handleMenuToggle();
              }}
              activeColor={
                pageType
              }
            >
              RESERVEDELE
            </Button>
          </LiStyled>
          <LiStyled>
            <Button
              onClick={() => {
                navigate(
                  "/bilsalg"
                );
                handleMenuToggle();
              }}
              activeColor={
                pageType
              }
            >
              BILSALG
            </Button>
          </LiStyled>
          <LiStyled>
            <Button
              onClick={() => {
                navigate(
                  "/bilkob"
                );
                handleMenuToggle();
              }}
              activeColor={
                pageType
              }
            >
              BILKØB
            </Button>
          </LiStyled>
          <LiStyled>
            <Button
              onClick={() => {
                navigate(
                  "/eksport"
                );
                handleMenuToggle();
              }}
              activeColor={
                pageType
              }
            >
              EKSPORT
            </Button>
          </LiStyled>
          <LiStyled>
            <Button
              onClick={() => {
                navigate(
                  "/omos"
                );
                handleMenuToggle();
              }}
            >
              OM OS
            </Button>
          </LiStyled>
        </UlStyled>
        <SwitcherButton
          hidden={state}
          onClick={() =>
            handleMenuToggle()
          }
        ></SwitcherButton>
        <Kontakt />
      </StyledDiv>
    </StyledWrapper>
  );
};

export default Sidebar;
