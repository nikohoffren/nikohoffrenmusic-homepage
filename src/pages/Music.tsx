import { useContext, useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
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
    {
        href: "https://distrokid.com/hyperfollow/nikohoffrn/encryption-original-mix",
        src: "EncIMAGE.jpg",
        alt: "ENCRYPTION",
        title: "ENCRYPTION",
        label: "Niko Hoffrén Music, 2021",
    },
    {
        href: "https://fanlink.to/sdr480",
        src: "SVimage.jpg",
        alt: "STATIC VOID [Including remixes by Elgfrothi & Naki]",
        title: "STATIC VOID [Including remixes by Elgfrothi & Naki]",
        label: "Sundance Recordings, 2021",
    },
    {
        href: "https://www.beatport.com/track/moonchild/15455460",
        src: "MC_REMIXimage.jpg",
        alt: "MOONCHILD [Physical Vibes Remix]",
        title: "MOONCHILD [Physical Vibes Remix]",
        label: "Trancespired Recordings, 2021",
    },
    {
        href: "https://neostatics.fanlink.to/devonian_sea",
        src: "DSimage.jpg",
        alt: "DEVONIAN SEA",
        title: "DEVONIAN SEA",
        label: "Neostatics Sounds, 2021",
    },
    {
        href: "https://fanlink.to/sdr458",
        src: "WITCimage.jpg",
        alt: "WAITING IN THE CLOUDS",
        title: "WAITING IN THE CLOUDS",
        label: "Sundance Recordings, 2021",
    },
    {
        href: "https://alvedamusic.com/release/nightmare/",
        src: "Nimage.jpg",
        alt: "NIGHTMARE feat. Elisa Mammoliti",
        title: "NIGHTMARE feat. Elisa Mammoliti",
        label: "Alveda Music, 2021",
    },
    {
        href: "https://www.beatport.com/release/trance-of-eternity/3282788?fbclid=IwAR2O1kyytx8hamNY3PiXxOH5O5FYFo6VE0cweEaKD8L2ZIJdCicaSy4zl5c",
        src: "TOEimage.jpg",
        alt: "TRANCE OF ETERNITY",
        title: "TRANCE OF ETERNITY",
        label: "Liquid Emotion Recordings (Trance All Stars), 2021",
    },
    {
        href: "https://www.beatport.com/release/morceau/3230029",
        src: "MORimage.jpg",
        alt: "MORCEAU",
        title: "MORCEAU",
        label: "#WeAreTrance (Joyride Music), 2021",
    },
    {
        href: "https://www.beatport.com/release/breathe-my-energy/3230985",
        src: "BMEimage.jpg",
        alt: "BREATHE MY ENERGY",
        title: "BREATHE MY ENERGY",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/restless-dreams/3218268",
        src: "RDimage.jpg",
        alt: "RESTLESS DREAMS feat. Yin",
        title: "RESTLESS DREAMS feat. Yin",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/naqada/3164955",
        src: "NAQimage.jpg",
        alt: "NAQADA",
        title: "NAQADA",
        label: "Neostatics Sounds, 2020",
    },
    {
        href: "https://www.beatport.com/release/silent-tears/3194452?fbclid=IwAR3faLqdUgnWl9IQay7bkB2XdI0IKswZ1G-FqpYgYMeCEKVBWhJkLUHQ7ew",
        src: "STimage.jpg",
        alt: "SILENT TEARS",
        title: "SILENT TEARS",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/moonchild/3169933",
        src: "MCimage.jpg",
        alt: "MOONCHILD",
        title: "MOONCHILD",
        label: "Trancespired Recordings, 2020",
    },
    {
        href: "https://www.beatport.com/release/sweet-darkness/3183034",
        src: "SDimage.jpg",
        alt: "SWEET DARKNESS feat. Elania",
        title: "SWEET DARKNESS feat. Elania",
        label: "Alveda Music, 2020",
    },
    {
        href: "https://www.beatport.com/release/the-scar/3163919",
        src: "TSimage.jpg",
        alt: "THE SCAR",
        title: "THE SCAR",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/sunrise/3163888",
        src: "SUNimage.jpg",
        alt: "SUNRISE feat. Elania",
        title: "SUNRISE feat. Elania",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/today/3144798",
        src: "TODAYimage.jpg",
        alt: "TODAY",
        title: "TODAY",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/aurora/3137059",
        src: "Aimage.jpg",
        alt: "AURORA",
        title: "AURORA",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/release/flying-in-the-blue-sky/3132399",
        src: "FITBSimage.jpg",
        alt: "FLYING IN THE BLUE SKY",
        title: "FLYING IN THE BLUE SKY",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/track/laomedeia/14072922",
        src: "LAOimage.jpg",
        alt: "LAOMEDEIA",
        title: "LAOMEDEIA",
        label: "Alveda Music, 2020",
    },
    {
        href: "https://www.beatport.com/track/the-wolf/14027008",
        src: "WOLFimage.jpg",
        alt: "THE WOLF",
        title: "THE WOLF",
        label: "Alveda Music, 2020",
    },
    {
        href: "https://www.beatport.com/track/mystery/14110476",
        src: "MYSimage.jpg",
        alt: "Mystery feat. Maya",
        title: "MYSTERY feat. Maya",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://open.spotify.com/album/63L88wiGqcWuUEDhUB6ssJ?si=XnHM1z_fS-SD5iTUQ7hG_w&dl_branch=1",
        src: "NEPimage.jpg",
        alt: "NEPTUNE",
        title: "NEPTUNE",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://open.spotify.com/album/2VTtflFrNPGZRpdbpRh3qM?si=fUV4Tg8dQ_2n336CeOQqTQ&dl_branch=1",
        src: "SIGimage.jpg",
        alt: "SIGMA",
        title: "SIGMA",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://www.beatport.com/track/she/13844513",
        src: "SHEimage.jpg",
        alt: "SHE",
        title: "SHE",
        label: "Alveda Music, 2020",
    },
    {
        href: "https://www.beatport.com/track/leave-me-again/13907261",
        src: "LMAimage.jpg",
        alt: "LEAVE ME AGAIN",
        title: "LEAVE ME AGAIN",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://www.beatport.com/track/easy-to-love/13755739",
        src: "ETLimage.jpg",
        alt: "EASY TO LOVE",
        title: "EASY TO LOVE",
        label: "Yeiskomp Records, 2020",
    },
    {
        href: "https://soundcloud.com/nikohoffren/gareth-emery-feat-annabel-youll-be-ok-niko-hoffren-remix",
        src: "YBOimage.jpg",
        alt: "YOU'LL BE OKAY feat. Annabel (Niko Hoffrén Remix)",
        title: "YOU'LL BE OKAY feat. Annabel (Niko Hoffrén Remix)",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://www.beatport.com/track/dark-places/13327536",
        src: "DARKPimage.jpg",
        alt: "DARK PLACES",
        title: "DARK PLACES",
        label: "Alveda Music, 2020",
    },
    {
        href: "https://open.spotify.com/album/3fUjr1Gs1YMedPH3Bfs5q1?si=nEKLQdDtSXmIUgEAjX7wgw&dl_branch=1",
        src: "MOMimage.jpg",
        alt: "MOMENTS",
        title: "MOMENTS",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://open.spotify.com/album/7MGQdUhu18W3oSWKs4hVMC?si=ewiIOMa_RtqFZDFiOVRCBQ&dl_branch=1",
        src: "PSAimage.jpg",
        alt: "PSAMATHE",
        title: "PSAMATHE",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://open.spotify.com/album/30BMsgYwBT8uK3xKweUoDz?si=g0UeNhw-R6eA7IoVhZqDCg&dl_branch=1",
        src: "THAimage.jpg",
        alt: "THALASSA",
        title: "THALASSA",
        label: "Niko Hoffrén Music, 2020",
    },
    {
        href: "https://open.spotify.com/album/1Pcm7WF6BwO8Wldrj9Nx9u?si=IiNSnwvRSrGfbkx1p7eaFQ&dl_branch=1",
        src: "GALimage.jpg",
        alt: "GALATEA",
        title: "GALATEA",
        label: "Niko Hoffrén Music, 2019",
    },
];

export default function Music() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <div className="py-10" />
            <section className="music bg-gray-50 py-8 px-4">
                <div className="extra-margin-top" />
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {language === "en" ? "MUSIC" : "MUSIIKKI"}
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
        </>
    );
}
