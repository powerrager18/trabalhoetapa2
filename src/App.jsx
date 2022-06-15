import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
