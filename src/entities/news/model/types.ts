import {CategoriesType} from "@/entities/category";

export interface INews {
    author: string
    category: CategoriesType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}