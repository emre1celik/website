import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/images/2151470664.jpg";
import AlbertusFont from "../assets/fonts/albertusmedium_regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'AlbertusMedium';
    src: url(${AlbertusFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'AlbertusMedium', Arial, sans-serif;
    color: white;
    background-color: #000; /* fallback color */
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    color: white;
    font-family: 'AlbertusMedium', Arial, sans-serif;
  }

  button, input, select, textarea {
    font-family: 'AlbertusMedium', Arial, sans-serif;
  }
`;

export default GlobalStyles;
