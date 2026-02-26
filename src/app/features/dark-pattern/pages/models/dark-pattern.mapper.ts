import {DarkPatternInfoDto} from './dark-pattern-info-dto';
import {AnotherDarkPattern, DarkPatternInfo} from './dark-pattern-info';
import {DarkPattern} from './catalog.model';
import {DarkPatternDto} from './catalog-dto';

export function mapDarkPatternDtoToDarkPattern(
  dto: DarkPatternInfoDto
): DarkPatternInfo {

  return new DarkPatternInfo(
    dto.id,
      dto.title,
      dto.title_another_language_for_list,
      dto.subtitle,
      dto.descriptions,
      dto.key_mechanics,
      dto.key_mechanics_video,
      dto.consequences_for_the_user,
      dto.alternatives,
    new AnotherDarkPattern(dto.previousDarkPattern.id, dto.previousDarkPattern.title),
    new AnotherDarkPattern(dto.nextDarkPattern.id, dto.nextDarkPattern.title),
    dto.catalog
  );
}

export function mapDarkPatternCatalogDtoToDarkPatternCatalog (dto: DarkPatternDto[]): DarkPattern[] {

  return dto.map(elementDto => new DarkPattern(
    elementDto.id,
    elementDto.title,
    elementDto.title_another_language_for_list,
    elementDto.description_for_list,
  ))

}
