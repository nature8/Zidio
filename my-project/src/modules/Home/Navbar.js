import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Signup</Link>
            </li>
        </ul>
    )
}