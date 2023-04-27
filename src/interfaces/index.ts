export interface IMainScreenState {
  pokes: IPokemonData[];
  currentPage: number;
  searchTerm: string;
}

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
  sprites: {
    front_default: string;
  };
  type: string[];
  abilities: string[];
  weaknesses: string[];
}
