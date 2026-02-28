import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[100]">
      <motion.div
        className="h-full bg-[#00D9A5] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
