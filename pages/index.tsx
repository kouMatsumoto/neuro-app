import type { NextPage } from 'next';
import { Document } from '../src/models';
import { Editor, EditorContainer, Header, MainContainer } from '../src/ui';

const Home: NextPage = () => {
  const onEditorSave = (data: Document) => {
    console.log('editor', data);
  };

  return (
    <>
      <Header />
      <MainContainer>
        This is Editor
        <EditorContainer>
          <Editor onSave={onEditorSave} />
        </EditorContainer>
      </MainContainer>
    </>
  );
};

export default Home;
