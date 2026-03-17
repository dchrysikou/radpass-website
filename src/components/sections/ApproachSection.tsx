import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "../AnimatedSection";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";
import { ShieldCheck, Network, Clock } from "lucide-react";

export const ApproachSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const contextContent = siteContent.context;
  const approachContent = siteContent.approach;

  const icons = {
    safety: <ShieldCheck size={28} strokeWidth={1.6} style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} />,
    governance: <Network size={28} strokeWidth={1.6} style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} />,
    efficiency: <Clock size={28} strokeWidth={1.6} style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} />
  };

  return (
    <section id="approach" className="relative" style={{ background: 'linear-gradient(to bottom, transparent, #F6F5F3)', paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="container-sm mb-12">
            <div className="mb-6">
              <Pill>
                {contextContent.badge}
              </Pill>
            </div>
            <h2 className="heading-section mb-2">
              {contextContent.sectionTitle}
            </h2>
            <p className="body">
              {contextContent.title}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8 md:mb-16">
            <div className="container-xs">
              <p className="heading-assertion">
                {approachContent.introStatement}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8" staggerDelay={0.12}>
          {approachContent.items.map((item, index) => (
            <StaggeredItem key={item.title}>
              <motion.div
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02, y: shouldReduceMotion ? 0 : -4 }}
                transition={{ duration: 0.3 }}
                className="h-[180px] md:h-[240px] p-5 md:p-8 rounded-2xl transition-all duration-300 bg-card flex flex-col"
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))',
                      borderRadius: '12px',
                     // border: '1px solid hsl(var(--brand) / 0.15)',
                      boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.02)'
                    }}
                  >
                    {index === 0 ? icons.safety : index === 1 ? icons.governance : icons.efficiency}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="heading-card">
                    {item.title}
                  </h3>
                  <p className="body-small">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection>
          <div className="mt-8 md:mt-12">
            <div className="container-xs py-4 flex flex-col gap-4">
              <p className="heading-assertion">
                {approachContent.solutionAnchor}
              </p>

              <div className="w-full h-px bg-[hsl(40,18%,75%)]"></div>

              <div className="flex items-center gap-2 text-muted">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>

                <span className="body-small">
                  Governing principle
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
