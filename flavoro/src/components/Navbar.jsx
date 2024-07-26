import { FiGlobe } from 'react-icons/fi';
import { HiUser, HiUserAdd } from 'react-icons/hi';

function Navbar() {
    return (
        <div className="bg-green-600 px-8">
            <div className="h-14 sm:h-11 container mx-auto flex items-center justify-center sm:justify-between">
                {/* Flavoro Yemek Dünyası Yazısı */}
                <a href="#" className="text-lg text-white font-semibold">
                    Flavoro Yemek Dünyası
                </a>
                <nav className="gap-x-8 hidden sm:flex">
                    <a href="#"
                        className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                        <FiGlobe size={18} />
                        Türkçe (TR)
                    </a>
                    <a href="#"
                        className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                        <HiUser size={18} />
                        Giriş yap
                    </a>
                    <a href="#"
                        className="hover:text-opacity-100 transition-colors text-white text-opacity-80 text-sm font-semibold gap-x-2 flex items-center">
                        <HiUserAdd size={19} />
                        Kayıt ol
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
