import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav'
import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <TopBar />
      <main className="w-full bg-[#f2f2f2]">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <BottomNav />
    </>
  );
}

export default App
