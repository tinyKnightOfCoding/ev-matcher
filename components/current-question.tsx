import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CurrentQuestionProps {
  question: string
  options: { value: string; label: string }[]
  isTyping: boolean
  onAnswer: (value: string, label: string) => void
}

export function CurrentQuestion({ question, options, isTyping, onAnswer }: CurrentQuestionProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <div className="bg-primary text-primary-foreground p-3 rounded-lg inline-block">
          {isTyping ? (
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          ) : (
            question
          )}
        </div>
      </div>
      <div className="grid gap-2">
        <AnimatePresence mode="wait">
          {!isTyping &&
            options.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => onAnswer(option.value, option.label)}
                  className="w-full justify-start text-left transition-all hover:translate-x-1"
                  variant="outline"
                >
                  {option.label}
                </Button>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

