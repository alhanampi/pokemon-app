import axios, { AxiosResponse } from "axios";
import { IPokemonData, IPokemonResponse, IPokemonResult } from "../interfaces";

const api = process.env.REACT_APP_API_URL;

export const getAllPokemon = async (offset = 0): Promise<IPokemonData[]> => {
  try {
    const response: AxiosResponse<IPokemonResponse> = await axios.get(
      `${api}pokemon`,
      {
        params: {
          offset,
          limit: 20,
        },
      }
    );

    const results: IPokemonResult[] = response.data.results;

    const pokemonDataArray: IPokemonData[] = await Promise.all(
      results.map(async (result: IPokemonResult) => {
        const pokemonResponse: AxiosResponse<any> = await axios.get(result.url);
        const abilities = pokemonResponse.data.abilities.map(
          (ability: any) => ability.ability.name
        );
        const weaknessesResponse: AxiosResponse<any> = await axios.get(
          `${api}type/${pokemonResponse.data.types[0].type.name}`
        );
        const weaknesses =
          weaknessesResponse.data.damage_relations.double_damage_from.map(
            (weakness: any) => weakness.name
          );

        const pokemonData: IPokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          imageUrl: pokemonResponse.data.sprites.front_default,
          sprites: pokemonResponse.data.sprites,
          type: pokemonResponse.data.types.map((type: any) => type.type.name),
          abilities,
          weaknesses,
        };
        return pokemonData;
      })
    );

    return pokemonDataArray;
  } catch (error) {
    throw new Error(`failed to fetch: ${error}`);
  }
};

export const searchPokemon = async (searchTerm: string): Promise<IPokemonData[]> => {
  try {
    const response: AxiosResponse<IPokemonResponse> = await axios.get(
      `${api}pokemon`,
      {
        params: {
          limit: 1118,
        },
      }
    );

    const results: IPokemonResult[] = response.data.results;

    const pokemonDataArray: IPokemonData[] = await Promise.all(
      results.map(async (result: IPokemonResult) => {
        const pokemonResponse: AxiosResponse<any> = await axios.get(result.url);
        const abilities = pokemonResponse.data.abilities.map(
          (ability: any) => ability.ability.name
        );
        const weaknessesResponse: AxiosResponse<any> = await axios.get(
          `${api}type/${pokemonResponse.data.types[0].type.name}`
        );
        const weaknesses =
          weaknessesResponse.data.damage_relations.double_damage_from.map(
            (weakness: any) => weakness.name
          );

        const pokemonData: IPokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          imageUrl: pokemonResponse.data.sprites.front_default,
          sprites: pokemonResponse.data.sprites,
          type: pokemonResponse.data.types.map((type: any) => type.type.name),
          abilities,
          weaknesses,
        };
        return pokemonData;
      })
    );

    const filteredPokemon = pokemonDataArray.filter((poke) =>
      poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPokemon;
  } catch (error) {
    throw new Error(`failed to fetch: ${error}`);
  }
};
