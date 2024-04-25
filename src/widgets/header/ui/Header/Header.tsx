import styles from './styles.module.css'
import {useTheme} from "@/app/providers/ThemeProvider.tsx";
import {formatDate} from "@/shared/helpers/formatDate.ts";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton.tsx";

const Header = () => {
    const { isDark } = useTheme();

    return <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.info}>
            <h1 className={styles.title}>News React</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </div>

        <ThemeButton />
       </header>;
}

export default Header;