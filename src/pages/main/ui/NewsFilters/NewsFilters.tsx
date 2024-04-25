import styles from './styles.module.css'
import {IFilters} from "src/shared/interfaces";
import Slider from "@/features/slider/ui/Slider/Slider.tsx";
import Categories from "@/features/category/ui/Categories/Categories.tsx";
import {setFilters} from "@/entities/news/model/newsSlice.ts";
import Search from "@/features/search/ui/Search/Search.tsx";
import {useAppDispatch} from "@/app/appStore.ts";
import {useGetCategoriesQuery} from "@/entities/category/api/categoriesApi.ts";

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