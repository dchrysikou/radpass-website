import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { Pill } from "../Pill";
import { Activity, Users, FileText } from "lucide-react";
import { siteContent } from "../../content/siteContent.ts";

const insightIcons = [Activity, Users, FileText];

export const AnalyticsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const content = siteContent.visibility;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      let newActiveIndex = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => { 
        if (ref) {
          const refTop = ref.getBoundingClientRect().top + window.scrollY;
          const refCenter = refTop + ref.offsetHeight / 2;
          const distance = Math.abs(viewportCenter - refCenter);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveIndex = index;
          }
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="visibility" className="relative overflow-visible" style={{ backgroundColor: '#FAFAF9', paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>

      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 container-md mx-auto">
            <div className="mb-6">
              <Pill>
                Analytics
              </Pill>
            </div>
            <h2 className="heading-section mb-1">
              Derived Insights
            </h2>
            <div className="container-sm mx-auto">
              <p className="body">
                Insight emerges naturally when operational state is governed and auditable.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative container-md mx-auto">
          <div ref={containerRef} className="grid lg:grid-cols-2 items-start relative gap-8 lg:gap-12">
            {/* Left side - Scrollable content */}
            <div className="flex flex-col gap-24">
            {content.insights.map((insight, index) => {
              const Icon = insightIcons[index];
              return (
                <motion.div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="transition-all duration-500 flex items-start gap-4"
                >
                  <Icon className={`w-6 h-6 flex-shrink-0 mt-1 transition-all duration-500 ${
                    activeIndex === index
                      ? 'text-heading'
                      : 'text-secondary opacity-50'
                  }`} />
                  <div className="flex-1 max-w-md">
                    <h3 className={`heading-assertion mb-3 transition-all duration-500 ${
                      activeIndex === index
                        ? 'text-heading'
                        : 'text-secondary opacity-50'
                    }`}>
                      {insight.title}
                    </h3>
                    <div className={`h-px mb-3 transition-all duration-500 ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-[hsl(40,18%,70%)] via-[hsl(40,18%,80%)] to-transparent'
                        : 'bg-gradient-to-r from-[hsl(40,6%,62%)] via-[hsl(40,6%,72%)] to-transparent opacity-40'
                    }`} />
                    <p className={`body transition-all duration-500 ${
                      activeIndex === index
                        ? 'text-body'
                        : 'text-secondary opacity-50'
                    }`}>
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

            {/* Right side - Moving card */}
            <div className="hidden lg:block relative">
              <div className="sticky top-32 flex items-start justify-end">
                <motion.div
                  animate={{
                    y: activeIndex * 80
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    mass: 0.8
                  }}
                  className="w-full max-w-[550px] relative"
                  style={{ minHeight: '400px' }}
                >
                  <img
                    src="/scroll_card1.svg"
                    alt="Live area status interface"
                    className={`w-full transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <img
                    src="/scroll_card2.svg"
                    alt="Complete visibility dashboard"
                    className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <img
                    src="/scroll_card3.svg"
                    alt="Inspection-ready records timeline"
                    className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
