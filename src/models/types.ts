// represent Intermediate data between neuro and html
export interface Document {
  doc: {
    type: 'doc';
    attrs: Attributes;
    content: Node[];
  };
}

export type Node = TextNode | FragmentNode;

export interface TextNode {
  type: string;
  content: never;
  text: string;
  attrs?: never; // TODO consider integrate https://prosemirror.net/docs/guide/#doc
}

export interface FragmentNode {
  type: string;
  content: Node[];
  text?: never;
  attrs?: never; // TODO consider integrate https://prosemirror.net/docs/guide/#doc
}

export type Attributes = {
  title: string;
};
