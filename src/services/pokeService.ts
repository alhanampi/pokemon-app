import axios, { AxiosResponse } from "axios";

export interface IPokemonResult {
  name: string;
  url: string;
}

export interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResult[];
}

export interface IPokemonData {
  id: number;
  name: string;
  imageUrl: string;
  type: string[];
}

const api = "https://pokeapi.co/api/v2/";

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
        const pokemonData: IPokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          imageUrl: pokemonResponse.data.sprites.front_default,
          type: pokemonResponse.data.types.map((type: any) => type.type.name),
        };
        return pokemonData;
      })
    );

    console.log(pokemonDataArray);
    return pokemonDataArray;
  } catch (error) {
    throw new Error(`failed to fetch: ${error}`);
  }
};
