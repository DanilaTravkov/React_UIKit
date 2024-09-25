import React, { useState } from 'react';
import arrowDown from "../icons/ArrowDown.svg";

interface DropDownMenuItem {
    label: string;
    link: string;
}

interface DropDownMenuProps {
    header: string;
    items: DropDownMenuItem[];
}

export const CustomDropDownMenu: React.FC<DropDownMenuProps> = ({ items, header }) => {
    const [visible, setVisible] = useState<boolean>(false);

    // Function to handle showing and hiding the dropdown
    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    return (
        <div
            className="text-center m-4 text-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <header className={`transition-all p-3 rounded-lg border-2 flex justify-between items-center border-slate-500 cursor-pointer text-start`}>
                {header} <img className={`flex justify-center ${visible ? "rotate-180 duration-300" : "rotate-0 duration-300"}`} src={arrowDown} alt="arrow down" />
            </header>
            <ul
                className={`rounded-lg py-4 mt-4 border-2 border-slate-500 duration-300 ease-in-out overflow-hidden ${
                    visible ? 'opacity-100 max-h-96 duration-500' : 'opacity-0 max-h-0'
                }`}
                style={{ transitionProperty: 'opacity, max-height' }}
            >
                {items.map((item, index) => (
                    <div className="px-2">
                        <a href={item.link}>
                            <li
                            key={index}
                            className={`p-3 px-4 rounded-full text-start hover:bg-zinc-500/10 font-light`}
                            >
                                {item.label}
                            </li>
                        </a>
                    </div>
                ))}
            </ul>
        </div>
    );
};
