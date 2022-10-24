import PropTypes from "prop-types";
import "./ProductsListItem.css";

const ProductsListItem = ({ product }) => {
  //   const { url, price, model, currency, id } = props;
  const { url, price, model, currency } = product;

  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        <p className="products__sale">Акція</p>
        <img className="products__image" src={url} alt={model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{model}</h3>
        <span className="products__price">
          {price ? price : "Товар відсутній"}
        </span>
        {price && <span className="products__currency">{currency}</span>}
      </div>
      <button className="products__btn-buy" type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
    product: PropTypes.shape({
      url: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      model: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
//   product: PropTypes.object.isRequired,
};

export default ProductsListItem;
