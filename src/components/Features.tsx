import { useEffect, useState } from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: string
}

const FeatureCard = ({ icon, title, description, delay = '0s' }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`feature-${title.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [title])

  return (
    <div 
      id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`glass-panel rounded-2xl p-8 card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-islamic-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Classical Arabic Foundation",
      description: "Master the fundamentals of Arabic grammar, morphology, and syntax through systematic study of classical texts and Quranic Arabic structure."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Islamic Context Learning",
      description: "Understand Arabic through Islamic sciences with tutors who hold ijazah and deep knowledge of Islamic scholarship and terminology."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Personalized Instruction",
      description: "One-on-one sessions tailored to your learning pace, goals, and Islamic study focus, with flexible scheduling that fits your American lifestyle."
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Arabo</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our unique approach combines traditional Islamic scholarship with modern language learning methods, 
            specifically designed for English-speaking Muslims.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>

        {/* Additional Learning Path */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Journey</h3>
              <p className="text-gray-600 text-lg">Progressive steps designed for American Muslims</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Assessment", desc: "Evaluate your current level and goals" },
                { step: "02", title: "Foundation", desc: "Build core Arabic grammar and vocabulary" },
                { step: "03", title: "Application", desc: "Practice with Quranic and Islamic texts" },
                { step: "04", title: "Mastery", desc: "Advanced study of classical literature" }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-islamic-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
