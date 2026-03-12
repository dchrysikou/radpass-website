import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { MainPage } from './pages/MainPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

function Footer() {
  const location = useLocation();
  const isDesignSystemPage = location.pathname === '/design-system';
  const isDevelopment = import.meta.env.DEV;

  return (
    <footer className="py-8" style={{ backgroundColor: 'hsl(220, 5%, 15%)' }}> 
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="RadPass" className="h-10 w-auto opacity-70" style={{ filter: 'brightness(0) invert(0.93)' }} />
          </div>
          <div className="flex items-center gap-4">
            {isDevelopment && (
              <Link
                to={isDesignSystemPage ? '/' : '/design-system'}
                className="body-small text-white/60 hover:text-white transition-colors duration-200"
              >
                {isDesignSystemPage ? 'Back to Home' : 'Design System'}
              </Link>
            )}
            <p className="body-small text-white/80">&copy; 2026 RadPass. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-page text-body">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
