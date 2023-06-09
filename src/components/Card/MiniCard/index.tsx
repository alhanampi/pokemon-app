import React, { FC } from "react";
import { MiniCardContainer } from "./styles";
import "../../../styles/types.css";
import { IPokemonData } from "../../../interfaces";

const MiniCard: FC<IPokemonData> = ({ name, imageUrl, id, type }) => {
  const typeClass = type.map((type) => type.toLowerCase()).join(" ");

  return (
    <MiniCardContainer className={typeClass}>
      <img src={imageUrl} alt={imageUrl} />
      <p className="poke-font id">{id}</p>
      <p className="poke-font name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </MiniCardContainer>
  );
};

export default MiniCard;
