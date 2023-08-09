import { AsideNews } from "./AsideNews";
import { NewsPreview } from "./NewsPreview";

interface RecentNewsProps {
    news: News[];
}

export interface News {
    id: string;
    url_image: string;
    title: string;
    category: string;
    author: string;
    date: string;
}

export function RecentNews({ news }: RecentNewsProps) {

    return (
        <section className='w-10/12 px-12 py-8 flex flex-col gap-8'>
            <h1 className='text-white font-bold text-3xl'>Últimas notícias</h1>
            <div className='h-full flex justify-between gap-8'>
                <NewsPreview id={news[0].id} url_image={news[0].url_image} title={news[0].title} category={news[0].category} author={news[0].author} date={news[0].date} color={"light-dark"} type={"highlighted"} />
                <AsideNews news={news.filter((_v, index) => index != 0)} />
            </div>
        </section>
    )
}