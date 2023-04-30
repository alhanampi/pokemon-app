import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 13em;
  height: 20em;
  margin: 0 20px;
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

  @media (max-width: 600px) {
width: 14em;
    height: 16em;
    margin: 0 10px;
  }
`;
