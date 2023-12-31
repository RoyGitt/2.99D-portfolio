import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Work from "./components/Work";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/StarsCanvas";
import Parallax from "./components/Parallax";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <StarsCanvas />
        <div className="relative z-0 ">
          <Hero />
        </div>
        <Parallax text="What i do?" />
        <div>
          <About />
          <Experience />
          <Tech />
          <Parallax text="What i did?" />
          <Work />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
