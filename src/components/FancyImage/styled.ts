import styled from "styled-components";

export const ImageTile = styled.div<{ src: string; grayscale?: boolean }>`
  width: 100%;
  aspect-ratio: 14 / 9;

  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;

  filter: ${({ grayscale }) => (grayscale ? "grayscale(100%)" : "none")};
`;

export const Shade = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  height: 32px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.h3`
  color: white;

  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const Description = styled.small`
  color: rgba(255, 255, 255, 0.75);
`;
