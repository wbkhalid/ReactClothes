import './cartDropdown.styles.jsx';
import Button from '../button/Button';
import DirectoryItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './cartDropdown.styles.jsx';

const CartDropdown = () => {
  const naigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const checkOutHandler = () => {
    naigate('/checkout');
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <DirectoryItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkOutHandler}>Go to Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
