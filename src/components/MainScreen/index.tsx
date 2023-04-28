import { FC, useEffect, useState, useContext } from "react";
import { getAllPokemon } from "../../services/pokeService";
import Card from "../Card";
import { CardsContainer } from "./styles";
import { IMainScreenState } from "../../interfaces";
import { SearchContext } from "../../context";
import InfiniteScroll from "react-infinite-scroll-component";

const MainScreen: FC = () => {
  const [state, setState] = useState<IMainScreenState>({
    pokes: [],
    currentPage: 1,
  });

  const { pokes, currentPage } = state;
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const getPokes = async () => {
      try {
        const res = await getAllPokemon();
        setState((prevState) => ({ ...prevState, pokes: res }));
      } catch (error) {
        throw new Error(`failed to fetch: ${error}`);
      }
    };
    getPokes();
  }, []);

  const loadMorePokemon = async () => {
    try {
      const response = await getAllPokemon(currentPage * 20);
      const newPokes = response.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setState((prevState) => ({
        ...prevState,
        pokes: [...prevState.pokes, ...newPokes],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      throw new Error(`failed to fetch: ${error}`);
    }
  };

  const filteredPokes = pokes.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <InfiniteScroll
      dataLength={filteredPokes.length}
      next={loadMorePokemon}
      hasMore={true}
      loader={<></>}
      endMessage={<h4>End of results</h4>}
    >
      <CardsContainer>
        {filteredPokes.map((poke) => (
          <Card
            key={poke.name}
            name={poke.name}
            imageUrl={poke.imageUrl}
            type={poke.type}
            id={poke.id}
            abilities={poke.abilities}
            weaknesses={poke.weaknesses}
            sprites={poke.sprites}
          />
        ))}
      </CardsContainer>
    </InfiniteScroll>
  );
};

export default MainScreen;
