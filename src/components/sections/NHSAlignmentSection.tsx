import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "../AnimatedSection";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";

export const NHSAlignmentSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const content = siteContent.clinicalFit;

  const iconColor = "#2D5016";

  const icons = {
    longTermPlan: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="8" width="36" height="48" rx="2" stroke={iconColor} strokeWidth="2" fill="none"/>
        <line x1="20" y1="18" x2="44" y2="18" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="26" x2="44" y2="26" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="34" x2="38" y2="34" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="42" x2="36" y2="42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="50" x2="32" y2="50" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    cqc: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10 L10 22 L10 32 C10 44 18 52 32 56 C46 52 54 44 54 32 L54 22 Z"
          stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M23 32 L28 37 L41 24"
          stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    netZero: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="14" width="32" height="40" rx="2" stroke={iconColor} strokeWidth="2" fill="none"/>
        <rect x="18" y="10" width="32" height="40" rx="2" stroke={iconColor} strokeWidth="2" fill="none"/>
        <rect x="20" y="6" width="32" height="40" rx="2" stroke={iconColor} strokeWidth="2" fill="none"/>
        <line x1="26" y1="16" x2="40" y2="16" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="22" x2="40" y2="22" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="28" x2="36" y2="28" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  };

  return (
    <section id="nhs-alignment" className="relative overflow-hidden bg-section" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
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

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.12}>
          {content.roles.map((item, index) => (
            <StaggeredItem key={item.role}>
              <motion.div
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02, y: shouldReduceMotion ? 0 : -4 }}
                transition={{ duration: 0.3 }}
                className="h-[140px] md:h-[160px] p-4 md:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-end bg-card"
              >
                <div className="text-left">
                  <h3 className="text-lg font-medium text-heading mb-2 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.fit}
                  </p>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
};
