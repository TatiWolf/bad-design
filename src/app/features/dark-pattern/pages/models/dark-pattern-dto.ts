export interface DarkPatternDto {
  id: string;
  title: string;
  titleOnAnotherLanguage:string;
  subtitle: string;
  descriptions: string[];
  keyMechanics:string[];
  keyMechanicsVideo:string;
  consequencesForTheUser:string[]
  alternatives:string[]
  previousDarkPattern:AnotherDarkPatternDto;
  nextDarkPattern:AnotherDarkPatternDto;
}

export interface AnotherDarkPatternDto {
  id: string;
  title: string;
}
