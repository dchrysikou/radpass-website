import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { DesignSystemPage } from './pages/DesignSystemPage';

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
