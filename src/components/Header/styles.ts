import styled from 'styled-components';

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
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 2rem;
  background-color: #f7f7f7;
  padding: 0.1rem 1rem;
  font-size: 0.6rem;
  color: #555;
  width: 18rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    width: 24rem;
  }
`;