import * as React from "react";
import { PokemonType } from "../types/types";

export interface SelectedPokemonCardProps {
  pokemon: PokemonType;
  width: number;
  height: number;
  removePokemon: (el: PokemonType) => void;
}

const SelectedPokemonCard = ({
  pokemon,
  width,
  height,
  removePokemon,
}: SelectedPokemonCardProps) => {
  const isEmpty = Object.keys(pokemon);

  return (
    <div className=" flex ring-2 w-full ring-teal-300 rounded-md  bg-blue-200 hover:ring-4 hover:ring-teal-500 hover:bg-blue-300 cursor-pointer">
      {isEmpty.length ? (
        <img
          src={pokemon.sprites["front_default"]}
          alt=""
          width={width}
          height={height}
        />
      ) : (
        ""
      )}

      <h1 className="text-5xl m-auto text-teal-700 font-bold flex items-center justify-center pb-2">
        {pokemon.name}
      </h1>

      <div
        className="flex items-center justify-start text-gray-400 w-16"
        onClick={() => removePokemon(pokemon)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectedPokemonCard;
