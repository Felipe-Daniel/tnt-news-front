import { NavItemSidebar } from "../../../components/NavItemSidebar";

interface SidebarProps {
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

export function Sidebar({ currentSection, setCurrentSection }: SidebarProps) {

    return (
        <div className="w-2/12 bg-zinc-800 flex flex-col gap-4 pl-10 py-6 text-zinc-400 text-lg">
            <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Últimas notícias'} />
            <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Todas as notícias'} />
            <div className="bg-zinc-700 rounded-l-md text-zinc-300">
                <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Tecnologia'} />
                <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Esporte'} />
                <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Arte'} />
                <NavItemSidebar currentSection={currentSection} setCurrentSection={setCurrentSection} section={'Outros'} />
            </div>
        </div>
    )
}