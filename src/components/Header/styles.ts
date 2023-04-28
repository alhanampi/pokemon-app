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
  padding: 0 8rem;
  z-index: 3;

  .left,
  .right {
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

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 2em;

  input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary-orange);
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--primary-pink);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
`;
