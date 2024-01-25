import * as React from "react";
import Button from "./Button/Button";
import { PokemonType } from "../types/types";

export interface PokemonCardProps {
  pokemon: PokemonType;
  addToTeam: (pokemon: PokemonType) => void;
  team: PokemonType[] | null;
  fullTeam: number;
}

const PokemonCard = ({
  pokemon,
  addToTeam,
  team,
  fullTeam,
}: PokemonCardProps) => {
  const isEmpty = Object.keys(pokemon);

  return (
    <div className="p-2 ring-2 w-full ring-teal-300 rounded-md  bg-blue-200">
      {isEmpty.length ? (
        <img
          className="m-auto"
          src={pokemon?.sprites["front_default"]}
          alt=""
          width={350}
          height={350}
        />
      ) : (
        ""
      )}

      <h1 className="text-5xl text-teal-700 font-bold">{pokemon.name}</h1>
      <div className="mt-4 p-2">
        <Button
          disabled={team?.length === fullTeam}
          size="lg"
          text={team?.length === fullTeam ? "Full Team" : " Add to Team"}
          variant={team?.length === fullTeam ? "secondary" : "primary"}
          onClick={() => addToTeam(pokemon)}
        >
          {team?.length === fullTeam ? "Full Team" : " Add to Team"}
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
