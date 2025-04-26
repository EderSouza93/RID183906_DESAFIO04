import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <About />
      </main>
      <Footer />
    </>
  );
}
