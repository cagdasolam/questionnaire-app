import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import QuestionnairePage from './pages/QuestionnairePage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/questionnaires/:id' element={<QuestionnairePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
