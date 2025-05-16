import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogHome from './pages/BlogHome';
import FullPostView from './pages/FullPostView';
import './App.css';

// Add Google Fonts
const fontLinkElement = document.createElement('link');
fontLinkElement.rel = 'stylesheet';
fontLinkElement.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap';
document.head.appendChild(fontLinkElement);

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'white', minHeight: '100vh', fontFamily: "'Open Sans', sans-serif" }}>
        <Header />
        <div className="container" style={{ backgroundColor: 'white' }}>
          <Routes>
            <Route path="/" element={<BlogHome />} />
            <Route path="/post/:postSlug" element={<FullPostView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
