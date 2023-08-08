import dayjs from '../../../utils/dayjs'
import { ClockCountdown } from '@phosphor-icons/react'

interface NewsPreviewProps {
    url_image: string;
    title: string;
    category: string;
    author: string;
    date: string;
}

export function BigNewsPreviewLightDark({ url_image, title, category, author, date }: NewsPreviewProps) {
    
    return (
        <div className={`bg-[url('${url_image}')] w-[50rem] h-[40rem] bg-cover bg-center rounded-xl`}>
            <div className={`bg-gradient-to-t from-zinc-900 to-zinc-900/20 w-full h-full p-8 flex flex-col justify-between`}>
                <div className="w-44 py-1 bg-primary rounded-full flex justify-center">
                    <span className='text-white text-lg'>{category}</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-3xl"><span>{title.split(':')[0]}: <br /> {title.split(':')[1]}</span></h1>
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

export function NewsPreviewLightDark({ url_image, title, category, author, date }: NewsPreviewProps) {
    
    return (
        <div className={`bg-[url('${url_image}')] w-[40rem] h-[24rem] bg-cover bg-center rounded-xl`}>
            <div className={`bg-gradient-to-t from-zinc-900 to-zinc-900/20 w-full h-full p-8 flex flex-col justify-between`}>
                <div className="w-32 py-1 bg-primary rounded-full flex justify-center">
                    <span className='text-white text-base'>{category}</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-2xl"><span>{title.split(':')[0]}: <br /> {title.split(':')[1]}</span></h1>
                    <div className="flex items-center gap-2">
                        <p className='text-white text-lg'>{author}</p>
                        <p className='text-white'>|</p>
                        <div className='flex items-center gap-2'>
                            <ClockCountdown size={28} className='text-primary' />
                            <p className='text-white text-lg'>{dayjs().to(dayjs(date))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function NewsPreviewDarker({ url_image, title, category, author, date }: NewsPreviewProps) {
    
    return (
        <div className={`bg-[url('${url_image}')] w-[40rem] h-[24rem] bg-cover bg-center rounded-xl`}>
            <div className={`bg-gradient-to-t from-zinc-950 to-zinc-950/20 w-full h-full p-8 flex flex-col justify-between`}>
                <div className="w-32 py-1 bg-primary rounded-full flex justify-center">
                    <span className='text-white text-base'>{category}</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-2xl"><span>{title.split(':')[0]}: <br /> {title.split(':')[1]}</span></h1>
                    <div className="flex items-center gap-2">
                        <p className='text-white text-lg'>{author}</p>
                        <p className='text-white'>|</p>
                        <div className='flex items-center gap-2'>
                            <ClockCountdown size={28} className='text-primary' />
                            <p className='text-white text-lg'>{dayjs().to(dayjs(date))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}