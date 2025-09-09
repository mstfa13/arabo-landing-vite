import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-islamic-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-arabic">ع</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Arabo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Learning Method
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary"
            >
              Start Learning
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Learning Method
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-left text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="btn-primary text-center mt-4"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
