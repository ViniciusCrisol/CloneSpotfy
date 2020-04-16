import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0 ;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

body {
background: #181818;
-webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: white;
}

#root{
  height: 100vh;
  display: flex;
  margin: 0 auto;
}

button {
  cursor: pointer;
}

`;
