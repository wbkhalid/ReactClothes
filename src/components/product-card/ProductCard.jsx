import './productCard.scss';
import Button from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const {addItemToCart} = useContext(CartContext)
  const { name, price, imageUrl } = product;
  console.log(product);
  const addProductToCart =()=>addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
