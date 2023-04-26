import styled from 'styled-components';

export const MiniCardContainer = styled.div`
  display: flex;
  width: 13em;
  height: 20em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 6px var(--primary-grey);
  position: relative;
  margin: 0 20px;
  
    img {
     height: 8em;
     padding-bottom: 4em;
     z-index: 3;
    }

    .name {
      color: var(--primary-white);
      letter-spacing: 3px;
      text-shadow: 3px 2px 8px var(--primary-grey);
    }

    .id {
      color: var( --transparent-white);
      position: absolute;
      font-size: 6em;
      bottom: -0.5em;
    }
`