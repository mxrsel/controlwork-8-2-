export interface CategoriesProps {
    title: string;
    id: string;
}

export interface QuotesInfo {
    category: string;
    author: string;
    quote: string
}

export interface Quote extends QuotesInfo {
    id: string;
}

export interface QuotesObject {
    [id: string]: QuotesInfo;
}