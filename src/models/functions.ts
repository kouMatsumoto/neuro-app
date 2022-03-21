type ThreewiseMapValue<T, U> =
  // first
  | [previousValue: undefined, currentValue: T, nextValue: T | undefined]
  // mid
  | [previousValue: U, currentValue: T, nextValue: T | undefined]
  // last
  | [previousValue: U, currentValue: T, nextValue: undefined];

export const threewiseMap = <T, U>(fn: (values: ThreewiseMapValue<T, U>, index: number) => U, array: T[]): U[] => {
  const mapped: U[] = [];

  for (let i = 0; i < array.length; i++) {
    const prev = mapped[i - 1];
    const curr = array[i];
    const next = array[i + 1];

    mapped.push(fn([prev, curr, next], i));
  }

  return mapped;
};
