import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="w-full">
            <ul className="flex space-x-4 p-4 bg-mikro-green-dark text-black">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;