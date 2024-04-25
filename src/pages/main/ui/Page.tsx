import styles from './styles.module.css'
import NewsByFilters from "@/pages/main/ui/NewsByFilters/NewsByFilters.tsx";
import LatestNews from "@/pages/main/ui/LatestNews/LatestNews.tsx";
const MainPage = () => {
    return <main className={styles.main}>
        <LatestNews />

        <NewsByFilters />
    </main>;
}

export default MainPage;