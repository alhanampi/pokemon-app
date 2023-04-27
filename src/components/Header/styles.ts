import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: var(--transparent-white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 3;

  .left {
    color: var(--primary-pink);
    font-size: 1.5em;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
  }

  .icon {
    height: 60px;
    margin-top: 10px;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid var(--primary-orange);
  border-radius: 2rem;
  background-color: var(--primary-white);
  padding: 0.1rem 1rem;
  font-size: 0.6rem;
  width: 18rem;
  transition: all 0.2s ease-in-out;
  color: var(--primary-pink);

  ::placeholder {
    color: var(--primary-orange);
  }
  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    width: 24rem;
  }
`;
