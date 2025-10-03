export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const fetchCharacters = async (page: number): Promise<CharactersResponse> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
};

export const fetchCharacter = async (id: string): Promise<Character> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("Failed to fetch character");
  return res.json();
};
