interface ArticleCardProps {
    title: string,
    link: string,
    linkText: string,
    items: Card[]
}

interface Card {
    title: string,
    description: string,
    date: string,
    image: string
}

export {type ArticleCardProps}