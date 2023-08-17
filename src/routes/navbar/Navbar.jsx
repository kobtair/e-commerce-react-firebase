import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext/ShoppingCartContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import "./navbar.styles.scss";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={CrwnLogo} alt="crwn-clothing-logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={() => signOutUser()}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
