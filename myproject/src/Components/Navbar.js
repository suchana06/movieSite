import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <label id='label'> MovieGeeks</label>
            <ul className="nav-Links">
                <NavLink to="/" className="navig">Home</NavLink>
                <NavLink to="about" className="navig">About</ NavLink>
            </ul>
        </nav>
    )
}
export default Navbar;
