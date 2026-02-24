export const DARK_PATTERN_TYPES = [
  'nagging',
  'obstruction',
  'sneaking',
  'interface-interference',
  'forced-action'
] as const;

export type DarkPatternType =
  typeof DARK_PATTERN_TYPES[number];


export function isDarkPatternType(value: string | null): value is DarkPatternType {
  return DARK_PATTERN_TYPES.includes(value as DarkPatternType);
}
