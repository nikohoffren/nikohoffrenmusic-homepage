import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageSelectorProps {
    setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
    const { language } = useContext(LanguageContext);

    const handleClick = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <div className="language-selector flex space-x-1">
            <button
                onClick={() => handleClick("fi")}
                className={`p-1 ${language === "fi" ? "bg-purple-500 text-white" : "bg-black text-purple-500"}`}
            >
                <img
                    src="./Flag_of_Finland.svg.png"
                    alt=""
                    className="language-flag w-6 h-4"
                />
            </button>
            <button
                onClick={() => handleClick("en")}
                className={`p-1 ${language === "en" ? "bg-purple-500 text-white" : "bg-black text-purple-500"}`}
            >
                <img
                    src="./Flag_of_the_United_Kingdom_(1-2).svg.png"
                    alt=""
                    className="language-flag w-6 h-4"
                />
            </button>
        </div>
    );
};

export default LanguageSelector;
