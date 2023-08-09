import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    action: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ text, action }: ButtonProps) {

    return (
        <button type='button' className='px-4 py-2 bg-primary rounded-md' onClick={action}>
            <span className='text-zinc-900 text-base font-bold'>{text}</span>
        </button>
    )
}