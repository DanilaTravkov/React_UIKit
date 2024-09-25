import { forwardRef } from "react";
import { disabledButtonStyles, ghostButtonStyles, primaryButtonStyles, secondaryButtonStyles } from "../../utils/classStrings";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  children: string;
  onClick: () => void; // what happens when you click the button
}

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary, secondary, disabled, ghost, children, onClick }, ref) => {
    let buttonStyles = "";

    if (primary) {
      buttonStyles = primaryButtonStyles;
    } else if (secondary) {
      buttonStyles = secondaryButtonStyles;
    } else if (ghost) {
      buttonStyles = ghostButtonStyles;
    }

    if (disabled) {
      buttonStyles += ` ${disabledButtonStyles}`;
    }

    return (
      <button onClick={onClick} ref={ref} className={buttonStyles} disabled={disabled}>
        {children}
      </button>
    );
  }
);
