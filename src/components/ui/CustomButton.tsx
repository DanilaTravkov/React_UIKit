import { disabledButtonStyles, ghostButtonStyles, primaryButtonStyles, secondaryButtonStyles } from "../../utils/classStrings";

interface ButtonProps {
    primary?: boolean
    secondary?: boolean
    disabled?: boolean
    ghost?: boolean
    children: string
}

export const CustomButton: React.FC<ButtonProps> = ({primary, secondary, disabled, ghost, children}) => {
    
    let buttonStyles = "";

    if (primary) {
        buttonStyles = primaryButtonStyles;
    } else if (secondary) {
        buttonStyles = secondaryButtonStyles;
    } else if (ghost) {
        buttonStyles = ghostButtonStyles;
    }

    // Append disabled styles if the button is disabled, while keeping other styles intact
    if (disabled) {
        buttonStyles += ` ${disabledButtonStyles}`;
    }

    return (
        <button 
            className={buttonStyles}
            disabled={disabled ? true : false}
        >
            {children}
        </button>
    );
};

