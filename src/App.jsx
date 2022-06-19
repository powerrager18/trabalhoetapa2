import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import CSR from './CSR';
import ERT from './ERT';
import LPBD from './LPBD';
import PPO from './PPO';
import Home from './Home';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/CSR" element={<CSR/>}/>
        <Route exact path="/ERT" element={<ERT/>}/>
        <Route exact path="/LPBD" element={<LPBD/>}/>
        <Route exact path="/PPO" element={<PPO/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
