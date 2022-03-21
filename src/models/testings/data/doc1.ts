const text = `

タイトル
本文の1行目
本文の2行目

`.trim();

export default {
  text,
  data: {
    type: 'doc',
    attrs: {
      title: 'タイトル',
    },
    content: [
      {
        type: 'paragraph',
        content: [{ type: 'text', text: '本文の1行目' }],
      },
      {
        type: 'paragraph',
        content: [{ type: 'text', text: '本文の2行目' }],
      },
    ],
  },
} as const;
