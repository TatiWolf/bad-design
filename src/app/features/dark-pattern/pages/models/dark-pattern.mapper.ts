import {DarkPatternDto} from './dark-pattern-dto';
import {AnotherDarkPattern, DarkPattern} from './dark-pattern';

export function mapDarkPatternDtoToDarkPattern(
  dto: DarkPatternDto
): DarkPattern {

  return new DarkPattern(
    dto.id,
      dto.title,
      dto.titleOnAnotherLanguage,
      dto.subtitle,
      dto.descriptions,
      dto.keyMechanics,
      dto.keyMechanicsVideo,
      dto.consequencesForTheUser,
      dto.alternatives,
    new AnotherDarkPattern(dto.previousDarkPattern.id, dto.previousDarkPattern.title),
    new AnotherDarkPattern(dto.nextDarkPattern.id, dto.nextDarkPattern.title),
  );
}
