import HeaderMain from './components/header'
import { Sidebar } from './components/sidebar'

function Main() {

  return (
    <div className='bg-zinc-900 h-screen flex flex-col'>
      <HeaderMain />
      <div className='flex h-full'>
        <Sidebar />
        <section className='w-10/12'>
          
        </section>
      </div>
    </div>
  )
}

export default Main