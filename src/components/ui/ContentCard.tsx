import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ContentCardSkeleton } from './ContentCardSkeleton';
import arrowDown from "../icons/ArrowDown.svg";
import { _contentCardContainerStyles } from '../../utils/classStrings';

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface ContentCardProps {
    title: string // the title of the card
    subheader?: string // the subheader if you need one
    img?: string // background image url


}

export const ContentCard: React.FC<ContentCardProps> = ({ title, subheader, img }) => {
    const { isLoading, fetchError, posts } = useFetch(BASE_URL, { page: 1 });

    if (isLoading) {
        return <ContentCardSkeleton />;
    }

    return (
        <div className={`${_contentCardContainerStyles} h-96 relative group`}>
            <img
                className="rounded-xl object-cover filter brightness-75 w-full h-full"
                src={img}
            />

            {/* Adjust the gradient for a smoother transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent bottom-0 h-full w-full pointer-events-none group-hover:backdrop-blur-md transition-all duration-300 ease-in-out" />

            <div className="absolute rounded-xl inset-0 w-full h-full text-start p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                {subheader != undefined ? <h3 className="font-semibold">{subheader}</h3> : ""}
                <p className="font-light">You can add your own text in here, make it small or large, tilt it and even change the font family, basically anything, the card will adjust itself</p>
            </div>
            
            <img className='absolute bottom-0 right-1/2 py-4 bg-transparent animate-bounce' src={arrowDown} alt="" />
        </div>
    );
};
