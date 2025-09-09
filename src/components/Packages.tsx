
interface Package {
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
  sessions: string
  duration: string
  buttonText: string
}

const Packages = () => {
  const packages: Package[] = [
    {
      name: "Foundation",
      subtitle: "Perfect for beginners",
      price: 297,
      originalPrice: 397,
      sessions: "8 Sessions",
      duration: "1 Month",
      features: [
        "8 one-on-one sessions (60 min each)",
        "Arabic alphabet and pronunciation",
        "Basic grammar fundamentals",
        "Essential Islamic vocabulary",
        "Digital learning materials",
        "Progress tracking",
        "WhatsApp support"
      ],
      buttonText: "Start Foundation"
    },
    {
      name: "Mastery",
      subtitle: "Most comprehensive program",
      price: 897,
      originalPrice: 1197,
      sessions: "24 Sessions",
      duration: "3 Months",
      popular: true,
      features: [
        "24 one-on-one sessions (60 min each)",
        "Complete grammar mastery",
        "Quranic Arabic deep dive",
        "Classical text reading",
        "Hadith terminology",
        "Islamic history context",
        "Flexible scheduling",
        "Lifetime material access",
        "Certificate of completion",
        "Priority tutor selection"
      ],
      buttonText: "Choose Mastery"
    },
    {
      name: "Excellence",
      subtitle: "Advanced Islamic Arabic",
      price: 597,
      originalPrice: 797,
      sessions: "16 Sessions", 
      duration: "2 Months",
      features: [
        "16 one-on-one sessions (60 min each)",
        "Intermediate to advanced grammar",
        "Tafsir vocabulary building",
        "Fiqh terminology mastery",
        "Classical poetry introduction",
        "Academic writing skills",
        "Exam preparation support",
        "Study plan customization"
      ],
      buttonText: "Select Excellence"
    }
  ]

  const handleSelectPackage = (packageName: string) => {
    // Here you would integrate with payment processor
    console.log(`Selected package: ${packageName}`)
    // For demo purposes, scroll to CTA section
    const element = document.getElementById('cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-0 w-64 h-64 bg-primary-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-islamic-300/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional Arabic instruction with Islamic context. All packages include native Arabic-speaking tutors 
            with Islamic studies background and flexible scheduling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative glass-panel rounded-3xl p-8 card-hover ${pkg.popular ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-islamic-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.subtitle}</p>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">${pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-sm text-islamic-600 font-medium mt-1">
                      Save ${pkg.originalPrice - pkg.price}
                    </div>
                  )}
                </div>

                <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {pkg.sessions}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-islamic-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSelectPackage(pkg.name)}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  pkg.popular 
                    ? 'btn-primary' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                }`}
              >
                {pkg.buttonText}
              </button>

              {index === 1 && ( // Mastery package
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500">
                    🎁 Includes bonus: Islamic History Timeline
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-islamic-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-gray-600">
              Not satisfied with your progress? We offer a full refund within 30 days of your first session. 
              Your Islamic Arabic journey is risk-free.
            </p>
          </div>
        </div>

        {/* Additional benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {[
            {
              icon: "🕌",
              title: "Islamic Context",
              description: "Learn within the framework of Islamic scholarship and tradition"
            },
            {
              icon: "📱",
              title: "Flexible Scheduling",
              description: "Book sessions that fit your American schedule and time zone"
            },
            {
              icon: "🎓",
              title: "Certified Tutors",
              description: "Native speakers with Islamic studies credentials and teaching experience"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
