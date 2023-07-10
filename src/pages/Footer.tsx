import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext);
    return (
        <footer className="bg-black text-white p-6">
            <div className="flex justify-center space-x-4 mb-4">
                <a
                    href="https://www.facebook.com/nikohoffrenmusic"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-400"
                >
                    <i className="fa fa-facebook"></i>
                </a>
                <a
                    href="https://www.instagram.com/nikohoffren"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-400"
                >
                    <i className="fa fa-instagram"></i>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCwGsJfqeCbZePUcrOvc-F2w"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 hover:text-red-400"
                >
                    <i className="fa fa-youtube"></i>
                </a>
                <a
                    href="https://open.spotify.com/artist/1iFr4SJkrSmlBYJMJ1Idqp?si=cu26iw_wT9OD_8a7dsRrlQ"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 hover:text-green-400"
                >
                    <i className="fa fa-spotify"></i>
                </a>
                <a
                    href="https://www.soundcloud.com/nikohoffren"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 hover:text-orange-400"
                >
                    <i className="fa fa-soundcloud"></i>
                </a>
            </div>

            <p className="text-center mb-4">nikohoffrenmusic@gmail.com</p>
            <p className="text-center mb-4">Software Development: <a href="https://nikohoffren.com" className="hover:text-red-400 text-red-500" target="blank">nikohoffren.com</a></p>

            <div className="text-center">
                <p>
                    {language === "en"
                        ? "Copyright © 2020-2023 Niko Hoffrén"
                        : "Tekijänoikeus © 2020-2023 Niko Hoffrén"}
                    <br />
                    {language === "en" ? "Coded with React " : "React "}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/react.svg"
                            className="inline-block w-6 h-6"
                            alt="React logo"
                        />
                    </a>{" "}
                    + Vite
                    <a
                        href="https://vitejs.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/vite.svg"
                            className="inline-block w-6 h-6"
                            alt="Vite logo"
                        />
                    </a>
                    + TypeScript
                    {language === "en" ? ". Hosted by Netlify" : " + Netlify"}
                    <a
                        href="https://www.netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/netlify.png"
                            className="inline-block w-6 h-6"
                            alt="Netlify logo"
                        />
                    </a>
                </p>
            </div>
        </footer>
    );
}
