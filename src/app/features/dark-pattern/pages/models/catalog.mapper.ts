import {CatalogDto} from './catalog-dto';
import {CatalogModel, DarkPatternCatalog} from './catalog.model';
import {isDarkPatternType} from './dark-pattern.type';

export function mapCatalogDtoToModel(
  dto: CatalogDto
): CatalogModel {

  if (!isDarkPatternType(dto.slug)) {
    throw new Error(`Invalid dark pattern type: ${dto.slug}`);
  }

  const mappedList = dto.darkPatternCatalog.map(el =>
    new DarkPatternCatalog(
      el.id,
      el.title,
      el.titleAnotherLanguage,
      el.description
    )
  );

  return new CatalogModel(
    dto.id,
    dto.title,
    dto.titleAnotherLanguage,
    dto.slug,
    dto.descriptions,
    mappedList
  );
}
