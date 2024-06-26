import styles from './styles.module.css'
import withSkeleton from "@/shared/hocs/withSkeleton.tsx";
import {INews} from "@/entities/news";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard.tsx";
import {ReactNode} from "react";

interface Props {
    news?: INews[];
    type?: 'banner' | "item";
    direction?: 'row' | 'column';
    viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
    return <ul className={`${ type === "item" ? styles.items : styles.banners} `}>
        {news?.map(item => {
            return <NewsCard viewNewsSlot={viewNewsSlot} key={item.id} item={item} type={type} />
        })}
    </ul>;
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)

export default NewsListWithSkeleton;