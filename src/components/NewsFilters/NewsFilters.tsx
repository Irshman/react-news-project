import styles from './styles.module.css'
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import Slider from "../Slider/Slider.tsx";
import {useGetCategoriesQuery} from "../../store/services/newsApi.ts";
import {IFilters} from "../../interfaces";
import {setFilters} from "../../store/slices/newsSlice.ts";
import {useAppDispatch} from "../../store";

interface Props {
    filters: IFilters;
}
const NewsFilters = ({ filters }: Props) => {
    const { data } = useGetCategoriesQuery(null)
    const dispatch = useAppDispatch()

    return <div className={styles.filters}>
        { data ? (
            <Slider>
                <Categories
                    categories={data.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) =>
                        dispatch(setFilters({ key: 'category', value: category }))
                }
                />
            </Slider>) : null}

        <Search keywords={filters.keywords} setKeywords={(keywords) =>
            dispatch(setFilters({ key: 'keywords', value: keywords }))
        } />
    </div>;
}

export default NewsFilters;