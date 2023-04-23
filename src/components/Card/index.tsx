import React, { FC, useState } from "react";
import MiniCard from "./MiniCard";
import FullCard from "./FullCard";
import { IPokemonData } from "../../services/pokeService";

const Card: FC<IPokemonData> = ({ name, imageUrl, type, id }) => {
  const [showFull, setshowFull] = useState(false);

  return (
    <div onClick={(): void => setshowFull(!showFull)}>
      {!showFull ? (
        <>
          <MiniCard
            name={name}
            imageUrl={imageUrl}
            type={type}
            id={id}
          />
        </>
      ) : (
        <>
          <FullCard />
        </>
      )}
    </div>
  );
};

export default Card;
