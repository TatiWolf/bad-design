export interface CatalogDto {
  id: number;
  title: string;
  titleAnotherLanguage:string
  slug: string;
  descriptions: string[];
  darkPatternCatalog: CatalogElementDto[];
}

export interface CatalogElementDto {
  id: number;
  title: string;
  titleAnotherLanguage: string;
  description:string
}
