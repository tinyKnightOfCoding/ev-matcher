import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title: string
  subtitle?: string
  showBackButton?: boolean
  onBackClick?: () => void
}

export function Header({ title, subtitle, showBackButton = false, onBackClick }: HeaderProps) {
  return (
    <div className="text-center mb-8 pt-8">
      {showBackButton && (
        <Button variant="ghost" className="mb-4 absolute top-4 left-4" onClick={onBackClick}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      )}
      <h1 className="text-4xl font-bold mb-2 text-primary">{title}</h1>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

