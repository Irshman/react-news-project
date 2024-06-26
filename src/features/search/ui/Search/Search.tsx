import styles from './styles.module.css'
import {useTheme} from "@/app/providers/ThemeProvider.tsx";

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}
const Search = ({ keywords, setKeywords }: Props) => {
    const { isDark } = useTheme();
    return (
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
            <input
                onChange={(e) => setKeywords(e.target.value)}
                type="text"
                value={keywords}
                className={styles.input}
                placeholder="Search..."
            />
        </div>
    );
}

export default Search;