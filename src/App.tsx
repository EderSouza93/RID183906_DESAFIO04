import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Projects } from './components/Projects/Projects';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
