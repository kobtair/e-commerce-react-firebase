import { Outlet, Link } from "react-router-dom"
import CrwnLogo from '../../assets/crown.svg'
import './navbar.styles.scss'

export default function Navbar() {
  return (
    <>
    <div className="navigation">
      <Link className='logo-container' to='/'>
      <img className="logo" src={CrwnLogo} alt="crwn-clothing-logo" />
      </Link>
      <div className="nav-links-container">
      <Link className='nav-link' to='/shop'  >
      Shop
      </Link>
      <Link className='nav-link' to='/sign-in'  >
      Sign In
      </Link>
      </div>
    
    </div>
    <Outlet />
    </>
  )
}
