import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F8F8F8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 12px Inter, sans-serif;
  }

  #root {
    max-width: 584px;
    margin: 0 auto;
    padding: 42px;
    display: flex;
    flex-direction: column;
    background: #fff;
    align-items: center;
    margin-top: 40px;
    border-radius: 8px;
  }

  button {
    cursor: pointer;
  }
`;
