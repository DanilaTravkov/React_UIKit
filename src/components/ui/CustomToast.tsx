// ToastManager.tsx
import React, { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';

interface ToastManagerHandle {
  showToast: (message: string) => void
}

interface ToastProps {
  id: number
  message: string
  index: number
  onRemove: () => void
  alignCenter: boolean
  stackingOpacity: number // Pass stacking opacity as a prop
  isBeingRemoved?: boolean // Track if this toast is being removed (for 4th toast removal animation)
}

interface ToastManagerProps {
  alignCenter?: boolean
}

const Toast: React.FC<ToastProps> = ({
  message,
  index,
  onRemove,
  alignCenter,
  stackingOpacity,
  isBeingRemoved = false,
}) => {
  const [visible, setVisible] = useState(true) // Control visibility for entry animation and removal
  const [entryOpacity, setEntryOpacity] = useState(0) // Initial opacity state for smooth appearance

  useEffect(() => {
    // Trigger the smooth entry animation for the new toast
    setTimeout(() => {
      setEntryOpacity(1) // Opacity transition from 0 to 1 for the initial appearance
      setVisible(true)
    }, 50) // Small delay to trigger the initial transition

    // Set timer to hide the toast after 3 seconds
    const timerId = setTimeout(() => {
      setVisible(false) // Trigger the removal transition
    }, 3000) // toast lives for 3 seconds

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  // Remove the toast from the DOM after the fade-out transition completes
  useEffect(() => {
    if (!visible) {
      const fadeOutTimer = setTimeout(() => {
        onRemove(); // Remove from the DOM after the fade-out transition completes
      }, 300); // Wait for the fade-out transition to complete (duration-300 in this case)
      return () => clearTimeout(fadeOutTimer)
    }
  }, [visible, onRemove])

  // Remove the toast after the transition for the oldest toast (if being removed due to 4th toast addition)
  useEffect(() => {
    if (isBeingRemoved) {
      setVisible(false); // Trigger fade-out
      const removalTimer = setTimeout(() => {
        onRemove(); // Remove from the DOM after animation completes
      }, 300); // Wait for the animation to complete before removing
      return () => clearTimeout(removalTimer)
    }
  }, [isBeingRemoved, onRemove])

  // Calculate styles for positioning and opacity
  const finalOpacity = entryOpacity * stackingOpacity // Combine entry and stacking opacity for final result
  const positionStyle = {
    bottom: isBeingRemoved ? `${index * 60 + 20}px` : `${index * 60 + 20}px`, // Move up when being removed
    opacity: isBeingRemoved || !visible ? 0 : finalOpacity, // Fade out when being removed or on self-removal
    right: alignCenter ? 'auto' : '20px', // If `alignCenter` is false, position to the right
    left: alignCenter ? '50%' : 'auto', // If `alignCenter` is true, position at center
    transform: `translateX(${alignCenter ? '-50%' : '0'})`, // Apply translation transformation
    transition: `opacity 300ms ease-in-out, bottom 300ms ease-in-out, transform 300ms ease-in-out`, // Smooth transitions for opacity and position
  }

  return (
    <div
      className={`fixed z-40 p-4 w-1/4 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={positionStyle}
    >
      {message}
    </div>
  )
}

export const ToastManager = forwardRef<ToastManagerHandle, ToastManagerProps>(({ alignCenter = false }, ref) => {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([])
  const [stackingOpacities, setStackingOpacities] = useState<number[]>([]) // Track the stacking opacity for each toast
  const [removingToastId, setRemovingToastId] = useState<number | null>(null) // Track the ID of the toast being removed (for 4th toast animation)
  const nextId = useRef(0)
  const [toastsCount, setToastsCount] = useState(0);// Count total toasts to ensure max 3 visible toasts

  // Expose `showToast` method via the ref
  useImperativeHandle(ref, () => ({
    showToast(message: string) {
      setToasts((prevToasts) => {
        const newToast = { id: nextId.current++, message }
        let updatedToasts = [...prevToasts, newToast] // Add the new toast at the end of the array

        // If more than 3 visible toasts then mark the oldest one for removal
        if (updatedToasts.length > 3 && !removingToastId) {
          const oldestToast = updatedToasts[0] // Get the oldest toast
          setRemovingToastId(oldestToast.id) // Mark this toast for removal animation

          // Start animation to remove oldest toast
          setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== oldestToast.id))
            setRemovingToastId(null); // Reset removingToastId after removal
          }, 300); // Wait for the animation to complete before removing
        }

        // Calculate new stacking opacities immediately when a new toast is added
        const newOpacities = updatedToasts.map((_, index) => 1 - index * 0.25)
        setStackingOpacities(newOpacities);// Update stacking opacities

        // Update toast count to limit to 3 visible toasts
        setToastsCount((prev) => prev + 1)

        return updatedToasts.slice(0, 4) // Restrict toasts array to 4 items max to prevent overflow
      })
    },
  }))

  // const removeToast = (id: number) => {
  //   setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  //   if (id === removingToastId) setRemovingToastId(null); // Reset removingToastId after removal
  // };

  const containerClassName = alignCenter
    ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md'
    : 'fixed bottom-4 right-4 z-50 w-full max-w-md'

  return (
    <div className={containerClassName}>
      {toasts.map((toast, index, array) => (
        <Toast
          key={toast.id}
          message={toast.message}
          index={array.length - 1 - index} // Newest toast at the bottom
          alignCenter={alignCenter}
          stackingOpacity={stackingOpacities[array.length - 1 - index] || 1} // Apply the correct stacking opacity
          isBeingRemoved={toast.id === removingToastId} // Mark toast for removal animation if it's the oldest one being removed
          onRemove={() => {
            setToasts((prev) => prev.filter((t) => t.id !== toast.id));
          }}
        />
      ))}
    </div>
  )
})

