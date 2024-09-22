import React from 'react'
import { primaryTextInputStyles } from '../../utils/classStrings'

export const CustomSearch: React.FC = ({ }) => {



    return (
        <div className="flex flex-col items-start m-4">
            <label htmlFor="input"></label>
            <input
            name="input"
            className={primaryTextInputStyles}
            type='text'
            placeholder={"Search..."}
            />
      </div>
    )
}
