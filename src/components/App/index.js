// == Import
import './styles.scss';
import Header from 'src/components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Home" element={<Home />} exact />
    </Routes>
  </div>
);

// == Export
export default App;
