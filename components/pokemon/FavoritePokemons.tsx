import { FC } from "react";

import { Grid, Card } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritePokemons: FC<{ pokemons: number[] }> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
