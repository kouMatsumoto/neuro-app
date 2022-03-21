import { threewiseMap } from './functions';

test('threewiseMap', () => {
  const project = ([prev, curr, next]: [number | undefined, number, number | undefined]) => (prev ?? 1) * curr * (next ?? 1);

  expect(threewiseMap(project, [])).toEqual([]);
  expect(threewiseMap(project, [1])).toEqual([1]);
  expect(threewiseMap(project, [1, 2])).toEqual([2, 4]);
  expect(threewiseMap(project, [1, 2, 3])).toEqual([2, 12, 36]);
});
