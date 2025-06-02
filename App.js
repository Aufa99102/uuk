import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import NextPage from './nextpage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
