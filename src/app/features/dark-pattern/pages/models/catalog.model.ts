import {DarkPatternType} from './dark-pattern.type';

export class CatalogModel {
  id: number;
  title: string;
  titleAnotherLanguage:string
  slug: DarkPatternType;
  descriptions: string[];
  darkPatternCatalog: DarkPatternCatalog[]

  constructor(id: number, title: string,titleAnotherLanguage:string, slug: DarkPatternType, descriptions: string[], darkPatternCatalog: DarkPatternCatalog[]) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.darkPatternCatalog = darkPatternCatalog;
    this.descriptions = descriptions;
    this.titleAnotherLanguage = titleAnotherLanguage;
  }
}

export class DarkPatternCatalog {
  id: number;
  title: string;
  titleAnotherLanguage: string;
  description: string

  constructor(id: number, title: string, titleAnotherLanguage: string, description: string) {
    this.id = id;
    this.title = title;
    this.titleAnotherLanguage = titleAnotherLanguage;
    this.description = description;
  }
}
