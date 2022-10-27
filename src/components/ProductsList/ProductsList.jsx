import products from "../../data/products.json";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import { ListWithMedia } from "./ProductsList.styled";

const ProductsList = ({ addToCart }) => {
  return (
    <ListWithMedia>
      {products.map(({ url, model, price = 0, currency, id, sale }) => (
        <ProductsListItem
          key={id}
          url={url}
          price={price}
          model={model}
          currency={currency}
          sale={sale}
          id={id}
          addToCart={addToCart}
        />
      ))}
    </ListWithMedia>
  );
};

export default ProductsList;
