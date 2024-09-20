import React from 'react';
import { gridItemStyles } from '../../utils/classStrings';

interface GridProps {
    rows: number;
    columns: number;
    title?: string;
}

export const CustomGrid: React.FC<GridProps> = ({ rows, columns, title }) => {

    const gridTemplateRows = `repeat(${rows}, 1fr)`;
    const gridTemplateColumns = `repeat(${columns}, 1fr)`;

    return (
        <div className="flex flex-col h-screen m-2">
            {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}

            <div
                className="grid flex-grow rounded-2xl"  
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
                            {`Item ${index + 1}`}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
