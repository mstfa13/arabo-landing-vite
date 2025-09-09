const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToConsultation = () => {
    const element = document.getElementById('cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-islamic-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gold-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8 animate-fade-in">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 1,000+ American Muslims
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Master Arabic for 
            <span className="gradient-text block mt-2">Islamic Studies</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Learn Classical and Quranic Arabic with <strong>professional multilingual tutors</strong> who understand your journey as an English-speaking Muslim.
          </p>

          {/* Arabic Sample with Translation */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="font-arabic text-3xl md:text-4xl text-gray-800 mb-4 leading-relaxed" dir="rtl">
              وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ
            </p>
            <p className="text-gray-600 text-lg italic">
              "And We have not sent you except as a mercy to all the worlds."
              <span className="block text-sm text-gray-500 mt-1">— Quran 21:107</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={scrollToPackages}
              className="btn-primary text-lg px-10 py-4"
            >
              Start Your Journey
            </button>
            <button 
              onClick={scrollToConsultation}
              className="btn-secondary text-lg px-10 py-4"
            >
              Free Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-500 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-islamic-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Native Arabic Speakers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-islamic-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Islamic Studies Background</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-islamic-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
