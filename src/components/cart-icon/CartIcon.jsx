import './cartIcon.styles.jsx';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cartIcon.styles.jsx';
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
