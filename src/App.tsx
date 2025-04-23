import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
