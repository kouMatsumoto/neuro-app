import type { NextPage } from 'next';
import { Editor, EditorContainer, Header, MainContainer } from '../src/ui';

const Home: NextPage = () => {
  const onEditorSave = (text: string) => {
    alert(text);
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
