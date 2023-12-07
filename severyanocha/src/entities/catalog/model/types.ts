interface CatalogSection {
    label: string,
    link: string
}
interface CatalogStore {
    sections: CatalogSection[]
}

export {type CatalogSection, type CatalogStore}