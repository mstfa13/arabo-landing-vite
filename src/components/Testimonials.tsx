const testimonials = [
  {
    name: "Ahmad Johnson",
    location: "Houston, TX",
    course: "Mastery Program Graduate",
    image: "/api/placeholder/80/80",
    content: "As a convert, I struggled with Arabic for years. Arabo's tutors didn't just teach me grammar—they helped me understand the beauty and depth of Islamic texts. Now I can read Quran with understanding, not just pronunciation.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    location: "Dearborn, MI", 
    course: "Excellence Program Graduate",
    image: "/api/placeholder/80/80",
    content: "The Islamic context made all the difference. My tutor explained not just what words mean, but their significance in our faith. I can now follow khutbahs and read hadith with much better comprehension.",
    rating: 5
  },
  {
    name: "Omar Martinez",
    location: "Los Angeles, CA",
    course: "Foundation Program Graduate",
    image: "/api/placeholder/80/80", 
    content: "Perfect for beginners! The structured approach and patient tutoring helped me go from knowing zero Arabic to confidently reading Islamic books. The flexible scheduling worked perfectly with my work schedule.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from <span className="gradient-text">American Muslims</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real experiences from students who transformed their Islamic studies through Arabic mastery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="glass-panel rounded-2xl p-8 card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-center mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-islamic-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 mb-1">{testimonial.location}</p>
                <p className="text-xs text-primary-600 font-medium">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">1,000+</div>
                <div className="text-gray-600">American Muslims Taught</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-gray-600">Student Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600">Islamic Texts Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
