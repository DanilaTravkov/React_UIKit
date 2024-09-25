import React, { useEffect, useRef } from 'react';
import { CustomButton } from './CustomButton';

interface ModalProps {
  invoked: boolean;
  setInvoked: (prevState: React.ComponentState) => void;
}

export const CustomModal: React.FC<ModalProps> = ({ invoked, setInvoked }) => {

    const modalRef = useRef<HTMLDivElement | null>(null);
    const acceptButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            if (acceptButtonRef.current) {
                console.log("Clicked outside of modal")
                if (acceptButtonRef.current && !acceptButtonRef.current.className.includes("animate-pulse")) {
                    acceptButtonRef.current.className += ' animate-bounce';
                }                
              }
        }
    }

    useEffect(() => {
    if (invoked) {
        document.body.style.overflow = 'hidden';
        document.addEventListener("click", handleClickOutside)
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener("click", handleClickOutside)
    };
    }, [invoked]);

  return (
    <div
        className={`${
        invoked ? 'opacity-100' : 'opacity-0'
        } transition-all duration-300 flex items-center justify-center backdrop-blur-sm fixed inset-0 w-screen h-screen z-50`}
    >
      <div ref={modalRef} className='max-w-lg bg-slate-800 rounded-lg p-8'>
        <h1 className='text-2xl font-bold'>Content modal</h1>
        <h3 className='text-lg font-normal'>Subheader</h3>
        <p className='font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore saepe magnam dolorum quasi, quis doloremque sed obcaecati, non ut adipisci minus ipsum esse quia ab?</p>
        <div className='flex justify-between py-2'>
            <CustomButton onClick={() => setInvoked((prev: boolean) => !prev)} secondary>Reject</CustomButton>
            <CustomButton onClick={() => setInvoked((prev: boolean) => !prev)} ref={acceptButtonRef} primary>Accept</CustomButton>
        </div>
      </div>
    </div>
  );
};
