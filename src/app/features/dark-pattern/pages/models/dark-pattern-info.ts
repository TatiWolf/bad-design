import {CatalogId} from './catalog.type';

export class DarkPatternInfo {
  id: string;
  title: string;
  titleOnAnotherLanguage: string;
  subtitle: string;
  catalog: CatalogId
  descriptions: string[];
  keyMechanics: string[];
  keyMechanicsVideo: string;
  consequencesForTheUser: string[]
  alternativesFirst: string[];
  alternativesSecond: string[];
  previousDarkPattern: AnotherDarkPattern;
  nextDarkPattern: AnotherDarkPattern;

  constructor(
    id: string,
    title: string,
    titleOnAnotherLanguage: string,
    subtitle: string,
    descriptions: string[],
    keyMechanics: string[],
    keyMechanicsVideo: string,
    consequencesForTheUser: string[],
    alternatives: string[],
    previousDarkPattern: AnotherDarkPattern,
    nextDarkPattern: AnotherDarkPattern,
    catalog: CatalogId
  ) {
    this.id = id;
    this.title = title;
    this.titleOnAnotherLanguage = titleOnAnotherLanguage;
    this.subtitle = subtitle;
    this.descriptions = descriptions;
    this.keyMechanics = keyMechanics;
    this.keyMechanicsVideo = keyMechanicsVideo;
    this.consequencesForTheUser = consequencesForTheUser;

    const {first, second} = this.splitAlternatives(alternatives);
    this.alternativesFirst = first;
    this.alternativesSecond = second;
    this.previousDarkPattern = previousDarkPattern;
    this.nextDarkPattern = nextDarkPattern;
    this.catalog = catalog
  }


  private splitAlternatives(alternatives: string[]): {
    first: string[];
    second: string[];
  } {
    if (alternatives.length <= 3) {
      return {
        first: alternatives,
        second: []
      };
    }

    const middle = Math.ceil(alternatives.length / 2);

    return {
      first: alternatives.slice(0, middle),
      second: alternatives.slice(middle)
    };
  }
}

export class AnotherDarkPattern {
  id: string;
  title: string;

  constructor(id: string, title: string,) {
    this.id = id;
    this.title = title;
  }
}
