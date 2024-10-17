import React, { useEffect, useRef } from 'react';
import { CustomButton } from './CustomButton';

interface ModalProps {
  invoked: boolean;
  setInvoked: (prevState: boolean) => void;
}

export const CustomModal: React.FC<ModalProps> = ({ invoked, setInvoked }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const acceptButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      if (acceptButtonRef.current) {
        console.log("Clicked outside of modal");
        if (!acceptButtonRef.current.className.includes("animate-pulse border-white duration-500")) {
          acceptButtonRef.current.className += ' animate-pulse border-white duration-500';
        }
      }
    }
  };

  const handleCloseModal = () => {
    if (acceptButtonRef.current) {
      const classList = acceptButtonRef.current.className.split(" ")
      acceptButtonRef.current.className = classList.filter(cls => cls !== "animate-pulse" && cls !== "border-white" && cls !== "duration-500").join(" ")
    }
    setInvoked(!invoked);
  }

  useEffect(() => {
    if (invoked) {
      document.body.style.overflow = 'hidden'
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.body.style.overflow = 'auto'
    }

    // Clean up event listener when modal is closed or component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = 'auto'
    };
  }, [invoked])

  return (
    <div
      className={`${
        invoked ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-all duration-300 flex items-center justify-center backdrop-blur-sm fixed inset-0 w-screen h-screen z-30`}
    >
      <div ref={modalRef} className='max-w-lg bg-slate-800/50 rounded-lg p-8'>
        <h1 className='text-2xl font-bold'>Content modal</h1>
        <h3 className='text-lg font-normal'>Subheader</h3>
        <p className='font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore saepe magnam dolorum quasi, quis doloremque sed obcaecati, non ut adipisci minus ipsum esse quia ab?
        </p>
        <div className='flex justify-between py-2'>
          <CustomButton type={"button"} onClick={handleCloseModal} secondary>
            Reject
          </CustomButton>
          <CustomButton type={"button"} onClick={handleCloseModal} ref={acceptButtonRef} primary>
            Accept
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
