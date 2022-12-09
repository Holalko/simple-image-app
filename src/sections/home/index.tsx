import { Container, H1, ImageGrid } from "./styled";
import { ItemType } from "../../api/aukro/types";
import { FancyImageTile } from "../../components/FancyImage";
import { Switch } from "../../components/Switch";
import { Row } from "../../components/Row";
import { Button } from "../../components/Button";
import { useReducer } from "react";

type Props = {
  data: ItemType[];
  refetchData(): void;
};
export function HomeSection({ data, refetchData }: Props) {
  const [grayscale, toggleGrayscale] = useReducer((state) => !state, false);

  return (
    <Container>
      <H1>Photo Fetcher</H1>

      <Row margin={"16px 0"}>
        <Switch
          checked={grayscale}
          onChange={toggleGrayscale}
          label={"Make photos grayscale"}
        />

        <Button onClick={refetchData}>Fetch New Photos</Button>
      </Row>

      <ImageGrid>
        {data.map((item) => {
          const imageUrl = item.images.lists.original[0].url;
          return (
            <FancyImageTile
              key={item.id}
              grayscale={grayscale}
              src={imageUrl}
              description={imageUrl}
              title={item.name}
            />
          );
        })}
      </ImageGrid>
    </Container>
  );
}
