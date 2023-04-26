import React, { FC } from "react";
import { MiniCardContainer } from "./styles";
import { IPokemonData } from "../../../services/pokeService";
import '../../../styles/types.css'

const MiniCard: FC<IPokemonData> = ({ name, imageUrl, id, type }) => {
  
  const typeClass = type.map((type) => type.toLowerCase()).join(" ");
  
  return (
    <MiniCardContainer className={typeClass}>
      <img src={imageUrl} />
      <p className="poke-font id">{id}</p>
      <p className='poke-font name'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </MiniCardContainer>
  );
};

export default MiniCard;
