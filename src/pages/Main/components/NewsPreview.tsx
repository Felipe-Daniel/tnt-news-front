import dayjs from '../../../utils/dayjs'
import clsx from 'clsx'
import { ClockCountdown } from '@phosphor-icons/react'

interface NewsPreviewProps {
    url_image: string;
    title: string;
    category: string;
    author: string;
    date: string;
    color: "light-dark" | "darker";
    size: "big" | "normal" | "small";
}

export function NewsPreview({ url_image, title, category, author, date, color='light-dark', size='normal' }: NewsPreviewProps) {
    
    return (
        <div
            className={clsx('bg-cover bg-center rounded-xl', {
                'w-[44rem] h-[44rem]': size === 'big',
                'w-[30rem] h-[12rem]': size === 'small'
            })}
            style={{
                backgroundImage: `url("${url_image}")`,
            }}
        >
            <div className={clsx('bg-gradient-to-t w-full h-full p-8 flex flex-col justify-between', {
                'from-zinc-900 to-zinc-900/20': color === 'light-dark',
                'from-zinc-950 to-zinc-950/20': color === 'darker',
            })}>
                <div className="w-44 py-1 bg-primary rounded-full flex justify-center">
                    <span className='text-white text-lg'>{category}</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className={clsx('text-white', {
                        'text-3xl': size === 'big',
                        'text-lg': size === 'small',
                    })}><span>{title.split(':')[0]}: <br /> {title.split(':')[1]}</span></h1>
                    <div className="flex items-center gap-2">
                        <p className='text-white text-xl'>{author}</p>
                        <p className='text-white'>|</p>
                        <div className='flex items-center gap-2'>
                            <ClockCountdown size={28} className='text-primary' />
                            <p className='text-white text-xl'>{dayjs().to(dayjs(date))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}