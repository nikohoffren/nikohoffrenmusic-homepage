import { useContext, useState, useEffect } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import { LanguageContext } from "src/LanguageContext";
import SearchBar from "./SearchBar";
import musicData from "./Musicdata";

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



export default function Music() {
    
    const [searchResults, setSearchResults] = useState<{
        href: string;
        src: string;
        alt: string;
        title: string;
        label: string;
      }[]>([]); 
      
    const { language } = useContext(LanguageContext);
    const results: CardProps[] =searchResults;
    useEffect(()=>{
        setSearchResults(musicData)
    },[])
    return (
        <>
            <div className="py-10" />
            <section className="music bg-gray-50 py-8 px-4">
                <div className="extra-margin-top" >
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        {language === "en" ? "MUSIC" : "MUSIIKKI"}
                    </h1>
                    <SearchBar alldata={musicData} setSearchResults={setSearchResults}/>
                </div>
                <div className="flex flex-wrap justify-center">
                    {results.map((item, index) => (
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
