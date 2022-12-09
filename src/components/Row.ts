import styled from "styled-components";

type Props = {
  margin?: string;
};
export const Row = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${({ margin }) => margin || "0"};
`;
