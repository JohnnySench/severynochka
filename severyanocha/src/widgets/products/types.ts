interface ProductCardProps {
    title: string,
    link: string,
    linkText: string,
    items: Card[]
}

interface Card {
    nameProduct: string,
    img: string,
    discount: number,
    priceDiscount: string | null,
    price: string,
    rating: number,
    id: number,
    like: boolean
}


export {type ProductCardProps, type Card}