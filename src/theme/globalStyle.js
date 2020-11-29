import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;
