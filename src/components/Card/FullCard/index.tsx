import React, { FC } from "react";
import { FullCardContainer } from "./styles";
import { IPokemonData } from "../../../services/pokeService";
import "../../../styles/types.css";

const FullCard: FC<IPokemonData> = ({
  name,
  imageUrl,
  type,
  abilities,
  weaknesses,
}) => {
  const typeClass = type.map((type) => type.toLowerCase()).join(" ");

  return (
    <FullCardContainer className={typeClass}>
      <p className="poke-font name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      <img src={imageUrl} alt={name} className="poke" />
      <div className="info">
        <p>
          Type:
          <span className="icons">
            {type.map((t) => {
              return (
                <img
                  src={`/images/icons/${t}.png`}
                  alt={t}
                  key={t}
                  className="icons"
                />
              );
            })}
          </span>
        </p>
        <p>
          Abilities: <span className="poke-font">{abilities.join(", ")}</span>
        </p>
        <p>
          Weakness:
          <span className="icons">
            {weaknesses.map((w) => {
              return <img src={`/images/icons/${w}.png`} alt={w} key={w} />;
            })}
          </span>
        </p>
      </div>
    </FullCardContainer>
  );
};

export default FullCard;
