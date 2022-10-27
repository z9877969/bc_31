import {
  BtnClose,
  BtnOrder,
  BtnRemove,
  CartContainer,
  CartDescr,
  CartItem,
  CartProducts,
} from "./Cart.styled";
import sprite from "../../assets/icons/sprite.svg";

const Cart = ({ products, isCartOpen, closeCart, removeProduct }) => {
  return (
    <CartContainer isOpen={isCartOpen}>
      <BtnClose onClick={closeCart} type="button">
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </BtnClose>
      <CartProducts>
        {products.map(({ model, url, price, currency, id }) => (
          <CartItem key={id}>
            <img src={url} alt={model} />
            <CartDescr>
              <h3>{model}</h3>
              <span>{price}</span>
              <span>{currency}</span>
            </CartDescr>
            <BtnRemove onClick={(e) => removeProduct(id)} type="button">
              <svg>
                <use href={sprite + "#icon-bin2"}></use>
              </svg>
            </BtnRemove>
          </CartItem>
        ))}
      </CartProducts>
      <BtnOrder type="button">Submit</BtnOrder>
    </CartContainer>
  );
};

export default Cart;
