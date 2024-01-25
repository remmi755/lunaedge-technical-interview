export type SpritesType = {
  back_default: string;
  back_female: string;
  front_default: string;
};

export type PokemonType = {
  id: number | string;
  name: string;
  url: string;
  sprites: SpritesType;
};
