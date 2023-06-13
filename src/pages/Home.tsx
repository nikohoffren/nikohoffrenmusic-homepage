import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "../dark-theme.css";
// import Typing from "react-typing-effect";

export default function Home() {
    const { language } = useContext(LanguageContext);
    const cvUrl = "/nikohoffren-cv.pdf";

    return (
        <>
            <div className="container"></div>
            {/* <img src="NHlogo.jpg" alt="Niko Hoffrén logo" className="NHlogo" /> */}
            <section>
                <div className="bio-info">
                    <div className="header2-hero">
                        <div className="header2-info">
                            <h1>
                                {language === "en"
                                    ? "I'm Niko Hoffrén"
                                    : "Olen Niko Hoffrén"}
                            </h1>
                            <h2>
                                {/* <Typing
                                    cursorClassName="red-text"
                                    speed={30}
                                    eraseSpeed={30}
                                    text={[
                                        language === "en"
                                            ? "Software developer & music producer"
                                            : "Ohjelmistokehittäjä ja musiikintuottaja",
                                    ]}
                                /> */}
                                {[
                                    language === "en"
                                        ? "Software developer & music producer"
                                        : "Ohjelmistokehittäjä ja musiikintuottaja",
                                ]}
                            </h2>
                            <br />
                            <h4>
                                {language === "en"
                                    ? "Download my CV from this link:"
                                    : "Lataa CV:ni tästä linkistä:"}
                            </h4>
                            <a
                                href={cvUrl}
                                download
                                className="cv-download-button"
                            >
                                {language === "en" ? "Download CV" : "Lataa CV"}
                            </a>
                            <br />
                            {/* <p class="bold">Welcome to my website! Here you can find my personal<br /> Portfolio and other info</p> */}
                        </div>

                        <div className="header2-img-box">
                            {/* <img src="react.svg" alt="Niko Hoffrén" className="back-img" /> */}
                            <img
                                src="NH-photo3.JPG.png"
                                alt="Niko Hoffrén"
                                className="front-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}