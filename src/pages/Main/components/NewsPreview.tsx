import dayjs from '../../../utils/dayjs'
import clsx from 'clsx'
import { ClockCountdown } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'

interface NewsPreviewProps {
    id: string;
    url_image: string;
    title: string;
    category: string;
    author: string;
    date: string;
    color: "light-dark" | "darker";
    type: "highlighted" | "aside" | "list";
}

export function NewsPreview({ id, url_image, title, category, author, date, color='light-dark', type }: NewsPreviewProps) {
    const navigate = useNavigate()

    return (
        <div
            className={clsx('cursor-pointer overflow-hidden relative rounded-t-xl group hover:ring-1 hover:rounded-xl hover:ring-primary hover:ring-offset-4 hover:ring-offset-zinc-900', {
                'w-2/3': type === 'highlighted',
                'w-full h-full': type === 'aside'
            })}
            onClick={() => navigate(`/news/${id}`)}
        >
            <div
                className='bg-cover bg-center w-full h-full absolute top-0 left-0 group-hover:scale-110 transition-all'
                style={{
                    backgroundImage: `url("${url_image}")`,
                }}
            />
            <div
                className={clsx('bg-gradient-to-t w-full h-full p-8 flex flex-col justify-between absolute', {
                    'from-zinc-900 to-zinc-900/20': color === 'light-dark',
                    'from-zinc-950 to-zinc-950/20': color === 'darker',
                })}
            >
                <div>
                    <div className="px-6 py-1 bg-primary rounded-full inline-block">
                        <span className={clsx({
                            'text-white text-xl': type === 'highlighted',
                            'text-white text-md': type === 'aside',
                        })}>{category}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className={clsx('text-white', {
                        'text-4xl': type === 'highlighted',
                        'text-lg': type === 'aside',
                    })}><span>{title.split(':')[0]}: <br /> {title.split(':')[1]}</span></h1>
                    <div className="flex items-center gap-2">
                        <p className={clsx('text-white', {
                            'text-xl': type === 'highlighted',
                            'text-md': type === 'aside',
                        })}>{author}</p>
                        <p className='text-white'>|</p>
                        <div className='flex items-center gap-2'>
                            <ClockCountdown size={clsx({
                                28: type === 'highlighted',
                                18: type === 'aside',
                            })} className='text-primary' />
                            <p className={clsx('text-white', {
                                'text-xl': type === 'highlighted',
                                'text-md': type === 'aside',
                            })}>{dayjs().to(dayjs(date))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}