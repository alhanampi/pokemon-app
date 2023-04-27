import { HeaderContainer, SearchInput } from "./styles";
import { CgPokemon } from "react-icons/cg";
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <HeaderContainer className="poke-font">
      <div className="left">
        <CgPokemon />
        PokeApp
      </div>
      <SearchInput type="text" placeholder="Search" className="poke-font" value={searchValue} onChange={handleSearchChange} />
    </HeaderContainer>
  );
};

export default Header;
