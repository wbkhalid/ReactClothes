import './cartDropdown.styles.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const naigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const checkOutHandler = () => {
    naigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkOutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
