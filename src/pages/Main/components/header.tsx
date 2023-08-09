import logo from '../../../assets/tnt_logo.png';
import { MagnifyingGlass, User, SignOut } from '@phosphor-icons/react'
import { useNavigate } from 'react-router';
import { Button } from '../../../components/Button';

interface HeaderProps {
    user?: {
        email: string;
        nome: string;
        admin: boolean;
    };
}

export function Header({ user }: HeaderProps) {
    const navigate = useNavigate()

    return (
        <header className='flex justify-between bg-zinc-900 px-10 py-4 border-b border-b-black/50'>
            <div className='flex items-center gap-5'>
                <img src={logo} alt="Logo TNT News" className='h-10' />
                <span className='text-white text-lg'>Todas as notícias titânicas estão aqui!</span>
            </div>

            <div className='flex items-center gap-8'>
                <div className='relative'>
                    <MagnifyingGlass size={18} className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
                    <input type="text" placeholder='Pesquisar notícia...' className='w-80 pl-9 py-2 bg-zinc-800 rounded-md text-white' />
                </div>
                {
                    !user ?
                    <Button text='ENTRAR' action={() => navigate('/auth')} />
                    :
                    <div className='flex items-center gap-8'>
                        {user.admin && <Button text='Nova notícia' action={() => navigate('/create-news')} />}
                        <div className='flex gap-2'>
                            <User size={24} weight='fill' className='text-zinc-950' />
                            <p className='text-white'>Olá, <strong>{user.nome.split(' ')[0]}</strong>!</p>
                        </div>
                        <button type='button' title='Sair' onClick={() => {}}>
                            <SignOut size={24} className='text-red-600' />
                        </button>
                    </div>
                }
                
            </div>
        </header>
    )
}