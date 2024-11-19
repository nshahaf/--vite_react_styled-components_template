import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    color: black;
  }

  body {
    // background-color: black;
  }

  .page {
    width: 100%;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0;
  }

  li {
    line-height: 0;
  }

  img {
    width: 100%;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  p {

  }
`;

export default GlobalStyle;