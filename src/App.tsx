import Navbar from "./components/navbar/Navbar";
import Work from "./components/pages/Work";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <Home />
        <Work />
        <Projects />
      </main>
    </div>
  );
}

export default App;
