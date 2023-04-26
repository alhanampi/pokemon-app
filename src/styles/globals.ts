import { css } from 'styled-components';

const Globals = css`
@font-face {
  font-family: 'Pokemon';
  src: url('/fonts/Pokemon Solid.ttf') format('truetype');
}

 :root  {
  --primary-red: #D2242A;
  --primary-blue: #00AEEE;
  --primary-yellow: #FFF202;
  --primary-green: #39B549;
  --primary-orange: rgba(255, 152, 0);
  --primary-purple: rgb(156, 39, 176);
  --primary-pink: rgb(233, 30, 99);
  --primary-brown: rgb(121, 85, 72);
  --primary-grey: rgb(158, 158, 158);
  --primary-black: rgb(0, 0, 0);
  --primary-white: rgb(255, 255, 250);
  --transparent-white: rgba(255, 255, 250, 0.4);
  --transparent-white-extra: rgba(255, 255, 250, 0.7);
  --transparent-black: rgba(0, 0, 0, 0.4);
  }

  body {
    .poke-font {
      font-family: "Pokemon", sans-serif
    }
  }
`;


export default Globals;
