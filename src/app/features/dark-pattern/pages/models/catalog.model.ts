import {CatalogType} from './catalog.type';

export class CatalogModel {
  id: number;
  title: string;
  titleAnotherLanguage:string
  slug: CatalogType;
  descriptions: string[];

  constructor(id: number, title: string, titleAnotherLanguage:string, slug: CatalogType, descriptions: string[], ) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.descriptions = descriptions;
    this.titleAnotherLanguage = titleAnotherLanguage;
  }
}

export class DarkPattern {
  id: number;
  title: string;
  titleAnotherLanguageForList: string;
  descriptionForList: string

  constructor(id: number, title: string, titleAnotherLanguage: string, description: string) {
    this.id = id;
    this.title = title;
    this.titleAnotherLanguageForList = titleAnotherLanguage;
    this.descriptionForList = description;
  }
}
