import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // UPDATED: Gmail composition logic from old contact page
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare beautifully formatted email content
      const emailBody = `
Dear Yousef Hatem Developer,

You have received a new contact form submission from your website:

===========================================
CONTACT FORM DETAILS
===========================================

👤 Full Name: ${formData.fullName}
📧 Email Address: ${formData.email}
📞 Phone Number: ${formData.phone || 'Not provided'}

===========================================
MESSAGE
===========================================

${formData.message}

===========================================
SENDER INFORMATION
===========================================
📧 Reply to: ${formData.email}
📱 Contact: ${formData.phone || 'Phone not provided'}
⏰ Submitted: ${new Date().toLocaleString()}
🌐 Source: Website Contact Form

===========================================
Thank you for your attention!

Best regards,
${formData.fullName}
      `.trim()

      // Encode email content for URL
      const encodedSubject = encodeURIComponent(`[Website Contact] Inquiry from ${formData.fullName}`)
      const encodedBody = encodeURIComponent(emailBody)

      // Create Gmail compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yousef.hatem.developer@gmail.com&su=${encodedSubject}&body=${encodedBody}`

      // Open Gmail in new tab
      setTimeout(() => {
        window.open(gmailUrl, '_blank', 'noopener,noreferrer')

        setSubmitStatus('success')

        // Reset form after submission
        setTimeout(() => {
          setIsSubmitting(false)
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
          })
        }, 2000)

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }, 1000)

    } catch (error) {
      console.error('Error opening Gmail:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b  from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Contact Section */}
      <section className="relative z-10 pb-20 pt-30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Contact Us
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-rgba-gray dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
              Get in touch with us. We'd love to hear about your project and discuss how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl transition-all duration-300
                          bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                          backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                          hover:shadow-2xl hover:shadow-cyan-500/10">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 mb-8">
                Fill out the form below and we'll open Gmail with your message ready to send
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user text-cyan-400"></i>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-white dark:text-white light:text-white
                               placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400
                               transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-cyan-400"></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-white dark:text-white light:text-white
                               placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400
                               transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-phone text-cyan-400"></i>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-white dark:text-white light:text-white
                               placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400
                               transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <i className="fas fa-comment text-cyan-400"></i>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-white dark:text-white light:text-white
                               placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400
                               resize-none
                               transition-all duration-300"
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                    />
                  </div>
                </div>

                {/* Submit Button - UPDATED TEXT */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg
                             bg-gradient-to-r from-cyan-500 to-blue-600 
                             hover:from-cyan-600 hover:to-blue-700
                             text-white shadow-lg hover:shadow-xl 
                             transition-all duration-300
                             flex items-center justify-center gap-2
                             ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        <span>Opening Gmail...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        <span>Send Message via Gmail</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages - UPDATED TEXT */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                      <div>
                        <p className="font-medium text-green-300">Message ready in Gmail!</p>
                        <p className="text-sm text-green-400/80">We'll get back to you soon.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle text-red-400 mr-3 text-xl"></i>
                      <div>
                        <p className="font-medium text-red-300">Failed to open Gmail</p>
                        <p className="text-sm text-red-400/80">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="p-8 rounded-2xl transition-all duration-300
                            bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                            backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                            hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
                <h2 className="text-2xl font-bold text-white dark:text-white light:text-white mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:yousef.hatem.developer@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        yousef.hatem.developer@gmail.com
                      </a>
                      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300 mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-1">
                        Working Hours
                      </h3>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-300">
Any Time
                      </p>
                    
                     
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-bolt text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-1">
                        Quick Response
                      </h3>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-300">
                        We prioritize all inquiries and aim to respond within a few hours during business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="p-8 rounded-2xl transition-all duration-300
                            bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                            backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                            hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">
                <h2 className="text-2xl font-bold text-white dark:text-white light:text-white mb-6">
                  Other Ways to Connect
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/yousef-hatem-16530024b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl transition-all duration-300
                             bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-800/50 dark:to-gray-900/50 light:from-gray-800/30 light:to-gray-900/30
                             border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                             hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10
                             text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-3">
                      <i className="fab fa-linkedin-in text-white"></i>
                    </div>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://github.com/YousefHatem4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl transition-all duration-300
                             bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-800/50 dark:to-gray-900/50 light:from-gray-800/30 light:to-gray-900/30
                             border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                             hover:border-gray-400/30 hover:bg-gradient-to-br hover:from-gray-700/10 hover:to-gray-800/10
                             text-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mx-auto mb-3">
                      <i className="fab fa-github text-white"></i>
                    </div>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      GitHub
                    </span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50">
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 text-sm">
                    <i className="fas fa-info-circle text-cyan-400 mr-2"></i>
                    For urgent matters, please mention "URGENT" in your email subject
                  </p>
                </div>
              </div>

              {/* Back to Home */}
              <Link
                to="/"
                className="group block p-6 rounded-2xl transition-all duration-300
                         bg-gradient-to-r from-gray-800/50 to-gray-900/50 dark:from-gray-800/50 dark:to-gray-900/50 light:from-gray-800/30 light:to-gray-900/30
                         border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                         hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                      <i className="fas fa-home text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-white">
                        Back to Home
                      </h3>
                      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300">
                        Return to the main page
                      </p>
                    </div>
                  </div>
                  <i className="fas fa-arrow-right text-cyan-400 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for light mode */}
      <style>{`
        .light .bg-gradient-to-b {
          background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
        }
        
        .light .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 180, 220, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 220, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .light .text-rgba-gray {
          color: #334155;
        }
        
        .light .bg-cyan-500 {
          background-color: #0891b2;
        }
        
        .light .border-cyan-400 {
          border-color: rgba(8, 145, 178, 0.3);
        }
        
        .light .text-cyan-400 {
          color: #0891b2;
        }
        
        .light .bg-cyan-500/10 {
          background-color: rgba(8, 145, 178, 0.08);
        }
        
        .light .shadow-cyan-500/20 {
          box-shadow: 0 4px 6px rgba(8, 145, 178, 0.15);
        }
        
        .light .bg-cyan-500/5 {
          background-color: rgba(8, 145, 178, 0.04);
        }
        
        .light .bg-blue-500/5 {
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        /* Light mode card styling */
        .light .bg-black\\/50 {
          background-color: rgba(30, 41, 59, 0.7) !important;
        }
        
        .light .bg-gray-900\\/30 {
          background-color: rgba(15, 23, 42, 0.7) !important;
        }
        
        .light .bg-gray-800\\/50 {
          background-color: rgba(30, 41, 59, 0.5) !important;
        }
        
        .light .border-gray-600\\/50 {
          border-color: rgba(71, 85, 105, 0.5) !important;
        }
        
        .light .border-gray-700\\/50 {
          border-color: rgba(51, 65, 85, 0.5) !important;
        }
        
        .light .text-white {
          color: #f8fafc !important;
        }
        
        .light .text-gray-300 {
          color: #cbd5e1 !important;
        }
        
        .light .text-gray-400 {
          color: #94a3b8 !important;
        }
        
        .light .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
        
        /* Form inputs */
        .light input,
        .light textarea {
          background-color: rgba(30, 41, 59, 0.3) !important;
        }
        
        .light input:focus,
        .light textarea:focus {
          background-color: rgba(30, 41, 59, 0.4) !important;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00d4ff, #0099ff);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00b8e6, #0088e6);
        }
        
        .light ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        .light ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
          border-radius: 5px;
        }
        
        .light ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0e7490, #1d4ed8);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .grid.grid-cols-1.lg\\:grid-cols-2 {
            gap: 2rem;
          }
          
          .p-8 {
            padding: 1.5rem;
          }
          
          h1.text-6xl {
            font-size: 3rem;
          }
          
          h2.text-2xl {
            font-size: 1.5rem;
          }
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
  )
}