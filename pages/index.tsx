import type { NextPage } from 'next';
import React from 'react';
import { Document } from '../src/models';
import { Editor, EditorContainer, Header, MainContainer } from '../src/ui';
import { NoteList } from '../src/ui/NoteList';

const Home: NextPage = () => {
  const [notes, setNotes] = React.useState<Document[]>([]);

  const onEditorSave = (data: Document) => {
    console.log('editor', data);
    setNotes([data, ...notes]);
  };

  return (
    <>
      <Header />
      <MainContainer>
        This is Editor
        <EditorContainer>
          <Editor onSave={onEditorSave} />
        </EditorContainer>
        <NoteList data={notes} />
      </MainContainer>
    </>
  );
};

export default Home;
