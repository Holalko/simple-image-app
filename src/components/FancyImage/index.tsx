import { Description, ImageTile, Shade, Text, Title } from "./styled";

type Props = {
  src: string;
  title: string;
  description: string;
  grayscale?: boolean;
};

export function FancyImageTile({ src, title, description, grayscale }: Props) {
  return (
    <ImageTile src={src} grayscale={grayscale}>
      <Shade />
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </ImageTile>
  );
}
