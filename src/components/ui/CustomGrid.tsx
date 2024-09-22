import React from 'react';
import { gridItemStyles } from '../../utils/classStrings';

interface GridProps {
    rows: number; // number of rows that will be created
    columns: number; // number of colums that will be created
    title?: string; // title above the grid, if you need one
}

export const CustomGrid: React.FC<GridProps> = ({ rows, columns, title }) => {

    const gridTemplateRows = `repeat(${rows}, 1fr)`;
    const gridTemplateColumns = `repeat(${columns}, 1fr)`;

    return (
        <div className="flex flex-col h-screen m-4">
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}

            <div
                className="grid flex-grow gap-2 rounded-2xl"  
                style={{
                    gridTemplateRows,
                    gridTemplateColumns,
                }}
            >
                {
                    Array.from({ length: rows * columns }).map((_, index) => (
                        <div
                            key={index}
                            className={gridItemStyles}
                        >
                            <p className='cursor-default'>{`Item ${index + 1}`}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
