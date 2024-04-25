import styles from './styles.module.css'
import {useDebounce} from "@/shared/hooks/useDebounce.ts";
import {useGetNewsQuery} from "@/entities/news/api/newsApi.ts";
import NewsFilters from "@/widgets/news/ui/NewsFilters/NewsFilters.tsx";
import {useAppSelector} from "@/app/appStore.ts";
import {useGetCategoriesQuery} from "@/entities/category/api/categoriesApi.ts";
import NewsListWithPagination from "@/pages/main/ui/NewsListWithPagination/NewsListWithPagination.tsx";

const NewsByFilters = () => {
    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })

    const { data } = useGetCategoriesQuery(null)

    return <section className={styles.section}>
        <NewsFilters filters={filters} categories={data?.categories || []} />

        <NewsListWithPagination isLoading={isLoading} news={news} filters={filters} />
    </section>;
}

export default NewsByFilters;