import React, { useRef, useState } from 'react'
import { primaryTextInputStyles } from '../../utils/classStrings'
import searchIcon from "../icons/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"

interface ReturnDataItem {
    label: string
    link: string
    img?: string
}

export const CustomSearch: React.FC = ({ }) => {

    const inputRef = useRef<HTMLInputElement>();

    const [searchString, setSearchString] = useState<string>("");
    const [matchedResults, setMatchedResults] = useState<ReturnDataItem[]>([]);
    const [hideMatchedResults, setHideMatchedResults] = useState<boolean>(false);
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHideMatchedResults(true)
        setSearchString(e.target.value);
        const matchedResults = testReturnData.filter(item => item.label.includes(e.target.value))
        setMatchedResults(matchedResults)
    }

    const handleOnBlur = () => {
        if (searchString === "") {
            setHideMatchedResults(false)
        }
    }


    const testReturnData: ReturnDataItem[]  = [
        { label: "apple", link: "", img: "" },
        { label: "carrot", link: "", img: "" },
        { label: "orange", link: "", img: "" },
        { label: "grape", link: "", img: "" },
        { label: "tomato", link: "", img: "" },
        { label: "pickle", link: "", img: "" },
        { label: "dragonfruit", link: "", img: "" },
        { label: "pickle", link: "", img: "" }
    ]

    return (
        <div className="flex flex-col m-4 relative">
            <input
                ref={inputRef}
                name="input"
                className={`${primaryTextInputStyles} px-4`}
                type='text'
                placeholder={"Search..."}
                onChange={handleSearchStringChange}
                onBlur={handleOnBlur}
                value={searchString}
            />
            <img onClick={() => {inputRef.current?.focus(); setInputFocused(true);}} className={`absolute p-3 right-0 z-20 animate-pulse ${inputFocused && "animate-none"}}`} src={searchIcon} alt="search" />
            <p className='p-4 pl-0 pb-0 font-light'>{(searchString !== "" && matchedResults.length <= 0) && "No results"}</p>
            {
              (searchString !== "" && matchedResults.length <= 0) || hideMatchedResults && <ul className={`px-2 border-2 rounded-lg border-slate-500 w-full overflow-y-auto`}>
                {searchString != undefined && matchedResults.map((item, index) => {
                    return (
                        <li className='font-light p-2 py-3' key={index}>
                            {item.label}
                        </li>
                        )
                    })}
                </ul>
            }
      </div>
    )
}
