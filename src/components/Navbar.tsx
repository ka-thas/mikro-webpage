import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTrophy } from "react-icons/fa";
import mikroAbstractWire from '../assets/logos/mikro-abstract-wire.svg'
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <nav className="w-full">
            <ul className="flex items-center justify-between p-4 bg-mikro-green border-xl dark:bg-mikro-green text-white">
                <div className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            aria-label="Home"
                            className="hover:text-mikro-yellow-light transition-colors flex items-center gap-2"
                        >
                            <img
                                src={mikroAbstractWire}
                                alt="Mikro Logo"
                                className="w-8 h-8"
                            />
                        </Link>
                    </li>
                </div>
                <div className="flex space-x-7 items-center">
                    <li>
                        <Link
                            to="/"
                            aria-label="Home"
                            className="hover:text-mikro-yellow-light transition-colors flex items-center gap-2"
                        >
                            <FaHome className="w-6 h-6" />
                            <span>Hjem</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-mikro-yellow-light transition-colors flex items-center gap-2"
                        >
                            <FaInfoCircle className="w-6 h-6" />
                            <span>Om oss</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/fame"
                            className="hover:text-mikro-yellow-light transition-colors flex items-center gap-2"
                        >
                            <FaTrophy className="w-6 h-6" />
                            <span>Wall of Fame</span>
                        </Link>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
