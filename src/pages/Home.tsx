import { RefreshIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { LanguageContext } from "src/LanguageContext";

interface CardProps {
    href: string;
    src: string;
    alt: string;
    title: string;
    label: string;
}

const Card: React.FC<CardProps> = ({ href, src, alt, title, label }) => {
    const [isLoading, setIsLoading] = useState(true);

    const imageLoaded = () => {
        setIsLoading(false);
    };

    const loader = (
        <div className="flex items-center justify-center h-full">
            <RefreshIcon className="animate-spin h-8 w-8 text-gray-500" />
        </div>
    );

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-64">
            <a href={href} target="_blank" rel="noreferrer">
                {isLoading && loader}
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-64 object-cover"
                    onLoad={imageLoaded}
                />
            </a>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">{label}</p>
            </div>
        </div>
    );
};

const musicData = [
    {
        href: "https://www.beatport.com/release/till-the-very-end/4214448",
        src: "TTVEimage.jpg",
        alt: "Till The Very End",
        title: "TILL THE VERY END",
        label: "Monster Tunes, 2023",
    },
    {
        href: "https://www.beatport.com/release/mystery-adoel-smidt-remix/3588760",
        src: "ASMysteryimage.jpg",
        alt: "Mystery feat. Maya",
        title: "MYSTERY feat. Maya\n(Adoel Smidt Remix)",
        label: "Yeiskomp Records, 2022",
    },
    {
        href: "https://ffm.to/zone_6-nv012",
        src: "ZONE6image.jpg",
        alt: "ZONE 6 (Adoel Smidt Remix)",
        title: "ZONE 6 (Adoel Smidt Remix)",
        label: "Neostatics Vision, 2021",
    },
    {
        href: "https://distrokid.com/hyperfollow/nikohoffrn/underground",
        src: "UndergroundIMAGE.png",
        alt: " UNDERGROUND",
        title: " UNDERGROUND",
        label: "Niko Hoffrén Music, 2021",
    },
    {
        href: "https://AlvedaMusic.lnk.to/Singularity",
        src: "SINimage.jpg",
        alt: "SINGULARITY feat. Jasmine Dean",
        title: "SINGULARITY feat. Jasmine Dean",
        label: "Alveda Music, 2021",
    },
    {
        href: "https://soundcloud.com/nikohoffren/gareth-emery-i-saw-your-face-niko-hoffren-remix",
        src: "ISYFimage.png",
        alt: "GARETH EMERY - I SAW YOUR FACE (Niko Hoffrén Remix)",
        title: "GARETH EMERY - I SAW YOUR FACE (Niko Hoffrén Remix)",
        label: "Niko Hoffrén Music, 2021",
    },
];

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

export default function Home() {
    const { language } = useContext(LanguageContext);

    const videos = [
        "https://www.youtube.com/embed/ZXABlRk-PXI",
        "https://www.youtube.com/embed/mA1mjCzKDKU",
        "https://www.youtube.com/embed/Nkt2_k8jz28",
    ];

    return (
        <>
            <div className="py-10" />
            <div className="bg-black w-full flex justify-center items-center">
                <img
                    style={{ width: "900px" }}
                    src="NHlogoTransparent.png"
                    alt=""
                />
            </div>

            <section className="music bg-gray-50 py-12 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {language === "en" ? "Latest tracks" : "Uusimmat kappaleet"}
                </h1>

                <div className="flex flex-wrap justify-center">
                    {musicData.map((item, index) => (
                        <Card
                            key={index}
                            href={item.href}
                            src={item.src}
                            alt={item.alt}
                            title={item.title}
                            label={item.label}
                        />
                    ))}
                </div>
            </section>

            <section className="videos bg-gray-50 py-8 px-4">
                <div className="extra-margin-top" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {language === "en" ? "Latest videos" : "Uusimmat videot"}
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
