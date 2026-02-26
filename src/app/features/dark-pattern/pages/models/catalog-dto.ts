export interface CatalogDto {
  id: number;
  title: string;
  title_another_language:string
  slug: string;
  descriptions: string[];
}

export interface DarkPatternDto {
  id: number;
  title: string;
  title_another_language_for_list: string;
  description_for_list:string
}
