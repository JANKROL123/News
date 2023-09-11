export default interface Article {
    article_id: string;
    category: string[];
    content: string;
    country: string[];
    creator: string | null;
    description: string;
    image_url: string | null
    keywords: string[] | null
    language: string;
    link: string;
    pubDate: string;
    source_id: string;
    source_priority: number;
    title: string;
    video_url: string | null;
}