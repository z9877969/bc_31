import styled from "styled-components";

export const Item = styled.li`
  margin: 0;
  padding: 5px;
  background-color: #212121;
  overflow: hidden;
`;

export const ProductsImageWrapper = styled.div`
  position: relative;
`;

export const ProductsSale = styled.p`
  display: ${(props) => {
    return !props.sale ? "none" : "block";
  }}; // block
  position: absolute;
  right: -28px;
  top: -8px;
  transform: rotate(45deg);
  width: 100px;
  text-align: center;
  font-size: 20px;
  background-color: yellow;
`;

export const ProductsImage = styled.img`
  display: block;
  width: 100%;
`;

export const ProductsDescr = styled.div`
  margin: 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary}; // bisque
`;

export const ProductTitle = styled.h3`
  /* margin: 0; */
  font-size: 16px;
`;

const DescrElement = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary}; // "Roboto, sans-serif";
  color: ${({ theme, sale }) =>
    sale ? theme.colors.notSale : theme.colors.price}; // green
`;

export const Price = styled(DescrElement)`
  text-decoration: underline;
  margin-right: 10px;
  ${(props) =>
    props.sale
      ? "text-decoration: line-through;"
      : "text-decoration: underline;"}
`;

// export const BeforeSalePrice = styled(Price)`
//   text-decoration: line-through;
//   color: grey;
// `;

export const Currency = styled(DescrElement)`
  font-weight: bold;
`;

export const BtnBuy = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  background-color: burlywood;
  color: rgb(58, 44, 44);
  border-radius: 3px;

  &:active {
    transform: scale(0.95);
  }
`;
