import { NewsPreview } from "./NewsPreview";
import { News } from "./RecentNews";

interface AsideNewsProps {
    news: News[];
}

export function AsideNews({ news }: AsideNewsProps) {

    return (
        <aside className="flex flex-col bg-zinc-950 rounded-md w-1/3 p-4 gap-8">
            {
                news.map(n => (
                    <NewsPreview key={n.id} id={n.id} url_image={n.url_image} title={n.title} category={n.category} author={n.author} date={n.date} color={"darker"} type={"aside"} />
                ))
            }
        </aside>
    )   
}