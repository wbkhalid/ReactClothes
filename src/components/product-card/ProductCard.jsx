import './productCard.scss';
import Button,{BUTTON_TYPE_CLASS} from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const {addItemToCart} = useContext(CartContext)
  const { name, price, imageUrl } = product;
  const addProductToCart =()=>addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASS.inverted}onClick={addProductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
