import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./Button";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "visibility", label: "Analytics" },
  { id: "nhs-alignment", label: "NHS Alignment" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isNavigatingToContact = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Don't update active section if we're navigating to contact
      if (isNavigatingToContact.current) {
        // Check if we've reached contact section
        const contactElement = document.getElementById('contact');
        const scrollPosition = window.scrollY + 120;

        if (contactElement && contactElement.offsetTop <= scrollPosition) {
          // We've reached contact, clear the flag
          isNavigatingToContact.current = false;
          setActiveSection('');
        }
        return;
      }

      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      // Also check for contact section
      const contactElement = document.getElementById('contact');

      const scrollPosition = window.scrollY + 120;

      // Check if we're in the contact section first
      if (contactElement && contactElement.offsetTop <= scrollPosition) {
        setActiveSection('');
        return;
      }

      // Check regular nav sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If clicking contact, clear active section immediately and set flag
    if (id === 'contact') {
      isNavigatingToContact.current = true;
      setActiveSection('');
    } else {
      // Reset flag if clicking other sections
      isNavigatingToContact.current = false;
    }

    if (!isMainPage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: shouldReduceMotion ? "auto" : "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: shouldReduceMotion ? "auto" : "smooth"
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-4"
    >
      <div className="mx-auto px-8" style={{ maxWidth: isScrolled ? '840px' : '1040px', transition: 'max-width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
        <motion.div
          className="flex items-center justify-between relative h-14"
          animate={{
            borderRadius: isScrolled ? '999px' : '0px',
            paddingLeft: isScrolled ? '24px' : '0px',
            paddingRight: isScrolled ? '24px' : '0px',
            backgroundImage: isScrolled ? 'linear-gradient(to bottom, hsl(var(--bg-page) / 0.98), hsl(var(--bg-page) / 0.94))' : 'none',
            backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
            borderColor: isScrolled ? 'hsl(var(--text-heading) / 0.08)' : 'transparent',
            borderWidth: '1px',
            boxShadow: isScrolled ? 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)' : 'none'
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="#overview"
            onClick={(e) => handleClick(e, "overview")}
            className="flex items-center flex-shrink-0"
          >
            <motion.img
              src="/logo.svg"
              alt="RadPass"
              className="h-10 w-auto"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </a>

          <ul className="hidden lg:flex items-center gap-1 flex-nowrap absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-brand"
                      : "text-heading/70 hover:text-heading"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        duration: shouldReduceMotion ? 0.1 : undefined
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              variant="nav"
              className="whitespace-nowrap"
            >
              Get in touch
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1 text-heading"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-2xl p-5"
              style={{
                backgroundImage: 'linear-gradient(to bottom, hsl(var(--bg-page) / 0.98), hsl(var(--bg-page) / 0.94))',
                backdropFilter: 'blur(12px)',
                border: '1px solid hsl(var(--text-heading) / 0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)'
              }}
            >
              <ul className="space-y-1 mx-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                        activeSection === item.id
                          ? "text-brand"
                          : "text-heading/70 hover:bg-card hover:text-heading"
                      }`}
                      style={activeSection === item.id ? {
                        backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))'
                      } : {}}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
