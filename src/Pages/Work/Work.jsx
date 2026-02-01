// work.jsx (Solutions Page)
import React from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const clientSolutions = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies",
      fullDescription: "We create responsive, high-performance websites and web applications using React, Next.js, and modern frameworks. Our solutions are optimized for speed, SEO, and user experience across all devices.",
      icon: "fas fa-code",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Progressive Web Apps",
        "API Integration",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      caseStudy: "Built an e-commerce platform that increased client revenue by 300% in 6 months"
    },
    {
      id: 2,
      title: "AI Systems",
      description: "Intelligent automation and machine learning solutions",
      fullDescription: "We develop AI-powered systems including chatbots, recommendation engines, and predictive analytics using machine learning, deep learning, and natural language processing.",
      icon: "fas fa-brain",
      color: "from-purple-500 to-pink-500",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Chatbots & Virtual Assistants",
        "AI Integration"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "FastAPI"],
      caseStudy: "Implemented an AI chatbot that reduced customer support tickets by 65%"
    },
    {
      id: 3,
      title: "Custom Software",
      description: "Tailored software solutions for unique business needs",
      fullDescription: "We build custom software applications designed specifically for your business processes. From CRM systems to inventory management, we create solutions that streamline operations and boost efficiency.",
      icon: "fas fa-laptop-code",
      color: "from-green-500 to-emerald-500",
      features: [
        "Custom CRM Systems",
        "Inventory Management",
        "Business Intelligence",
        "Workflow Automation",
        "Reporting Dashboards",
        "Integration Services"
      ],
      technologies: ["Java", "Spring Boot", "C#", ".NET", "PostgreSQL", "Docker"],
      caseStudy: "Developed a custom inventory system that reduced stock discrepancies by 90%"
    },
    {
      id: 4,
      title: "Freelance & Contract Projects",
      description: "Flexible engagement models for project-based work",
      fullDescription: "We offer flexible freelance and contract development services for businesses of all sizes. Whether you need a single developer or a complete team, we adapt to your project requirements and timeline.",
      icon: "fas fa-briefcase",
      color: "from-orange-500 to-yellow-500",
      features: [
        "Project-Based Work",
        "Flexible Engagement Models",
        "Quick Turnaround",
        "Specialized Expertise",
        "Hourly or Fixed-Price Contracts",
        "Milestone-Based Delivery"
      ],
      technologies: ["Full-Stack Development", "DevOps", "Cloud Services", "Mobile Development", "UI/UX Design"],
      caseStudy: "Completed a 3-month project delivering a mobile app with 50,000+ downloads"
    }
  ];

  const successStories = [
    {
      client: "EduTech Startup",
      solution: "AI-Powered Learning Platform",
      result: "Increased user engagement by 200%",
      metrics: "50K+ active users, 4.8/5 rating"
    },
    {
      client: "Retail Company",
      solution: "Custom E-commerce Solution",
      result: "Boosted sales by 150%",
      metrics: "99.9% uptime, 40% faster load times"
    },
    {
      client: "Healthcare Provider",
      solution: "Patient Management System",
      result: "Reduced administrative work by 70%",
      metrics: "5000+ patients managed, 95% satisfaction"
    },
    {
      client: "FinTech Company",
      solution: "Automated Trading Algorithm",
      result: "Improved accuracy by 35%",
      metrics: "24/7 monitoring, real-time analytics"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light-mode:from-gray-50 light-mode:via-blue-50 light-mode:to-gray-50"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 light-mode:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 light-mode:bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 light-mode:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">
                Our Client
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Solutions
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl dark:text-gray-400 light-mode:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Customized technology solutions designed to solve complex business challenges and drive measurable results
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full dark:bg-cyan-500/10 light-mode:bg-cyan-400/5 border dark:border-cyan-500/30 light-mode:border-cyan-400/20">
                <span className="dark:text-cyan-400 light-mode:text-cyan-600 text-sm font-medium">200+ Projects</span>
              </div>
              <div className="px-4 py-2 rounded-full dark:bg-blue-500/10 light-mode:bg-blue-400/5 border dark:border-blue-500/30 light-mode:border-blue-400/20">
                <span className="dark:text-blue-400 light-mode:text-blue-600 text-sm font-medium">95% Client Satisfaction</span>
              </div>
              <div className="px-4 py-2 rounded-full dark:bg-purple-500/10 light-mode:bg-purple-400/5 border dark:border-purple-500/30 light-mode:border-purple-400/20">
                <span className="dark:text-purple-400 light-mode:text-purple-600 text-sm font-medium">50+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light-mode:from-gray-50 light-mode:via-blue-50 light-mode:to-gray-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 dark:bg-blue-500/3 light-mode:bg-blue-400/1 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                Our Solution
              </span>
            </h2>
            <p className="text-lg dark:text-gray-400 light-mode:text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions designed to address your specific business needs
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group p-8 rounded-2xl transition-all duration-500
                          dark:bg-black/50 light-mode:bg-white/80
                          backdrop-blur-sm border dark:border-gray-700/50 light-mode:border-gray-300/50
                          hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20
                          hover:scale-[1.02] transform"
              >
                {/* Solution Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <i className={`${solution.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold dark:text-white light-mode:text-gray-800 mb-2">
                      {solution.title}
                    </h3>
                    <p className="dark:text-gray-300 light-mode:text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Full Description */}
                <p className="dark:text-gray-400 light-mode:text-gray-600 mb-6 leading-relaxed">
                  {solution.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold dark:text-white light-mode:text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-2"></i>
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm dark:bg-gray-800/50 light-mode:bg-gray-100 dark:text-gray-300 light-mode:text-gray-700 border dark:border-gray-700/50 light-mode:border-gray-300/50 hover:border-blue-400/30 transition-colors duration-300"
                      >
                        <i className="fas fa-check-circle text-green-400 mr-2 text-xs"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold dark:text-white light-mode:text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-cogs text-cyan-400 mr-2"></i>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-sm dark:bg-gray-900/70 light-mode:bg-gray-100 dark:text-gray-400 light-mode:text-gray-600 border dark:border-gray-700/50 light-mode:border-gray-300/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="p-4 rounded-xl dark:bg-gradient-to-r dark:from-gray-800/40 dark:to-gray-900/40 light-mode:bg-gradient-to-r light-mode:from-gray-100/60 light-mode:to-gray-200/60 border dark:border-gray-700/30 light-mode:border-gray-300/30">
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-green-400 text-xl mr-3"></i>
                    <div>
                      <p className="text-sm dark:text-gray-300 light-mode:text-gray-700">
                        <span className="font-semibold dark:text-white light-mode:text-gray-800">Success Story:</span> {solution.caseStudy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                             bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30
                             dark:text-blue-400 light-mode:text-blue-600 hover:text-white font-semibold
                             border border-blue-500/30 hover:border-blue-400
                             transition-all duration-300 group/btn"
                  >
                    <span>Discuss Your Project</span>
                    <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light-mode:from-gray-50 light-mode:via-blue-50 light-mode:to-gray-50"></div>

          {/* Subtle overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent"></div>

          {/* Gradient orbs */}
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 dark:bg-blue-500/3 light-mode:bg-blue-400/1 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 right-1/4 w-80 h-80 dark:bg-cyan-500/3 light-mode:bg-cyan-400/1 rounded-full blur-3xl"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 dark:bg-blue-500/10 light-mode:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 dark:bg-cyan-500/5 light-mode:bg-cyan-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 rounded-3xl transition-all duration-300
                          dark:bg-black/50 light-mode:bg-white/80
                          backdrop-blur-sm border dark:border-gray-700/50 light-mode:border-gray-300/50
                          hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10
                          hover:scale-[1.01] transform">

              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    Ready to Transform Your Business?
                  </span>
                </h2>

                <p className="text-xl dark:text-gray-300 light-mode:text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how our custom solutions can help you achieve your goals and drive measurable results
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link
                  to="/contact"
                  className="group px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg
                           bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
                           text-white shadow-xl hover:shadow-2xl hover:scale-105 transform
                           border border-cyan-400/30 hover:border-cyan-400/50
                           flex items-center justify-center gap-3 min-w-[250px]"
                >
                  <i className="fas fa-comments"></i>
                  <span>Start a Conversation</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </Link>

                <a
                  href="mailto:contact@teamx.com"
                  className="group px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg
                           bg-transparent hover:bg-cyan-500/10
                           dark:text-cyan-400 light-mode:text-cyan-600 hover:text-white
                           border-2 border-cyan-400/50 hover:border-cyan-400
                           shadow-lg hover:shadow-cyan-500/20
                           flex items-center justify-center gap-3 min-w-[250px]"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email Us Directly</span>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-10 pt-8 border-t dark:border-gray-700/50 light-mode:border-gray-300/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full dark:bg-cyan-500/10 light-mode:bg-cyan-400/5 flex items-center justify-center mb-3">
                      <i className="fas fa-clock dark:text-cyan-400 light-mode:text-cyan-600"></i>
                    </div>
                    <h4 className="font-semibold dark:text-white light-mode:text-gray-800 mb-1">Quick Response</h4>
                    <p className="text-sm dark:text-gray-400 light-mode:text-gray-600">Typically within 24 hours</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full dark:bg-blue-500/10 light-mode:bg-blue-400/5 flex items-center justify-center mb-3">
                      <i className="fas fa-calendar-check dark:text-blue-400 light-mode:text-blue-600"></i>
                    </div>
                    <h4 className="font-semibold dark:text-white light-mode:text-gray-800 mb-1">Free Consultation</h4>
                    <p className="text-sm dark:text-gray-400 light-mode:text-gray-600">No commitment required</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full dark:bg-purple-500/10 light-mode:bg-purple-400/5 flex items-center justify-center mb-3">
                      <i className="fas fa-handshake dark:text-purple-400 light-mode:text-purple-600"></i>
                    </div>
                    <h4 className="font-semibold dark:text-white light-mode:text-gray-800 mb-1">Custom Proposal</h4>
                    <p className="text-sm dark:text-gray-400 light-mode:text-gray-600">Tailored to your needs</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg dark:bg-gray-800/30 light-mode:bg-gray-100/60 border dark:border-gray-700/30 light-mode:border-gray-300/30">
                  <i className="fas fa-shield-alt text-green-400"></i>
                  <span className="text-sm dark:text-gray-400 light-mode:text-gray-600">Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg dark:bg-gray-800/30 light-mode:bg-gray-100/60 border dark:border-gray-700/30 light-mode:border-gray-300/30">
                  <i className="fas fa-lock dark:text-blue-400 light-mode:text-blue-600"></i>
                  <span className="text-sm dark:text-gray-400 light-mode:text-gray-600">NDA Available</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg dark:bg-gray-800/30 light-mode:bg-gray-100/60 border dark:border-gray-700/30 light-mode:border-gray-300/30">
                  <i className="fas fa-certificate text-yellow-400"></i>
                  <span className="text-sm dark:text-gray-400 light-mode:text-gray-600">Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        /* Light mode */
        body.light .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 180, 220, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 220, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Dark mode */
        body.dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Fix for light mode specific classes */
        body.light .light-mode\\:from-gray-50 {
          --tw-gradient-from: #f9fafb !important;
        }
        
        body.light .light-mode\\:via-blue-50 {
          --tw-gradient-stops: var(--tw-gradient-from), #eff6ff 50%, var(--tw-gradient-to) !important;
        }
        
        body.light .light-mode\\:to-gray-50 {
          --tw-gradient-to: #f9fafb !important;
        }
        
        body.light .light-mode\\:bg-white\\/80 {
          background-color: rgba(255, 255, 255, 0.8) !important;
        }
        
        body.light .light-mode\\:bg-gray-100 {
          background-color: #f3f4f6 !important;
        }
        
        body.light .light-mode\\:bg-gray-100\\/60 {
          background-color: rgba(243, 244, 246, 0.6) !important;
        }
        
        body.light .light-mode\\:from-gray-100\\/60 {
          --tw-gradient-from: rgba(243, 244, 246, 0.6) !important;
        }
        
        body.light .light-mode\\:to-gray-200\\/60 {
          --tw-gradient-to: rgba(229, 231, 235, 0.6) !important;
        }
        
        body.light .light-mode\\:text-gray-800 {
          color: #1f2937 !important;
        }
        
        body.light .light-mode\\:text-gray-700 {
          color: #374151 !important;
        }
        
        body.light .light-mode\\:text-gray-600 {
          color: #4b5563 !important;
        }
        
        body.light .light-mode\\:border-gray-300\\/30 {
          border-color: rgba(209, 213, 219, 0.3) !important;
        }
        
        body.light .light-mode\\:border-gray-300\\/50 {
          border-color: rgba(209, 213, 219, 0.5) !important;
        }
        
        body.light .light-mode\\:bg-blue-400\\/1 {
          background-color: rgba(96, 165, 250, 0.01) !important;
        }
        
        body.light .light-mode\\:bg-blue-400\\/5 {
          background-color: rgba(96, 165, 250, 0.05) !important;
        }
        
        body.light .light-mode\\:bg-cyan-400\\/1 {
          background-color: rgba(34, 211, 238, 0.01) !important;
        }
        
        body.light .light-mode\\:bg-cyan-400\\/3 {
          background-color: rgba(34, 211, 238, 0.03) !important;
        }
        
        body.light .light-mode\\:bg-cyan-400\\/5 {
          background-color: rgba(34, 211, 238, 0.05) !important;
        }
        
        body.light .light-mode\\:bg-purple-400\\/5 {
          background-color: rgba(192, 132, 252, 0.05) !important;
        }
        
        body.light .light-mode\\:border-blue-400\\/20 {
          border-color: rgba(96, 165, 250, 0.2) !important;
        }
        
        body.light .light-mode\\:border-cyan-400\\/20 {
          border-color: rgba(34, 211, 238, 0.2) !important;
        }
        
        body.light .light-mode\\:border-purple-400\\/20 {
          border-color: rgba(192, 132, 252, 0.2) !important;
        }
        
        body.light .light-mode\\:text-cyan-600 {
          color: #0891b2 !important;
        }
        
        body.light .light-mode\\:text-blue-600 {
          color: #2563eb !important;
        }
        
        body.light .light-mode\\:text-purple-600 {
          color: #7c3aed !important;
        }
        
        /* Animation for cards */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .grid > div:nth-child(2) { animation-delay: 0.1s; }
        .grid > div:nth-child(3) { animation-delay: 0.2s; }
        .grid > div:nth-child(4) { animation-delay: 0.3s; }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
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