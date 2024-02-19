import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Snippets from './components/Snippets';
import Access from './components/Access';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Snippets />
        <Access />
      </Main>
      <Footer />
    </>
  );
}
