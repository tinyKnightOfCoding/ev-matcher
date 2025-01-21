import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-secondary mb-8 rounded-full overflow-hidden">
      <motion.div className="h-full bg-primary" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
    </div>
  )
}

