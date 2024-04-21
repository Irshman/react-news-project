import styles from './styles.module.css'
import BannersList from "../BannersList/BannersList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {NewsApiResponse} from "../../interfaces";
import {getLatestNews} from "../../api/apiNews.ts";
const LatestNews = () => {
    const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)

    return <section className={styles.banners}>
        <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>;
}

export default LatestNews;