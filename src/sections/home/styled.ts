import styled from "styled-components";

export const H1 = styled.h1`
  color: dimgrey;
  font-size: 32px;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 750px;
  height: 100vh;

  margin: 0 auto;
`;

export const ImageGrid = styled.div`
  width: 100%;
  max-width: 750px; // normally would use rem, but will stick to px for the sake of this example

  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 16px;
`;
