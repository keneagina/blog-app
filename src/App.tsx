import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogHome from './pages/blog-home';
import FullPostView from './pages/full-post-view';

const App: React.FC = () => {
  // Add Google Fonts
  useEffect(() => {
    const fontLinkElement = document.createElement('link');
    fontLinkElement.rel = 'stylesheet';
    fontLinkElement.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap';
    document.head.appendChild(fontLinkElement);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(fontLinkElement);
    };
  }, []);

  return (
    <Router>
      <div className="bg-white min-h-screen font-['Open_Sans',sans-serif]">
        <Header />
        <div className="container mx-auto px-4 bg-white">
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