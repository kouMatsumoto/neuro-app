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
  attrs: Attributes;
  content?: never;
  text: string;
}

export interface FragmentNode {
  type: string;
  attrs: Attributes;
  content: Node[];
  text?: never;
}

export type Attributes = {
  title?: string;
};
