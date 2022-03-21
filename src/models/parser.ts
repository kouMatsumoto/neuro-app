import { parseIndent, threewiseMap, ThreewiseMapProjector, toLines } from './functions';
import { Document, Node } from './types';

export const parseTextToDocument = (text: string): Document => {
  const topLevelAttrs = new Map<string, string | number>();

  const parse: ThreewiseMapProjector<string, Node> = ([prev, curr, next], index) => {
    const [indent, text] = parseIndent(curr);
    const isTitleLine = prev === undefined;
    const isLastLine = next === undefined;
    const lineNumber = index;

    if (isTitleLine) {
      topLevelAttrs.set('title', curr);
      return {
        type: 'title',
        attrs: { title: text, indent: 0, lineNumber },
        text,
      };
    }

    if (isLastLine) {
      return {
        type: 'text',
        attrs: { isLast: true, indent: indent.length, lineNumber },
        text,
      };
    }

    // parse line
    return {
      type: 'text',
      attrs: { indent: indent.length, lineNumber },
      text,
    };
  };

  const content = threewiseMap(parse, toLines(text));
  return {
    doc: {
      type: 'doc',
      attrs: {
        ...Object.fromEntries(topLevelAttrs),
        contentLength: content.length,
      },
      content,
    },
  };
};
