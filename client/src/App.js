import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import QuestionnairePage from './pages/QuestionnairePage.js';
import Login from './pages/Login.js';
import About from './pages/About.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path='/questionnaires/:id' element={<QuestionnairePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
