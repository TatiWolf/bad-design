export const CATALOG_TYPES = [
  { id: 1, slug: 'nagging', title: 'Навязчивость' },
  { id: 2, slug: 'obstruction', title: 'Препятствия' },
  { id: 3, slug: 'sneaking', title: 'Сокрытие' },
  { id: 4, slug: 'interface-interference', title: 'Манипуляция интерфейсом' },
  { id: 5, slug: 'forced-action', title: 'Принуждение к действию' }
] as const;

export type CatalogType = typeof CATALOG_TYPES[number]['slug'];
export type CatalogId = typeof CATALOG_TYPES[number]['id'];

export function isCatalogType(
  value: string | null
): value is CatalogType {
  return CATALOG_TYPES.some(p => p.slug === value);
}
export function getCatalogById(
  id: CatalogId
) {
  return CATALOG_TYPES.find(p => p.id === id) ?? null;
}

export function getCatalogBySlug(
  slug: CatalogType
) {
  return CATALOG_TYPES.find(p => p.slug === slug) ?? null;
}
export function isCatalogId(
  value: number
): value is CatalogId {
  return CATALOG_TYPES.some(p => p.id === value);
}
