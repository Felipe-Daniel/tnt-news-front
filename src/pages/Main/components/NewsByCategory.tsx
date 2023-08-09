import { AsideNews } from "./AsideNews";
import { NewsPreview } from "./NewsPreview";
import { News } from "./RecentNews";

interface NewsByCategoryProps {
    news: News[];
    category: string;
}

export function NewsByCategory({ news, category }: NewsByCategoryProps) {

    return (
        <section className='w-10/12 px-12 py-8 flex flex-col gap-8'>
            <h1 className='text-white text-2xl'>Sobre <strong className="text-primary text-3xl">{category}</strong></h1>
            <div className='h-full flex justify-between gap-8'>
                <NewsPreview id={news[0].id} url_image={news[0].url_image} title={news[0].title} category={news[0].category} author={news[0].author} date={news[0].date} color={"light-dark"} type={"highlighted"} />
                <AsideNews news={news.filter((_v, index) => index != 0)} />
            </div>
        </section>
    )
}