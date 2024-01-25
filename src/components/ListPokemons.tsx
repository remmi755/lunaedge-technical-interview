import * as React from "react";
import { PokemonType } from "../types/types";

export interface ListPokemonsProps {
  pokemon?: PokemonType;
  pokemons: PokemonType[];
  text: string | null;
  showPokemon: (pokemonName: string) => Promise<string>;
}

const ListPokemons = ({ pokemons, text, showPokemon }: ListPokemonsProps) => {
  const filteredData =
    pokemons &&
    pokemons.map((el) => {
      if (text === "") {
        return el.name;
      } else if (text && el.name.includes(text?.toLowerCase())) {
        return el.name;
      }
    });

  return (
    <ul className="flex flex-1 flex-col ring-1 ring-teal-200 max-h-[485px] overflow-y-auto bg-[#182237] rounded-md cursor-pointer">
      <h3 className="text-fuchsia-600 text-3xl font-bold mb-1">
        Select your team:
      </h3>
      {filteredData &&
        filteredData.map((el, index) => (
          <li
            className="px-2 text-teal-700 text-2xl font-bold w-45 hover:bg-blue-200 "
            key={index}
            onClick={() => showPokemon(el as string)}
          >
            {el}
          </li>
        ))}
    </ul>
  );
};

export default ListPokemons;
