import { FC, useState } from "react";
import { HeaderContainer, SearchInput, Toggle } from "./styles";
import { CgPokemon } from "react-icons/cg";
import { IHeaderProps } from "../../interfaces";

const Header: FC<IHeaderProps> = ({ toggleTheme }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <HeaderContainer className="poke-font">
      <div className="left">
        <CgPokemon className="icon" />
        PokeApp
      </div>
      <div className="right">
        <SearchInput
          type="text"
          placeholder="Search"
          className="poke-font"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Toggle>
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider"></span>
        </Toggle>
      </div>
    </HeaderContainer>
  );
};

export default Header;
