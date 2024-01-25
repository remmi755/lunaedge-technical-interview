import * as React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
// import { MagnifyingGlassIcon } from "@heroicons/react/16/solid/index.js";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useForm } from "react-hook-form";
import Badge from "./Badge/Badge";
import { PokemonType } from "../types/types";
import { FormValues } from "../types/types";

export interface SearchProps {
  text: string | null;
  fullTeam: number;
  setText: (text: string) => void;
  team: PokemonType[] | null;
  setModalFormIsOpen: (modalFormIsOpen: boolean) => void;
}

const Search: React.FC<SearchProps> = ({
  text,
  setText,
  fullTeam,
  team,
  setModalFormIsOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  function onSubmit(data: { search: string }) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex justify-center"
        onChange={(e) => setText((e.target as HTMLInputElement).value)}
      >
        <Input
          toolTipInfo="information about searching"
          register={register}
          name="search"
          errors={errors}
          type="search"
          label="Search"
          value={text}
          styling="default"
          placeholder="Search"
          iconStart={<MagnifyingGlassIcon />}
        />
      </div>
      <div className="mt-6">
        <Button
          type="button"
          size="lg"
          text={
            team?.length !== fullTeam ? (
              <p className="flex gap-1">
                Selected
                <Badge text={team?.length} color="fuchsia" variant="xl" />
              </p>
            ) : (
              "Show Team"
            )
          }
          variant={team?.length === fullTeam ? "secondary" : "primary"}
          onClick={
            team?.length === fullTeam ? () => setModalFormIsOpen(true) : null
          }
        />
      </div>
    </form>
  );
};

export default Search;
