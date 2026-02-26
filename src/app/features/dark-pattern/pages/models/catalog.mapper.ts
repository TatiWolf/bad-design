import {CatalogDto} from './catalog-dto';
import {CatalogModel} from './catalog.model';
import {isCatalogType} from './catalog.type';

export function mapCatalogDtoToCatalogModel(
  dto: CatalogDto
): CatalogModel {

  if (!isCatalogType(dto.slug)) {
    throw new Error(`Invalid dark pattern type: ${dto.slug}`);
  }

  return new CatalogModel(
    dto.id,
    dto.title,
    dto.title_another_language,
    dto.slug,
    dto.descriptions,
  );
}
