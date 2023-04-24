import React, { FC } from "react";
import { FullCardContainer } from "./styles";
import { IPokemonData } from "../../../services/pokeService";
import "../../../styles/types.css";

const MiniCard: FC<IPokemonData> = ({ name, imageUrl, id, type, abilities, weaknesses }) => {
  const typeClass = type.map((type) => type.toLowerCase()).join(" ");
  return (
    <FullCardContainer className={typeClass}>
      <p className="poke-font name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      <img src={imageUrl} />
      <div className="info">
        <p>Type: <span className="poke-font">{type + " "} </span></p>
        <p>Abilities: <span className="poke-font">{abilities + " "} </span> </p>
        <p>Weakness: <span className="poke-font">{weaknesses + " "} </span></p>
      </div>
    </FullCardContainer>
  );
};

export default MiniCard;
