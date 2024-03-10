import styles from './styles.module.css'
import NewsItem from "../NewsItem/NewsItem.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
const NewsList = ({ news }) => {
    if (!news || !Array.isArray(news)) {
        return null; // або інша логіка обробки відсутності новин
    }

    return <ul className={styles.list}>
        {news.map(item => {
            return <NewsItem key={item.id} item={item} />
        })}
    </ul>;
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;