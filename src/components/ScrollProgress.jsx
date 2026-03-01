import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed top-0 left-0 right-0 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] z-[100] overflow-hidden">
      <div className="h-1 bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-[#00D9A5] origin-left rounded-r-full shadow-[0_0_10px_rgba(0,217,165,0.5)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  )
}
