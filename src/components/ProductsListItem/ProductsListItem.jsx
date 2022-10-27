import PropTypes from "prop-types";
import {
  Currency,
  Item,
  Price,
  ProductsDescr,
  ProductsImage,
  ProductsImageWrapper,
  ProductsSale,
  ProductTitle,
  BtnBuy,
} from "./ProductsListItem.styled";

const ProductsListItem = ({ addToCart, ...product }) => {
  const { url, price, model, currency, sale } = product;
  return (
    <Item>
      <ProductsImageWrapper>
        <ProductsSale sale={sale}>Акція</ProductsSale>
        <ProductsImage src={url} alt={model} />
      </ProductsImageWrapper>
      <ProductsDescr>
        <ProductTitle>{model}</ProductTitle>
        {price && sale && <Price sale={sale}>{price}</Price>}
        <Price>
          {sale
            ? (Number(price) * 0.9).toFixed(0)
            : price
            ? price
            : "Товар відсутній"}
        </Price>
        {price && <Currency>{currency}</Currency>}
      </ProductsDescr>
      <BtnBuy
        onClick={(e) => addToCart(product)}
        disabled={!price}
        type="button"
      >
        Купити
      </BtnBuy>
    </Item>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  model: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
