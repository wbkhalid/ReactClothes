import './navigationbar.styles.scss';
import { NavLink, Outlet } from 'react-router-dom';
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
      <div className="navigation">
        <NavLink className="logo_container" to="/">
          <Crwnlogo />
        </NavLink>
        <div className="nav_links_container">
          <NavLink className="logo_container" to="/shop">
            shop
          </NavLink>
          {currentUser ? (
            <NavLink className="logo_container" onClick={signOutAuthUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink className="logo_container" to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
