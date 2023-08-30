import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";

import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from "./navbar.styles";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen } = useContext(ShoppingCartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer  to="/">
          <img className="logo" src={CrwnLogo} alt="crwn-clothing-logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink  to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={() => signOutUser()}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink  to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {cartIsOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
