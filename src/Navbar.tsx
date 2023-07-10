import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
        <nav className="bg-black py-2 px-4 shadow-lg">
            <ul className="flex items-center justify-center text-white">
                <CustomLink
                    to="/"
                    className="flex items-center space-x-2 mx-4"
                >
                    <img src="NHlogoTransparent.png" alt="" className="w-14 h-10 hover:text-purple-300" />
                </CustomLink>
                <li>
                    <CustomLink to="/music" className="text-lg hover:text-purple-300 mx-4">
                        {language === "en" ? "MUSIC" : "MUSIIKKI"}
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/videos" className="text-lg hover:text-purple-300 mx-4">
                        {language === "en" ? "VIDEOS" : "VIDEOT"}
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/gear" className="text-lg hover:text-purple-300 mx-4">
                        {language === "en" ? "GEAR" : "SOITTIMET"}
                    </CustomLink>
                </li>
                <li>
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
        <Link to={to} className={`mx-2 hover:underline hover:text-purple-500 transition-colors duration-300 ${isActive ? "text-purple-500" : "text-purple-300"}`} {...props}>
            {children}
        </Link>
    );
}
