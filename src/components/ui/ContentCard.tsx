import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ContentCardSkeleton } from './ContentCardSkeleton';
import natureImage from "../../assets/nature-positive-thumbnail.jpg";
import arrowDown from "../icons/ArrowDown.svg";
import { contentCardContainerStyles } from '../../utils/classStrings';

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface ContentCardProps {
    title: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title }) => {
    const { isLoading, fetchError, posts } = useFetch(BASE_URL, { page: 1 });

    if (isLoading) {
        return <ContentCardSkeleton />;
    }

    return (
        <div className={`${contentCardContainerStyles} relative group`}>
            {/* Image */}
            <img
                className="rounded-xl w-full h-full object-cover filter brightness-75"
                src={natureImage}
                alt={title}
            />

            {/* Blurring Gradient at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent bottom-0 h-full w-full pointer-events-none group-hover:backdrop-blur-md transition-all duration-300 ease-in-out" />

            {/* Text and content */}
            <div className="absolute rounded-xl inset-0 w-full h-full text-start p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur consequatur similique ullam eius id tempora cum, ad deserunt perspiciatis modi ipsum magni, voluptatibus odit cupiditate, iste vitae optio! Deserunt.</p>
            </div>
            
            {/* Down arrow */}
            <img className='absolute bottom-0 right-1/2 py-4 bg-transparent animate-bounce' src={arrowDown} alt="" />
        </div>
    );
};
