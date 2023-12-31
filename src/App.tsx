import React, { useState, useMemo, useEffect } from "react";
import Navbar from "src/Navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Gear from "./pages/Gear";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import './tailwind.css'
import { LanguageContext } from "src/LanguageContext";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
    const [language, setLanguage] = useState("en");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const value = useMemo(
        () => ({ language, setLanguage }),
        [language, setLanguage]
    );

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <LanguageContext.Provider value={value}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/gear" element={<Gear />} />
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </>
    );
}

export default App;
