import "./ProductsList.css";
import products from "../../data/products.json";
import ProductsListItem from "../ProductsListItem/ProductsListItem";

console.log("products :>> ", products);

const ProductsList = () => {
  return (
    <ul className="products">
      {/* {products.map(({ url, model, price = 0, currency, id }) => (
        <ProductsListItem
          key={id}
          url={url}
          price={price}
          model={model}
          currency={currency}
        /> */}
      {/* {products.map(({ id, ...rest }) => (
        <ProductsListItem key={id} {...rest} />
      ))} */}
      {products.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
