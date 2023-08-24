import React from "react"

interface SearchBarProps {
    alldata: {
      href: string;
      src: string;
      alt: string;
      title: string;
      label: string;
    }[];
    setSearchResults: React.Dispatch<
      React.SetStateAction<{
        href: string;
        src: string;
        alt: string;
        title: string;
        label: string;
      }[]>
    >;
  }

const SearchBar = ({ alldata, setSearchResults }: SearchBarProps) => {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return setSearchResults(alldata)

        const resultsArray = alldata.filter((item) => item.title.includes((e.target.value.toUpperCase())) || item.label.toLowerCase().includes(e.target.value))
        setSearchResults(resultsArray)
    }
    return (

        <main>
            <div className="flex justify-center mb-8" >

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3" >
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
                < input
                    type="text"
                    placeholder="&nbsp;Search"
                    className="w-1/5 h-6 border-grey-300 focus:outline-none focus:border-grey-600 focus:grey-600  sm:text-sm rounded-4"
                    onChange={handleSearchChange}
                />



            </div>
        </main>
    )
}

export default SearchBar;