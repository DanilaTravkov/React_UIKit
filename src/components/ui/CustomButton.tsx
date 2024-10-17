import React, { forwardRef } from 'react';
import { _disabledButtonStyles, _ghostButtonStyles, _primaryButtonStyles, _secondaryButtonStyles } from '../../utils/classStrings';

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
      buttonStyles = _primaryButtonStyles;
    } else if (secondary) {
      buttonStyles = _secondaryButtonStyles;
    } else if (ghost) {
      buttonStyles = _ghostButtonStyles;
    }

    if (disabled) {
      buttonStyles += ` ${_disabledButtonStyles}`;
    }

    const handleClick = () => {
      onClick();
      if (toastAction) {
        toastAction();
      }
    };

    return (
      <button type={type} onClick={handleClick} ref={ref} className={`${buttonStyles} m-4 mt-2`} disabled={disabled}>
        {children}
      </button>
    );
  }
);
