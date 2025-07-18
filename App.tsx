import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pattern-dots">
          <Hero />
        </div>
        <div className="pattern-gradient">
          <About />
        </div>
        <div className="pattern-dots">
          <Portfolio />
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}