import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Maincontent from './component/Maincontent';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <div style={{width:"1000px",height:"530px",boxShadow:"0 0 10px black",margin:"70px auto"}}><Navbar />
      <Maincontent />
      <Footer />
    </div>
    </div>
  );
}

export default App;
