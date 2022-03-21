import type { NextPage } from 'next';
import { Container, Editor, Header } from '../src/ui';

const Home: NextPage = () => {
  const onEditorSave = (text: string) => {
    alert(text);
  };

  return (
    <>
      <Header />
      <Container>
        This is Editor
        <Editor onSave={onEditorSave} />
      </Container>
    </>
  );
};

export default Home;
