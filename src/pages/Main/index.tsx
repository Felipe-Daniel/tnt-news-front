import HeaderMain from './components/header'
import { Sidebar } from './components/sidebar'

function Main() {

  return (
    <div className='bg-zinc-900 h-screen flex flex-col'>
      <HeaderMain />
      <div className='flex h-full'>
        <Sidebar />
        
      </div>
    </div>
  )
}

export default Main