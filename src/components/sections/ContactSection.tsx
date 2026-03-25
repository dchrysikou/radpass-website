import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const content = siteContent.contact;

  return (
    <section id="contact" className="relative overflow-hidden bg-section" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>

      <div className="section-container relative z-10">
        <div className="container-sm mx-auto text-center">
          <AnimatedSection>
            <div className="mb-6">
              <Pill>
                {content.badge}
              </Pill>
            </div>
            <h2 className="heading-section mb-1 text-balance">
              {content.title}
            </h2>
            <p className="body mb-12">
              {content.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-card rounded-2xl p-8 mb-8">
              <motion.div
                whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                className="transition-transform duration-200"
              >
                <div className="flex items-center justify-center mx-auto mb-5">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))',
                      borderRadius: '12px',
                      boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.02)'
                    }}
                  >
                    <Mail size={28} strokeWidth={1.6} style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {content.cardTitle}
                </h3>
                <p className="body-small mb-6">
                  {content.cardDescription.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < content.cardDescription.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div className="pb-4">
                  <Button href={`mailto:${content.email}?subject=RadPass website enquiry`}>
                    {content.ctaText}
                  </Button>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
