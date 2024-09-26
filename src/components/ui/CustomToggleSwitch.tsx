import React, { useEffect } from 'react'

interface ToggleSwitchProps {
    isSwitched?: boolean
    setIsSwitched?: (state: React.ComponentState) => void
}

export const CustomToggleSwitch: React.FC<ToggleSwitchProps> = ({isSwitched, setIsSwitched}) => {

    const handleClick = () => {
        if (setIsSwitched) {
            setIsSwitched(!isSwitched)
            // other logic
        }
    }

    return (
        <div className='relative w-12 h-6 rounded-full m-4 border-2 border-slate-500' onClick={handleClick}>
            <span className={`transition-transform absolute ${isSwitched ? "" : "translate-x-full"} w-1/2 h-full rounded-full bg-slate-500`}></span>
        </div>
    )
}
