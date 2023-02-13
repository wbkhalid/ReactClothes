import './navigationbar.styles.scss'
import { NavLink, Outlet } from 'react-router-dom';
import {ReactComponent as Crwnlogo} from '../../assests/crown.svg' 

const NavigationBar = () => {
  return (
    <>
      <div className='navigation'>
        <NavLink className='logo_container' to='/'>
            <Crwnlogo/>
        </NavLink>
        <div className="nav_link_container">
        <NavLink className='logo_container' to='/shop'>
            shop
        </NavLink>
        <NavLink className='logo_container' to='/auth'>
            Sign In
        </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
