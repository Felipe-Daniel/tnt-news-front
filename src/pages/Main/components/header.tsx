import logo from '../../../assets/tnt_logo.png';
import { MagnifyingGlass } from '@phosphor-icons/react'

function HeaderMain() {

    return (
        <header className='flex justify-between bg-zinc-900 px-10 py-4 border-b border-b-black/50'>
            <div className='flex items-center gap-5'>
                <img src={logo} alt="Logo TNT News" className='h-10' />
                <span className='text-white text-lg'>Todas as notícias titânicas estão aqui!</span>
            </div>

            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <MagnifyingGlass size={18} className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
                    <input type="text" placeholder='Pesquisar notícia...' className='w-80 pl-9 py-2 bg-zinc-800 rounded-md text-white' />
                </div>
                <button type="button" className='px-12 py-2 bg-primary rounded-md'>
                    <span className='text-zinc-900'>ENTRAR</span>
                </button>
            </div>
        </header>
    )
}

export default HeaderMain