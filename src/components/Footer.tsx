import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const isDesignSystemPage = location.pathname === '/design-system';
  const isDevelopment = import.meta.env.DEV;

  return (
    <footer className="relative z-10 bg-footer-dark">
      <div className="w-full border-t border-white/10"></div>

      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="RadPass" className="h-8 w-auto opacity-70" style={{ filter: 'brightness(0) invert(0.93)' }} />
            <p className="body-small text-white/60">&copy; 2026 RadPass</p>
            {isDevelopment && (
              <>
                <div className="w-px h-4 bg-white/10"></div>
                <Link
                  to={isDesignSystemPage ? '/' : '/design-system'}
                  className="body-small text-white/60 hover:text-white transition-colors duration-200"
                >
                  {isDesignSystemPage ? 'Home' : 'Design System'}
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <p className="body-small text-white/60">Contact:</p>
            <a href="mailto:info@radpass.co.uk?subject=RadPass%20website%20enquiry" className="body-small text-white/80 hover:text-white transition-colors">info@radpass.co.uk</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
