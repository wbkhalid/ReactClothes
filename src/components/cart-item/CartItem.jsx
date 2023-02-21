import { CartItemContainer, Image, ItemDetails, NameAndPrice } from "./cartItem.styles";


const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <NameAndPrice>{name}</NameAndPrice>
        <NameAndPrice>{quantity} &#10005; {price}</NameAndPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
