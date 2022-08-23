import Navbar from './components/navbar/Navbar';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
