import { Outlet, Link } from "react-router-dom"
import jmsLogo from '../../assets/JMS.png'

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img
                        src={jmsLogo}
                        className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation