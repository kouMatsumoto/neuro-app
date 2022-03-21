type ThreewiseMapValue<T, U> =
  // first
  | [prev: undefined, curr: T, next: T | undefined]
  // mid
  | [prev: U, curr: T, next: T | undefined]
  // last
  | [prev: U, curr: T, next: undefined];

export type ThreewiseMapProjector<T, U> = (values: ThreewiseMapValue<T, U>, index: number) => U;

export const threewiseMap = <T, U>(fn: ThreewiseMapProjector<T, U>, array: T[]): U[] => {
  const mapped: U[] = [];

  for (let i = 0; i < array.length; i++) {
    const prev = mapped[i - 1];
    const curr = array[i];
    const next = array[i + 1];

    mapped.push(fn([prev, curr, next], i));
  }

  return mapped;
};

export const toLines = (text: string) => text.split('\n');

export const parseIndent = (text: string) => {
  const [, indents, rest] = text.match(/^(\s*)(\S*.*)/i) ?? [];

  return [indents, rest];
};
