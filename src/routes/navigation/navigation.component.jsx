import { Outlet, Link } from "react-router-dom"
import jmsLogo from '../../assets/JMS.png'

import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components"
import { CartContext } from "../../contexts/cart.context"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img
                        src={jmsLogo}
                        className="logo" alt="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ?
                            <>
                                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                            </>
                            :
                            <>
                                <Link className="nav-link" to='/auth'>
                                    SIGN IN
                                </Link>
                            </>
                    }

                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation