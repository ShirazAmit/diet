import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../logo.jpg'

function Header() {


    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> <img className='logo' src={logo}/> </Link>
            </div>
            <ul>
                <>
                    <li className='nav'>
                        <Link to='/register'>
                            <FaUser/>&nbsp; הירשם
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt/>&nbsp;התחבר
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            <FaSignOutAlt/>&nbsp;התנתק
                        </Link>
                    </li>

                </>

            </ul>
        </header>
    )
}

export default Header