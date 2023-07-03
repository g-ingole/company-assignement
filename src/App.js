import './App.css';
import Header from './components/Header/Header';
import BodyContent from './components/BodyContent/BodyContent'
import Colorbody from './components/ColorBody/Colorbody';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GotoTop from './components/Header/GotoTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Colorbody />

      <BodyContent />
      <Contact />
      <GotoTop />
      <Footer />
    </div>
  );
}

export default App;
