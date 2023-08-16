import { Outlet, Link } from "react-router-dom"
import CrwnLogo from '../../assets/crown.svg'
import { UserContext } from "../../contexts/UserContext/UserContext"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { useContext } from "react"
import './navbar.styles.scss'

export default function Navbar() {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const signOut = async()=>{
    await signOutUser()
    setCurrentUser(null)
  }


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
      { currentUser?<span className="nav-link" onClick={signOut}>Sign Out</span> :
      <Link className='nav-link' to='/auth'  >
      Sign In
      </Link>
      }
      </div>

    
    </div>
    <Outlet />
    </>
  )
}
