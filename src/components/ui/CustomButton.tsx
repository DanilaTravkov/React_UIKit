import { disabledButtonStyles, ghostButtonStyles, primaryButtonStyles, secondaryButtonStyles } from "../../utils/classStrings";

interface ButtonProps {
    primary?: boolean // Primary buttons stand out, primary classes will be applied
    secondary?: boolean // Secondary classes will be applied
    disabled?: boolean // Disabeld buttons are inactive
    ghost?: boolean // Ghost buttons are a lot less visible
    children: string // Text inside the button
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

