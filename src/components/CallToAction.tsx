import { useState } from 'react'

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare data for Google Sheets
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Landing Page Form'
      }

      // Send to Google Sheets via Apps Script
      await fetch((import.meta as any).env.VITE_GOOGLE_SHEETS_URL || '', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      console.log('Form submitted successfully:', submissionData)
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // You might want to show an error message to the user
      alert('There was an error submitting your form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="cta" className="py-24 bg-gradient-to-br from-primary-600 to-islamic-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Success! We'll Be In Touch</h2>
            <p className="text-xl text-primary-100 mb-8">
              Your journey to mastering Arabic for Islamic studies begins now. Our team will contact you within 24 hours to schedule your free consultation.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>We'll call you for a 15-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Match you with the perfect tutor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Schedule your first lesson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary-600 to-islamic-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-islamic-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Arabic Journey Today
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of American Muslims who have transformed their Islamic studies through Arabic mastery. 
              Get your free consultation and begin your personalized learning path.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8">Why Start With Arabo?</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "🎯",
                    title: "Personalized Assessment",
                    description: "We evaluate your current level and create a custom learning plan"
                  },
                  {
                    icon: "🕌",
                    title: "Islamic Context",
                    description: "Learn Arabic through Islamic texts and scholarly tradition"
                  },
                  {
                    icon: "👨‍🏫",
                    title: "Expert Tutors",
                    description: "Native speakers with Islamic studies background"
                  },
                  {
                    icon: "📱",
                    title: "Flexible Schedule",
                    description: "Lessons that fit your American lifestyle and time zone"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-primary-100 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Arabic Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="know-alphabet">Know Arabic Alphabet</option>
                    <option value="basic-reading">Can Read Basic Arabic</option>
                    <option value="intermediate">Intermediate Level</option>
                    <option value="advanced">Advanced Level</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What do you hope to achieve? (e.g., understand Quran, read hadith, academic study)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-600 to-islamic-600 hover:from-primary-700 hover:to-islamic-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get My Free Consultation'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from Arabo. 
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
