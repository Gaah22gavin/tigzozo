import './App.css';
import './components/main.css';
import {Header, Banner, AboutUs, Services,Clients,Instagram, Footer} from './components';
import './fonts/fonts.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <AboutUs/>
      <Services/>
      <Clients/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
