import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  color: var(--primary-pink);
  background-color: var(--transparent-white-extra);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  .name {
    font-size: 1.5em;
    letter-spacing: 2px;
  }

  .contacts {
    svg {
      margin: 1em;
      color: var(--primary-pink);
      transition: 0.4s ease-in-out;

      :hover {
        color: var(--primary-orange);
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: 75px;
    .name {
      font-size: 1em;
    }
    .contacts svg {
      margin: 0.4em;
      height: 20px;
    }
  }
`;
