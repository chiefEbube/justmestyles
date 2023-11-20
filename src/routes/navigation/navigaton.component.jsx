import { Outlet, Link } from "react-router-dom"
import jmsLogo from '../../assets/JMS.png'

import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"

import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    
    const signOutHandler = async() => {
        await signOutUser()
        setCurrentUser(null)
    }
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img
                        src={jmsLogo}
                        className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ?
                            <>
                                <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                            </>
                            :
                            <>
                                <Link className="nav-link" to='/auth'>
                                    SIGN IN
                                </Link>
                            </>
                    }

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation