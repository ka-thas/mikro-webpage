import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    return (
        <nav className="w-full">
            <ul className="flex items-center justify-between p-4 bg-mikro-green dark:bg-mikro-green-dark text-white">
                <div className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
                <li><ThemeToggle /></li>
            </ul>
        </nav>
    );
}

export default Navbar;