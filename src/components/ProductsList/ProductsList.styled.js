import styled from "styled-components";

const List = styled.ul`
  ${(props) => console.log(props)}
  list-style: none;
  padding: 0;
  /* margin: 0 auto; */
  width: 330px;
  display: grid;
  grid-template-columns: repeat(1, 300px);

  grid-gap: 15px;
`;

export const ListWithMedia = styled(List)`
  @media screen and (min-width: 768px) {
    & {
      width: 620px;
      grid-template-columns: repeat(2, 300px);
      grid-gap: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
    & {
      width: 930px;
      grid-template-columns: repeat(3, 300px);
      grid-gap: 15px;
    }
  }
`;
