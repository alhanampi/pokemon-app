import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 10em;
  height: 20em;
  perspective: 800px;
  cursor: pointer;

  & .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  & .card-front,
  & .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  & .card-front {
    z-index: 2;
    transform: rotateY(0deg);
  }

  & .card-back {
    transform: rotateY(180deg);
  }

  &.show-full .card {
    transform: rotateY(180deg);
  }
`;
