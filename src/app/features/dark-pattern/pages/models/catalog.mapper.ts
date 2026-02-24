import {CatalogDto} from './catalog-dto';
import {CatalogModel, DarkPatternCatalog} from './catalog.model';
import {isDarkPatternType} from './dark-pattern.type';

export function mapCatalogDtoToModel(dto: CatalogDto): CatalogModel {
  if (!isDarkPatternType(dto.slug)) {
    throw new Error(`Invalid dark pattern type: ${dto.slug}`);
  }

  return new CatalogModel(
    dto.id,
    dto.title.toLowerCase(),
    dto.titleAnotherLanguage,
    dto.slug,
    dto.descriptions.map(el=>el.toLowerCase()),
    dto.darkPatternCatalog.map(el=>new DarkPatternCatalog(el.id,el.title,el.titleAnotherLanguage,el.description))
  );
}
