import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { RefreshIcon } from "@heroicons/react/outline";

interface VideoProps {
    src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
    const [isLoading, setIsLoading] = useState(true);

    const iframeLoaded = () => {
        setIsLoading(false);
    };

    const loader = (
        <div className="flex items-center justify-center h-full">
            <RefreshIcon className="animate-spin h-8 w-8 text-gray-500" />
        </div>
    );

    return (
        <div className="videos-col max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-3 md:max-w-2xl">
            {isLoading && loader}
            <iframe
                onLoad={iframeLoaded}
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default function Videos() {
    const { language } = useContext(LanguageContext);

    const videos = [
        "https://www.youtube.com/embed/videoseries?si=YWTdlizL-90dRfC4&amp;list=OLAK5uy_lsACttOsC4qdlN_LPw942LO6KxTzLQl3c",
        "https://www.youtube.com/embed/ZXABlRk-PXI",
        "https://www.youtube.com/embed/mA1mjCzKDKU",
        "https://www.youtube.com/embed/h81OYCLoXIY",
        "https://www.youtube.com/embed/Nkt2_k8jz28",
        "https://www.youtube.com/embed/2Xk-d-1jt70",
        "https://www.youtube.com/embed/5tusnfN2luE",
        "https://www.youtube.com/embed/T55DIK6Of1g",
        "https://www.youtube.com/embed/KjLabtOeoWY",
        "https://www.youtube.com/embed/fhgeuPS2H5Q",
        "https://www.youtube.com/embed/Zk7Yp3Sdzog",
        "https://www.youtube.com/embed/Jkn9FvHAsww",
        "https://www.youtube.com/embed/T1p9X-W-K9g",
        "https://www.youtube.com/embed/ZzKBIORk_Wk",
        "https://www.youtube.com/embed/s1NTu6Ft30c",
    ];

    return (
        <>
            <div className="py-10" />
            <section className="videos bg-gray-50 py-8 px-4">
                <div className="extra-margin-top" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {language === "en" ? "VIDEOS" : "VIDEOT"}
                </h1>

                <div className="flex flex-wrap justify-center">
                    {videos.map((videoSrc) => (
                        <Video key={videoSrc} src={videoSrc} />
                    ))}
                </div>
            </section>
        </>
    );
}
