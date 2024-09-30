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
        <div className={`transition-colors shadow-slate-500 relative w-12 h-6 rounded-full m-4 border-2 border-slate-500 ${isSwitched ? "bg-zinc-500/10" : "bg-green-900"}`} onClick={handleClick}>
            <span className={`transition-transform absolute shadow-sm bg-white shadow-black ${isSwitched ? "" : "translate-x-full"} w-1/2 h-full rounded-full`}></span>
        </div>
    )
}
