import styled from 'styled-components';

export const FullCardContainer = styled.div`
  display: flex;
  width: 10em;
  height: 20em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 6px var(--primary-grey);
  position: relative;

    img {
     height: 4em;
     z-index: 3;
     margin: -3em 0; 
    }

    .name {
      color: var(--primary-white);
      letter-spacing: 3px;
      text-shadow: 3px 2px 8px var(--primary-grey);
      margin-top: -1em;
    }

    .info {
      font-family: 'Roboto', sans-serif;
      background-color: var(--transparent-white-extra);
      border-radius: 10px;
      padding: 0 1em;
    }
`