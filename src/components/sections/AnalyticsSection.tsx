import { motion } from "framer-motion";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "../AnimatedSection";
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

        <StaggeredContainer className="flex flex-col gap-12 md:gap-16" staggerDelay={0.15}>
          {content.insights.map((insight, index) => {
            const Icon = insightIcons[index];
            return (
              <StaggeredItem key={index}>
                <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12 container-md mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center lg:justify-end"
                  >
                    <img
                      src={insightImages[index]}
                      alt={insightAlts[index]}
                      className="w-full max-w-[550px]"
                    />
                  </motion.div>
                </div>
              </StaggeredItem>
            );
          })}
        </StaggeredContainer>
      </div>
    </section>
  );
};
