import { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
export const FavoriteCardPokemon: FC<{ id: number }> = ({ id }) => {
  const router = useRouter();

  const onClickPokemon = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid onClick={onClickPokemon} xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        hoverable
        clickable
        css={{
          padding: "10px",
        }}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height="140px"
        />
      </Card>
    </Grid>
  );
};
