import React from 'react'

enum UserButtonSize { // enum of possible button sizes
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}

interface UserButtonProps {
    userImg: string // the link to the image
    size?: UserButtonSize // size of the button
}

export const CustomUserButton: React.FC<UserButtonProps> = ({userImg, size="md"}) => {

    return (
        <div className='w-14 h-14 rounded-full border-2 border-slate-500 hover:border-slate-400 transition m-4'>
            <img className='w-full h-full rounded-full object-cover' src={userImg} alt="user" />
        </div>
    )
}
