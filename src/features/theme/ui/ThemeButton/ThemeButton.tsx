import styles from './styles.module.css'
import {themeIcons} from "@/shared/assets";
import {useTheme} from "@/app/providers/ThemeProvider.tsx";
const ThemeButton = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <img className={styles.icon} src={isDark ? themeIcons.light : themeIcons.dark} width={30} alt='icon' onClick={toggleTheme} />
    );
};

export default ThemeButton;