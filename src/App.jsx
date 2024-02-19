import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Snippets from './components/Snippets';
import Access from './components/Access';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Logos from './components/Logos';
import CTA from './components/CTA';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Snippets />
        <Features />
        <Access />
        <Workflow />
        <Logos />
        <CTA />
      </Main>
      <Footer />
    </>
  );
}
