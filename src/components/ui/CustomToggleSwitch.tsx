import React from 'react'
import { _toggleSwitchContainerStyles, _toggleSwitchElementStyles } from '../../utils/classStrings'

interface ToggleSwitchProps {
    isSwitched?: boolean
    setIsSwitched?: (state: React.ComponentState) => void
}

export const CustomToggleSwitch: React.FC<ToggleSwitchProps> = ({ isSwitched, setIsSwitched}) => {

    const handleClick = () => {
        if (setIsSwitched) {
            setIsSwitched(!isSwitched)
            // other logic
        }
    }

    return (
        <div className={`${_toggleSwitchContainerStyles} ${isSwitched ? "bg-zinc-500/10" : "bg-green-900"}`} onClick={handleClick}>
            <span className={`${_toggleSwitchElementStyles} ${isSwitched ? "" : "translate-x-full"}`}></span>
        </div>
    )
}
