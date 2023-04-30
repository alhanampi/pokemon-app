import styled from "styled-components";

export const FullCardContainer = styled.div`
  display: flex;
  width: 13em;
  height: 20em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 6px var(--primary-grey);
  position: relative;
  margin: 0 20px;

  .poke {
    height: 4em;
    z-index: 3;
    margin: -3em 0;
  }

  .poke-font {
    font-size: 12px;
  }

  .name {
    color: var(--primary-white);
    letter-spacing: 3px;
    text-shadow: 3px 2px 8px var(--primary-grey);
    margin-top: -1em;
  }

  .info {
    font-family: "Roboto", sans-serif;
    background-color: var(--transparent-white-extra);
    text-align: center;
    border-radius: 10px;
    padding: 0 1em;
    margin: 0 0.5em;
    box-shadow: 2px 2px 6px var(--transparent-black);
  }

  .icons {
    display: flex;
    justify-content: center;

    img {
      width: 1em;
      height: 1em;
      padding: 0.3em 0.2em;
    }
  }

  transition: transform 0.5s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(30deg);
  }

  @media (max-width: 600px) {
    width: 14em;
    height: 16em;
    margin: 0 10px;

    .poke {
      height: 8em;
      z-index: 3;
      margin: -4em 0;
    }

    .poke-font {
      font-size: 11px;
    }
    .info {
      font-size: 12px;
    }
  }
`;
