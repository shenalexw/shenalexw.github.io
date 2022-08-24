import Navbar from './components/navbar/Navbar';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Loading from './components/pages/Loading';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 3800);
  }, []);

  return (
    <div>
      {loading ? (<Loading />) :
        (
          <main>
            <Navbar />
            <Home />
            <Work />
            <Projects />
            <Contact />
          </main>
        )
      }
    </div>
  );

        }

export default App;
