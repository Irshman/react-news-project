import styles from './styles.module.css'
import BannersList from "../BannersList/BannersList.jsx";
const LatestNews = ({ banners, isLoading}) => {
    return <section className={styles.banners}>
        <BannersList banners={banners} isLoading={isLoading} />
    </section>;
}

export default LatestNews;