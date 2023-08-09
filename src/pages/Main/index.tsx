import { useState } from 'react';
import { Header } from './components/Header'
import { RecentNews } from './components/RecentNews'
import { Sidebar } from './components/Sidebar'
import { NewsByCategory } from './components/NewsByCategory';

const fakeAPI = [
  {
    id: '1',
    url_image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "O Futuro das Redes Neurais: Avanços Promissores na Inteligência Artificial",
    category: "Tecnologia",
    author: "Sara Carneiro",
    date: "2023-08-03",
  },
  {
    id: '2',
    url_image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "O Futuro das Redes Neurais: Avanços Promissores na Inteligência Artificial",
    category: "Tecnologia",
    author: "Sara Carneiro",
    date: "2023-08-03",
  },
  {
    id: '3',
    url_image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "O Futuro das Redes Neurais: Avanços Promissores na Inteligência Artificial",
    category: "Tecnologia",
    author: "Sara Carneiro",
    date: "2023-08-03",
  },
  {
    id: '4',
    url_image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "O Futuro das Redes Neurais: Avanços Promissores na Inteligência Artificial",
    category: "Tecnologia",
    author: "Sara Carneiro",
    date: "2023-08-03",
  },
]

function Main() {
  const [currentSection, setCurrentSection] = useState<string>('Últimas notícias');

  return (
    <div className='bg-zinc-900 h-screen flex flex-col'>
      <Header />
      <div className='flex h-full'>
        <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        { currentSection === 'Últimas notícias' && <RecentNews news={fakeAPI} /> }
        { !currentSection.endsWith('notícias') && <NewsByCategory news={fakeAPI} category={currentSection} /> }
      </div>
    </div>
  )
}

export default Main