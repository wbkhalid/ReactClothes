import './navigationbar.styles.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg';
import { UserContext } from '../../context/context';
import { useContext } from 'react';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <NavLink className="logo_container" to="/">
          <Crwnlogo />
        </NavLink>
        <div className="nav_link_container">
          <NavLink className="logo_container" to="/shop">
            shop
          </NavLink>
          {currentUser ? (
            <NavLink className="logo_container" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink className="logo_container" to="/auth">
              Sign In
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
