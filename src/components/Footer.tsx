import { FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-mikro-green dark:bg-mikro-green-dark text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <a href="mailto:mikro@ifi.uio.no" 
                               className="flex items-center hover:text-mikro-yellow-light">
                                <FaEnvelope className="mr-2" />
                                mikro@ifi.uio.no
                            </a>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <address className="not-italic">
                                    Ole-Johan Dahls hus<br />
                                    Gaustadalléen 23B<br />
                                    0373 Oslo
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="space-y-2">
                            <a href="https://www.instagram.com/ifimikro/" 
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex items-center hover:text-mikro-yellow-light">
                                <FaInstagram className="mr-2" />
                                @ifimikro
                            </a>
                        </div>
                    </div>

                    {/* Contribute */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contribute</h3>
                        <a href="https://github.com/mikro-ifi/webpage" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center hover:text-mikro-yellow-light">
                            <FaGithub className="mr-2" />
                            GitHub Repository
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p>&copy; {new Date().getFullYear()} Mikro - Linjeforeningen for Robotikk og Intelligente systemer</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;