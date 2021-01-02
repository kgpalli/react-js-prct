import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Toggle1 from './components/Toggle1';
import Greeting from './components/Greeting';
import Welcome_c from './components/Welcome_c';

function App() {
  return (
    <div className="App">
      {/* <Greeting isLoggedIn={true} /> */}
      
     <Welcome_c />
     <Toggle1 />
    </div>
  );
}

export default App;
