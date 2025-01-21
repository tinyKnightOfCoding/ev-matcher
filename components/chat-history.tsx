import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

interface ChatHistoryProps {
  chatHistory: { question: string; answer: string }[]
}

export function ChatHistory({ chatHistory }: ChatHistoryProps) {
  return (
    <AnimatePresence mode="popLayout">
      {chatHistory.map((chat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <div className="bg-primary text-primary-foreground p-3 rounded-lg inline-block">{chat.question}</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg inline-block">{chat.answer}</div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  )
}

