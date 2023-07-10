import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // import the menu and close icons
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "./LanguageContext";

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black py-2 px-4 shadow-lg fixed top-0 left-0 w-full z-10">
            <div className="flex items-center justify-between">
                <CustomLink to="/" className="">
                    <img
                        src="NHlogoTransparent.png"
                        alt=""
                        className="w-14 h-10 hover:text-purple-300"
                    />
                </CustomLink>

                {/* Menu Icon, visible only on small screens */}
                <div className="sm:hidden">
                    <button onClick={toggleSideNav}>
                        {isOpen ? (
                            <FiX className="h-6 w-6 text-white" />
                        ) : (
                            <FiMenu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Sidebar, visible only on small screens */}
            <div
                className={`fixed z-20 inset-0 transform transition-transform duration-200 ease-in-out bg-black
                ${
                    isOpen
                        ? "opacity-70 translate-x-0"
                        : "opacity-0 -translate-x-full"
                } sm:hidden`}
            >
                <ul className="flex flex-col items-start space-y-6 p-6 pt-20 text-white">
                    <li className="w-full">
                        <CustomLink
                            to="/music"
                            className="text-lg hover:text-purple-300 mx-2 w-full"
                            onClick={toggleSideNav}
                        >
                            {language === "en" ? "MUSIC" : "MUSIIKKI"}
                        </CustomLink>
                    </li>
                    <li className="w-full">
                        <CustomLink
                            to="/videos"
                            className="text-lg hover:text-purple-300 mx-2 w-full"
                            onClick={toggleSideNav}
                        >
                            {language === "en" ? "VIDEOS" : "VIDEOT"}
                        </CustomLink>
                    </li>
                    <li className="w-full">
                        <CustomLink
                            to="/gear"
                            className="text-lg hover:text-purple-300 mx-2 w-full"
                            onClick={toggleSideNav}
                        >
                            {language === "en" ? "GEAR" : "SOITTIMET"}
                        </CustomLink>
                    </li>
                    <li className="w-full">
                        <LanguageSelector setLanguage={setLanguage} />
                    </li>
                </ul>
            </div>

            {/* Navbar, visible only on larger screens */}
            <ul className="flex items-center justify-center text-white sm:flex">
                <li className="hidden sm:block">
                    <CustomLink
                        to="/music"
                        className="text-lg hover:text-purple-300 mx-12"
                    >
                        {language === "en" ? "MUSIC" : "MUSIIKKI"}
                    </CustomLink>
                </li>
                <li className="hidden sm:block">
                    <CustomLink
                        to="/videos"
                        className="text-lg hover:text-purple-300 mx-12"
                    >
                        {language === "en" ? "VIDEOS" : "VIDEOT"}
                    </CustomLink>
                </li>
                <li className="hidden sm:block">
                    <CustomLink
                        to="/gear"
                        className="text-lg hover:text-purple-300 mx-12"
                    >
                        {language === "en" ? "GEAR" : "SOITTIMET"}
                    </CustomLink>
                </li>
                <li className="hidden sm:block mx-12">
                    <LanguageSelector setLanguage={setLanguage} />
                </li>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link
            to={to}
            className={`hover:underline hover:text-purple-500 transition-colors duration-300 ${
                isActive ? "text-purple-500" : "text-purple-300"
            }`}
            {...props}
        >
            {children}
        </Link>
    );
}
