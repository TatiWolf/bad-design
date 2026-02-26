import {CatalogId} from './catalog.type';

export interface DarkPatternInfoDto {
  id: string;
  title: string;
  title_another_language_for_list:string;
  section:string
  subtitle: string;
  descriptions: string[];
  key_mechanics:string[];
  key_mechanics_video:string;
  consequences_for_the_user:string[]
  alternatives:string[]
  previousDarkPattern:AnotherDarkPatternDto;
  nextDarkPattern:AnotherDarkPatternDto;
  catalog: CatalogId
}

export interface AnotherDarkPatternDto {
  id: string;
  title: string;
}
