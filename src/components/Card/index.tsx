import React, { FC, useState } from "react";
import MiniCard from "./MiniCard";
import FullCard from "./FullCard";
import { IPokemonData } from "../../services/pokeService";
import { CardContainer } from "./styles";

const Card: FC<IPokemonData> = ({
  name,
  imageUrl,
  type,
  id,
  abilities,
  weaknesses,
}) => {
  const [showFull, setshowFull] = useState(false);

  return (
    <CardContainer
      className={showFull ? "show-full" : ""}
      onClick={(): void => setshowFull(!showFull)}
    >
      <div className="card">
        <div className="card-front">
          <MiniCard
            name={name}
            imageUrl={imageUrl}
            type={type}
            id={id}
            abilities={abilities}
            weaknesses={weaknesses}
          />
        </div>
        <div className="card-back">
          <FullCard
            name={name}
            imageUrl={imageUrl}
            type={type}
            id={id}
            abilities={abilities}
            weaknesses={weaknesses}
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
