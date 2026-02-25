export const DARK_PATTERNS = [
  { id: 1, slug: 'nagging', title: 'Навязчивость' },
  { id: 2, slug: 'obstruction', title: 'Препятствия' },
  { id: 3, slug: 'sneaking', title: 'Сокрытие' },
  { id: 4, slug: 'interface-interference', title: 'Манипуляция интерфейсом' },
  { id: 5, slug: 'forced-action', title: 'Принуждение к действию' }
] as const;

export type DarkPatternType = typeof DARK_PATTERNS[number]['slug'];
export type DarkPatternId = typeof DARK_PATTERNS[number]['id'];

export function isDarkPatternType(
  value: string | null
): value is DarkPatternType {
  return DARK_PATTERNS.some(p => p.slug === value);
}
export function getDarkPatternById(
  id: DarkPatternId
) {
  return DARK_PATTERNS.find(p => p.id === id) ?? null;
}

export function getDarkPatternBySlug(
  slug: DarkPatternType
) {
  return DARK_PATTERNS.find(p => p.slug === slug) ?? null;
}
export function isDarkPatternId(
  value: number
): value is DarkPatternId {
  return DARK_PATTERNS.some(p => p.id === value);
}
