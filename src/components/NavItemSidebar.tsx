import clsx from "clsx";

interface NavItemSidebarProps {
    currentSection: string;
    setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
    section: string;
}

export function NavItemSidebar({ currentSection, setCurrentSection, section }: NavItemSidebarProps) {

    return (
        <div className={clsx("pl-6 py-2 cursor-pointer", {
            "bg-primary font-bold text-zinc-950 rounded-l-md": currentSection === section
        })} onClick={() => setCurrentSection(section)}>{section}</div>
    )
}