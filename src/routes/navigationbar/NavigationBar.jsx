import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
} from './navigationbar.styles';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../context/CartContext';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwnlogo />
        </LogoContainer>
        <NavLinks>
          <LogoContainer to="/shop">shop</LogoContainer>
          {currentUser ? (
            <LogoContainer onClick={signOutAuthUser}>Sign Out</LogoContainer>
          ) : (
            <LogoContainer to="/auth">Sign In</LogoContainer>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
