import React from 'react'
import { Link } from 'react-router-dom'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Rami Ahmed",
      role: "AI Engineer",
      initials: "RA",
      color: "from-cyan-500 to-blue-600",
      bio: "Specializes in developing cutting-edge AI solutions with expertise in machine learning, deep learning, and natural language processing. Leads our AI initiatives and ensures our solutions are at the forefront of technology.",
      expertise: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "AI Integration", "Neural Networks", "Data Science"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Yousef Hatem",
      role: "Web Developer",
      initials: "YH",
      color: "from-blue-500 to-purple-600",
      bio: "Full-stack developer specializing in creating responsive, performant web applications with modern technologies. Focuses on delivering seamless user experiences and robust backend systems.",
      expertise: ["React.js", "Next.js", "TypeScript", "Supabase", "UI/UX Design", "jQuery", "Bootstrap", "Material UI", "Tailwind CSS", "Node.js"],
      social: {
        linkedin: "https://www.linkedin.com/in/yousef-hatem-16530024b/",
        github: "https://github.com/YousefHatem4",
        twitter: "#"
      }
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-300 mb-2">
                Meet Our
              </span>
              <span className="block bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Team
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate experts dedicated to delivering exceptional results and transforming your ideas into reality
            </p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

          {/* Subtle overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent"></div>

          {/* Gradient orbs */}
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Our Expert Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              The talented individuals who drive innovation and deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-10 rounded-3xl transition-all duration-300
                                            bg-black/50 backdrop-blur-sm border border-gray-700/50
                                            hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20
                                            hover:scale-[1.02] transform">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 md:mb-0 md:mr-8 flex-shrink-0`}>
                    <span className="text-4xl font-bold text-white">{member.initials}</span>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-3">{member.name}</h2>
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        <i className="fas fa-user-tie mr-3 text-lg"></i>{member.role}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mt-10 pt-8 border-t border-gray-700/50">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-3"></i>
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-cyan-400/30 transition-colors duration-300">
                        <i className="fas fa-check-circle text-green-400 mr-2 text-xs"></i>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-gray-700/50">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                    <i className="fas fa-share-alt text-blue-400 mr-3"></i>
                    Connect
                  </h4>
                  <div className="flex space-x-6">
                    {/* LinkedIn */}
                    <a
                      href={member.social.linkedin}
                      onClick={(e) => member.social.linkedin === "#" ? e.preventDefault() : null}
                      target={member.social.linkedin !== "#" ? "_blank" : "_self"}
                      rel={member.social.linkedin !== "#" ? "noopener noreferrer" : ""}
                      className={`group flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${member.social.linkedin !== "#" ? "hover:bg-blue-500/20 hover:border-blue-400/40 hover:scale-110" : "cursor-default"}`}
                      title={member.social.linkedin !== "#" ? "LinkedIn Profile" : "Coming Soon"}
                    >
                      <i className={`fab fa-linkedin text-2xl ${member.social.linkedin !== "#" ? "text-blue-400 group-hover:text-blue-300" : "text-gray-500"}`}></i>
                    </a>

                    {/* GitHub */}
                    <a
                      href={member.social.github}
                      onClick={(e) => member.social.github === "#" ? e.preventDefault() : null}
                      target={member.social.github !== "#" ? "_blank" : "_self"}
                      rel={member.social.github !== "#" ? "noopener noreferrer" : ""}
                      className={`group flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${member.social.github !== "#" ? "hover:bg-gray-700/50 hover:border-gray-600/50 hover:scale-110" : "cursor-default"}`}
                      title={member.social.github !== "#" ? "GitHub Profile" : "Coming Soon"}
                    >
                      <i className={`fab fa-github text-2xl ${member.social.github !== "#" ? "text-gray-300 group-hover:text-white" : "text-gray-500"}`}></i>
                    </a>

                    {/* Twitter - Optional */}
                    {member.social.twitter !== "#" && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:scale-110 transition-all duration-300"
                        title="Twitter Profile"
                      >
                        <i className="fab fa-twitter text-2xl text-cyan-400 group-hover:text-cyan-300"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Note */}
          <div className="max-w-4xl mx-auto mt-16 p-10 rounded-3xl 
                        bg-gradient-to-r from-gray-800/40 to-gray-900/40
                        border border-gray-700/50">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-8 flex-shrink-0">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaborative Excellence</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team combines deep technical expertise with creative problem-solving. We work collaboratively
                  to understand your unique challenges and deliver solutions that exceed expectations. Every project
                  benefits from our combined knowledge and passion for innovation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 rounded-xl
                       bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700
                       text-white font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105
                       transition-all duration-300"
            >
              <i className="fas fa-handshake text-2xl"></i>
              <span className="text-2xl">Work With Our Team</span>
              <i className="fas fa-arrow-right text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
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
        
        body.light .from-gray-800\\/40 {
          --tw-gradient-from: rgba(31, 41, 55, 0.4) !important;
        }
        
        body.light .to-gray-900\\/40 {
          --tw-gradient-to: rgba(17, 24, 39, 0.4) !important;
        }
        
        body.light .border-gray-700\\/50 {
          border-color: rgba(209, 213, 219, 0.5) !important;
        }
        
        /* Light mode text colors - DARK LIKE IN DARK MODE */
        body.light .text-white {
          color: #1f2937 !important;
        }
        
        body.light .text-gray-300 {
          color: #4b5563 !important;
        }
        
        body.light .text-gray-400 {
          color: #6b7280 !important;
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