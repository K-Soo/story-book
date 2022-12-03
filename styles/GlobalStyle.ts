import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  /* 모바일 수평 스크롤 금지 */
  html, body {
  	max-width: 100%;
  	overflow-x: hidden;
    font-size: 14px;
  }
  input, textarea { 
    all: unset;
    /* -moz-user-select: auto; */
    /* -webkit-user-select: auto; */
    /* -ms-user-select: auto; */
    /* user-select: auto; */
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
 body{
   /* color: #182431BE; */
   /* width: 100%; */
    /* overflow-y: hidden; */
   /* overflow:hidden; */
 }
 :root {
  --rsbs-backdrop-bg: rgba(0, 0, 0, 0.3);
  --rsbs-handle-bg: hsla(0, 0%, 0%, 0.14);
}
[data-rsbs-overlay] {
  background-color: #fff;
  max-width: 640px;
  margin: 0 auto;
  height: var(--rsbs-overlay-h);
  transform: translate3d(0, var(--rsbs-overlay-translate-y), 0);
  will-change: height;
}
`;

export default GlobalStyle;
