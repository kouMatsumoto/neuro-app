import { parseText } from './parser';

test('parse simple document', () => {
  const text = `

タイトル
本文の1行目
  本文の2行目
    本文の3行目

`.trim();

  expect(parseText(text)).toEqual({
    attrs: {
      contentLength: 4,
      title: 'タイトル',
    },
    content: [
      {
        attrs: {
          indent: 0,
          lineNumber: 0,
          title: 'タイトル',
        },
        text: 'タイトル',
        type: 'title',
      },
      {
        attrs: {
          indent: 0,
          lineNumber: 1,
        },
        text: '本文の1行目',
        type: 'text',
      },
      {
        attrs: {
          indent: 2,
          lineNumber: 2,
        },
        text: '本文の2行目',
        type: 'text',
      },
      {
        attrs: {
          indent: 4,
          isLast: true,
          lineNumber: 3,
        },
        text: '本文の3行目',
        type: 'text',
      },
    ],
  });
});
