import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <TopBar />
      <main className=" bg-[#f2f2f2] pt-20 pb-24" >
        <div className="w-full max-w-7xl flex flex-col mx-auto sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </div>  
      </main>
      <BottomNav />
    </>
  );
}

export default App;
