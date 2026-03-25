import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { Pill } from "../Pill";
import { Activity, Users, FileText } from "lucide-react";
import { siteContent } from "../../content/siteContent.ts";

const insightIcons = [Activity, Users, FileText];
const insightImages = ["/scroll_card1.svg", "/scroll_card2.svg", "/scroll_card3.svg"];
const insightAlts = [
  "Live area status interface",
  "Complete visibility dashboard",
  "Inspection-ready records timeline"
];

export const AnalyticsSection = () => {
  const content = siteContent.visibility;
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - windowCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLargeScreen]);

  return (
    <section id="visibility" className="relative overflow-visible bg-section-alt" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 container-md mx-auto">
            <div className="mb-6">
              <Pill>
                {content.badge}
              </Pill>
            </div>
            <h2 className="heading-section mb-1">
              {content.title}
            </h2>
            <div className="container-sm mx-auto">
              <p className="body">
                {content.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 container-md mx-auto">
          <div className="flex flex-col gap-12 md:gap-16">
            {content.insights.map((insight, index) => {
              const Icon = insightIcons[index];
              return (
                <motion.div
                  key={index}
                  ref={(el) => itemRefs.current[index] = el}
                  className="flex flex-col lg:flex-row items-start gap-4"
                  animate={{
                    opacity: isLargeScreen ? (activeIndex === index ? 1 : 0.3) : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 w-full">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-1 text-heading" />
                    <div className="flex-1">
                      <h3 className="heading-assertion mb-3 text-heading">
                        {insight.title}
                      </h3>
                      <div className="h-px mb-3 bg-gradient-to-r from-[hsl(40,18%,70%)] via-[hsl(40,18%,80%)] to-transparent" />
                      <p className="body text-body">
                        {insight.description}
                      </p>
                    </div>
                  </div>

                  {!isLargeScreen && (
                    <div className="w-full flex items-center justify-center mt-4">
                      <img
                        src={insightImages[index]}
                        alt={insightAlts[index]}
                        className="w-full max-w-[550px]"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {isLargeScreen && (
            <div className="hidden lg:flex items-center justify-end sticky top-1/2 h-fit">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={insightImages[activeIndex]}
                  alt={insightAlts[activeIndex]}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    y: activeIndex === 0 ? -20 : activeIndex === 1 ? 10 : 60
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[550px]"
                />
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
