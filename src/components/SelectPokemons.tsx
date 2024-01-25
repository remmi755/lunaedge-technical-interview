import React, { useEffect, useState } from "react";
import { PokemonType } from "../types/types";
import axios from "axios";

const SelectPokemons = () => {
  const [text, setText] = useState<string | null>("");
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemon, setPokemon] = useState<PokemonType>();
  const [team, setTeam] = useState<PokemonType[] | null>([]);
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
  const [modalTeamIsOpen, setModalTeamIsOpen] = useState(false);
  const fullTeam = 4;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
          .then((res) => setPokemons(res.data.results));
      } catch (err) {
        console.log(err);
        alert("Error while receiving Pokemons");
      }
    };
    fetchPokemons();
  }, []);

  const fetchSinglePokemon = async (name: string) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      alert("Error while receiving SinglePokemon");
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="px-10"></div>
    </div>
  );
};

export default SelectPokemons;
