import * as React from "react";
import { useState } from "react";
import SelectedPokemonCard from "./SelectedPokemonCard";
import Button from "./Button/Button";
import { PokemonType } from "../types/types";

export interface TeamProps {
  team: PokemonType[] | null;
  setTeam: (result: PokemonType[] | null) => void;
}

const Team = ({ team, setTeam }: TeamProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType | null>(
    null
  );
  const removePokemon = (el: PokemonType) => {
    const result = team?.filter((pokemon) => pokemon !== el);
    if (result !== undefined) {
      setTeam(result);
    }
  };

  return (
    <div className="w-full ">
      <ul className="flex flex-col justify-between gap-3 mt-8 my-4">
        {team &&
          team.map((pokemon) => (
            <li key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
              <SelectedPokemonCard
                pokemon={pokemon}
                width={100}
                height={100}
                removePokemon={removePokemon}
              />
            </li>
          ))}
      </ul>

      <div className="bg-white rounded-md p-4 flex gap-3 border-t-2 justify-end">
        {selectedPokemon ? (
          <>
            <div className="flex-auto w-100">
              <SelectedPokemonCard
                pokemon={selectedPokemon}
                width={50}
                height={50}
                removePokemon={removePokemon}
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="flex justify-end gap-2">
          <Button type="reset" text="Cancel" variant="text" size="xl" />
          <Button
            type="button"
            text="Save"
            variant="primary"
            size="xl"
            onClick={() => setSelectedPokemon(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
