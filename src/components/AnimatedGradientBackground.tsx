import { motion } from "framer-motion";

export const AnimatedGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main glow behind headline */}
      <motion.div
        className="absolute w-[900px] h-[900px] left-[6%] -top-[80px]"
        style={{
          background: `radial-gradient(
            ellipse at 30% 30%,
            rgba(140,135,120,0.22) 0%,
            rgba(130,125,110,0.12) 35%,
            rgba(130,125,110,0.05) 60%,
            transparent 75%
          )`,
          filter: "blur(70px)",
        }}
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow behind UI cards */}
     <motion.div
 className="absolute w-[780px] h-[780px] left-[6%] top-[80px]"
style={{
  background: `radial-gradient(
    ellipse at 28% 30%,
    rgba(140,135,120,0.16) 0%,
    rgba(130,125,110,0.08) 20%,
    rgba(130,125,110,0.03) 45%,
    transparent 60%
  )`,
  filter: "blur(80px)",
}}
  animate={{
    scale: [1, 1.06, 1],
    opacity: [0.85, 1, 0.85],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

    </div>
  );
};