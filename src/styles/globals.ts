import { css } from 'styled-components';

export const lightTheme = {
  colors: {
    primaryOrange: 'rgb(255, 152, 0)',
    primaryPink: 'rgb(233, 30, 99)',
    primaryGrey: 'rgb(158, 158, 158)',
    primaryBlack: 'rgb(0, 0, 0)',
    primaryWhite: 'rgb(255, 255, 250)',
    transparentWhite: 'rgba(255, 255, 250, 0.4)',
    transparentWhiteExtra: 'rgba(255, 255, 250, 0.7)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
  },
};

export const darkTheme = {
  colors: {
    primaryOrange: 'rgb(222, 113, 4)',
    primaryPink: 'rgb(186, 7, 68)',
    primaryGrey: 'rgb(158, 158, 158)',
    primaryBlack: 'rgb(240, 240, 240)',
    primaryWhite: 'rgb(40, 40, 40)',
    transparentWhite: 'rgba(255, 255, 250, 0.4)',
    transparentWhiteExtra: 'rgba(25, 25, 25, 0.7)',
    transparentBlack: 'rgba(230, 230, 230, 0.4)',
  },
};

export const Globals = css`
  @font-face {
    font-family: 'Pokemon';
    src: url('/fonts/Pokemon Solid.ttf') format('truetype');
  }

  :root {
    --primary-orange: ${({ theme }) => theme.colors.primaryOrange};
    --primary-pink: ${({ theme }) => theme.colors.primaryPink};
    --primary-grey: ${({ theme }) => theme.colors.primaryGrey};
    --primary-black: ${({ theme }) => theme.colors.primaryBlack};
    --primary-white: ${({ theme }) => theme.colors.primaryWhite};
    --transparent-white: ${({ theme }) => theme.colors.transparentWhite};
    --transparent-white-extra: ${({ theme }) =>
      theme.colors.transparentWhiteExtra};
    --transparent-black: ${({ theme }) => theme.colors.transparentBlack};
  }

  body {
    margin: 0;
    .poke-font {
      font-family: 'Pokemon', sans-serif;
    }
  }
`;
