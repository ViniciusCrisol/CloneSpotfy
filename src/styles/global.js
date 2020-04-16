import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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

export const Container = styled.div`
  width: auto;
  flex: 1;
  margin: 0;
  margin-left: 200px;
  padding: 16px 0;
`;
