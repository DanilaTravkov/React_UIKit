import React, { forwardRef } from 'react';
import { disabledButtonStyles, ghostButtonStyles, primaryButtonStyles, secondaryButtonStyles } from '../../utils/classStrings';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  type: "button" | "submit" | "reset"
  children: string;
  onClick?: () => void;
  toastAction?: (toastRef: React.RefObject<any>) => void;
}

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary, secondary, disabled, ghost, children, type, onClick, toastAction }, ref) => {
    let buttonStyles = '';

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

    const handleClick = () => {
      onClick();
      if (toastAction) {
        toastAction();
      }
    };

    return (
      <button type={type} onClick={handleClick} ref={ref} className={buttonStyles} disabled={disabled}>
        {children}
      </button>
    );
  }
);
