import { FC, useContext } from "react";
import { HeaderContainer, SearchInput, Toggle } from "./styles";
import { CgPokemon } from "react-icons/cg";
import { IHeaderProps } from "../../interfaces";
import { SearchContext } from "../../context";

const Header: FC<IHeaderProps> = ({ toggleTheme }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <HeaderContainer className="poke-font">
      <div className="left">
        <a href="/">
          <CgPokemon className="icon" />
          <span>PokeApp</span>
        </a>
      </div>
      <div className="right">
        <SearchInput
          type="text"
          placeholder="Search"
          className="poke-font"
          value={searchTerm}
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
