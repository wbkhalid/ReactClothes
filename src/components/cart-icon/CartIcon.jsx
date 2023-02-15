import { ReactComponent as ShoppingBag } from '../../assests/shopping-bag.svg';
import './cartIcon.styles.scss';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container'  onClick={toggleIsCartOpen}>
      <ShoppingBag className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
