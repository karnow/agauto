import { createGlobalStyle } from 'styled-components';
import WarAuto from '../assets/img/ba11.png';

const GlobalStyle = createGlobalStyle`

*, *::before , *::after {
    box-sizing: border-box;
}

html {
    font-size: 62,5%; //1 rem === 10px
}
body {
   background-color: yellow;
  margin:0 0;
   
    font-size: 1.6rem; //happy rems
    font-family: 'Montserrat', sans-serif;
}
.slider{
    width: 800px;
    height: 600px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 2px;
    border: 2px solid black;
}
.mapa{
    margin-top: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}

`;

export default GlobalStyle;
