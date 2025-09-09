interface ScrollProgressProps {
  progress: number
}

const ScrollProgress = ({ progress }: ScrollProgressProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-1 bg-gradient-to-r from-primary-500 to-islamic-500 transition-all duration-150 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  )
}

export default ScrollProgress
