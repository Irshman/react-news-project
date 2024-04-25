import styles from './styles.module.css'
import {useGetLatestNewsQuery} from "@/entities/news/api/newsApi.ts";
import {NewsList} from "@/widgets/news";


const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null)

    return <section className={styles.banners}>
        <NewsList
            type="banner"
            direction="row"
            news={data && data.news}
            isLoading={isLoading}
        />
    </section>;
}

export default LatestNews;