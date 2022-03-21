import { parser } from './parser';
import { TESTDATA } from './testings';

test('parse simple document', () => {
  expect(parser(TESTDATA.doc1.text)).not.toEqual(TESTDATA.doc1.data);
});
