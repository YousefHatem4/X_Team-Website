import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "AI-Powered Applications",
      description: "Intelligent systems with machine learning and NLP",
      icon: "fas fa-brain",
      color: "from-purple-500 to-pink-600",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      timeline: "4-8 weeks"
    },
    {
      id: 2,
      title: "Web & System Development",
      description: "Full-stack solutions built for scale",
      icon: "fas fa-laptop-code",
      color: "from-blue-500 to-cyan-600",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Cloud Deployment"],
      timeline: "6-12 weeks"
    },
    {
      id: 3,
      title: "Educational Platforms",
      description: "Interactive learning management systems",
      icon: "fas fa-chalkboard-teacher",
      color: "from-green-500 to-emerald-600",
      features: ["LMS Development", "Interactive Content", "Progress Tracking", "Mobile Learning"],
      timeline: "8-16 weeks"
    },
    {
      id: 4,
      title: "Custom Freelance Solutions",
      description: "Tailored development for your unique needs",
      icon: "fas fa-briefcase",
      color: "from-orange-500 to-yellow-600",
      features: ["Project-Based Work", "Flexible Engagement", "Quick Turnaround", "Specialized Expertise"],
      timeline: "Flexible"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-300 mb-2">
                Our
              </span>
              <span className="block bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

          {/* Subtle overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent"></div>

          {/* Gradient orbs */}
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                What We Offer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Professional technology services to help your business grow and succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group p-6 rounded-2xl transition-all duration-300
                                        bg-black/50 backdrop-blur-sm border border-gray-700/50
                                        hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20
                                        hover:scale-[1.03] transform">
                <div className="flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <h1 className="text-2xl font-bold text-white">{service.title}</h1>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-4 pt-6 border-t border-gray-700/50">
                    <p className="text-sm font-medium text-gray-400 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <i className="fas fa-check-circle text-green-400 mr-2 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="mt-6 pt-4 border-t border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <i className="fas fa-clock mr-2"></i>
                        Timeline: {service.timeline}
                      </div>
                      <Link
                        to="/contact"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <i className="fas fa-arrow-right mr-1"></i>
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="p-8 rounded-2xl transition-all duration-300
                          bg-black/50 backdrop-blur-sm border border-gray-700/50
                          hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20
                          hover:scale-[1.01] transform">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-4">
                  <i className="fas fa-cogs text-white text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-white">How We Work</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3 mx-auto">
                    <i className="fas fa-search text-cyan-400"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Discovery</h3>
                  <p className="text-sm text-gray-400">We understand your needs</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3 mx-auto">
                    <i className="fas fa-code text-blue-400"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Development</h3>
                  <p className="text-sm text-gray-400">We build your solution</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3 mx-auto">
                    <i className="fas fa-rocket text-green-400"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Delivery</h3>
                  <p className="text-sm text-gray-400">We launch and support</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg
                       bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700
                       text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105
                       transition-all duration-300"
            >
              <i className="fas fa-comments"></i>
              Get Started With Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        /* Dark mode (default) */
        body.dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        body.dark .bg-black\\/50 {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
        
        body.dark .border-gray-700\\/50 {
          border-color: rgba(55, 65, 81, 0.5) !important;
        }
        
        body.dark .text-white {
          color: #ffffff !important;
        }
        
        body.dark .text-gray-300 {
          color: #d1d5db !important;
        }
        
        body.dark .text-gray-400 {
          color: #9ca3af !important;
        }
        
        /* Light mode - with dark text colors */
        body.light .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 180, 220, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 220, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        body.light .bg-gradient-to-b {
          background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%) !important;
        }
        
        /* Light mode backgrounds */
        body.light .bg-black\\/50 {
          background-color: rgba(255, 255, 255, 0.9) !important;
        }
        
        body.light .border-gray-700\\/50 {
          border-color: rgba(209, 213, 219, 0.5) !important;
        }
        
        /* Light mode text colors - DARK LIKE IN DARK MODE */
        body.light .text-white {
          color: #1f2937 !important; /* Dark gray instead of white */
        }
        
        body.light .text-gray-300 {
          color: #4b5563 !important; /* Medium gray */
        }
        
        body.light .text-gray-400 {
          color: #6b7280 !important; /* Light gray */
        }
        
        body.light .text-blue-400 {
          color: #2563eb !important; /* Darker blue */
        }
        
        body.light .text-cyan-400 {
          color: #0891b2 !important; /* Darker cyan */
        }
        
        body.light .text-green-400 {
          color: #059669 !important; /* Darker green */
        }
        
        body.light .text-purple-400 {
          color: #7c3aed !important; /* Darker purple */
        }
        
        /* Light mode backgrounds for orbs and effects */
        body.light .bg-blue-500\\/10 {
          background-color: rgba(59, 130, 246, 0.08) !important;
        }
        
        body.light .bg-cyan-500\\/10 {
          background-color: rgba(6, 182, 212, 0.08) !important;
        }
        
        body.light .bg-cyan-400\\/10 {
          background-color: rgba(34, 211, 238, 0.08) !important;
        }
        
        body.light .bg-cyan-500\\/3 {
          background-color: rgba(6, 182, 212, 0.03) !important;
        }
        
        body.light .bg-blue-500\\/3 {
          background-color: rgba(59, 130, 246, 0.03) !important;
        }
        
        body.light .bg-green-500\\/10 {
          background-color: rgba(16, 185, 129, 0.08) !important;
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
        
        body.light ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        body.light ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
          border-radius: 5px;
        }
        
        body.light ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0e7490, #1d4ed8);
        }
      `}</style>
    </>
  );
}