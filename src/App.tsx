// App.tsx – no BrowserRouter, no Routes
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;