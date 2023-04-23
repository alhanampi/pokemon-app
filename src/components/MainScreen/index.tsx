import React, { useEffect, useState } from 'react';
import { getAllPokemon, IPokemonData } from '../../services/pokeService';
import Card from '../Card';
import { CardsContainer } from './styles';

interface IMainScreenState {
  pokes: IPokemonData[];
  currentPage: number;
}

const MainScreen = () => {
  const [state, setState] = useState<IMainScreenState>({
    pokes: [],
    currentPage: 1,
  });

  const { pokes, currentPage } = state;

  useEffect(() => {
    const getPokes = async () => {
      try {
        const res = await getAllPokemon();
        setState(prevState => ({ ...prevState, pokes: res }));
      } catch (error) {
        throw new Error(`failed to fetch: ${error}`);
      }
    };
    getPokes();
  }, []);

  const loadMorePokemon = async () => {
    try {
      const response = await getAllPokemon(currentPage * 20);
      setState(prevState => ({
        ...prevState,
        pokes: [...prevState.pokes, ...response],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
      throw new Error(`failed to fetch: ${error}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        loadMorePokemon();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div>
      <div className='poke-font'>Pokemon App</div>
      <CardsContainer>
      {pokes.map(poke => (
        <Card
          key={poke.name}
          name={poke.name}
          imageUrl={poke.imageUrl}
          type={poke.type}
          id={poke.id}
        />
      ))}
      </CardsContainer>
    </div>
  );
};

export default MainScreen;
