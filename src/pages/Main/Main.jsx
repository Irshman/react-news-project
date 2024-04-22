import styles from './styles.module.css'
import { getNews } from "../../api/apiNews.ts";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import { PAGE_SIZE } from "../../constants/constants.ts";
import LatestNews from "../../components/LatestNews/LatestNews.tsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.tsx";

const Main = () => {
    return <main className={styles.main}>
        <LatestNews />

        <NewsByFilters />
    </main>;
}

export default Main;