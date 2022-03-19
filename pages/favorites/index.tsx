import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui/NoFavorites";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { getServerSideProps } from "../index";
import { FavoritePokemons } from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [pokemons, setPokemons] = useState<number[]>([]);

  useEffect(() => {
    setPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {pokemons.length == 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={pokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
