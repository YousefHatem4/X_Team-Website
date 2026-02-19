import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return <>
        {/* landing section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-15 md:pt-30">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                {/* Single unified gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main headings */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="block text-rgba-gray dark:text-gray-300 light:text-gray-600 mb-2">
                            Building products.
                        </span>
                        <span className="block text-rgba-cyan bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Delivering intelligent solutions.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl text-rgba-gray dark:text-gray-400 light:text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We design and build software, AI systems, and digital products
                        that transform businesses and enhance user experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/work"
                            className="group px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg
                                     bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
                                     text-white shadow-lg hover:shadow-xl hover:scale-105 transform
                                     border border-cyan-400/30 hover:border-cyan-400/50
                                     flex items-center justify-center gap-2 min-w-[200px]"
                        >
                            <span>View Our Work</span>
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                        </Link>

                        <Link
                            to="/contact"
                            className="group px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg
                                     bg-transparent hover:bg-cyan-500/10
                                     text-cyan-400 hover:text-white
                                     border-2 border-cyan-400/50 hover:border-cyan-400
                                     shadow-lg hover:shadow-cyan-500/20
                                     flex items-center justify-center gap-2 min-w-[200px]"
                        >
                            <i className="fas fa-paper-plane group-hover:rotate-12 transition-transform duration-300"></i>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* our products section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                {/* Single unified gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

                {/* Subtle overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent"></div>

                {/* Gradient orbs */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Products
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-rgba-gray dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
                        Innovative software solutions designed to revolutionize education and business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* published products card - DARKER */}
                    <div className="p-8 rounded-2xl transition-all duration-300
                                  bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                                  backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                                  hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20
                                  hover:scale-[1.02] transform">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                                <i className="fas fa-check-circle text-white text-xl"></i>
                            </div>
                            <h1 className="text-3xl font-bold text-white dark:text-white light:text-white">Published Products</h1>
                        </div>

                        <div className="space-y-6">
                            <div className="p-5 rounded-xl bg-gradient-to-r from-gray-800/60 to-gray-900/60 dark:from-gray-800/60 dark:to-gray-900/60 light:from-gray-800/20 light:to-gray-900/20 
                                          border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                                          hover:border-green-400/30 transition-all duration-300">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                                        <i className="fas fa-robot text-white"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-400 dark:text-green-400 light:text-green-400">EduBot</h3>
                                        <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300 mt-1">AI Educational Assistant</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                                        <i className="fas fa-globe mr-1"></i> Live & Active
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-gray-800/40 to-gray-900/40 dark:from-gray-800/40 dark:to-gray-900/40 light:from-gray-800/20 light:to-gray-900/20
                                          border border-gray-700/30 dark:border-gray-700/30 light:border-gray-600/30">
                                <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 text-sm">
                                    <i className="fas fa-star text-yellow-400 mr-2"></i>
                                    Successfully serving thousands of users worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* coming soon projects card - DARKER */}
                    <div className="p-8 rounded-2xl transition-all duration-300
                                  bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                                  backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                                  hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20
                                  hover:scale-[1.02] transform">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                                <i className="fas fa-clock text-white text-xl"></i>
                            </div>
                            <h1 className="text-3xl font-bold text-white dark:text-white light:text-white">Coming Soon Projects</h1>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: "Coach Link", desc: "Smart Gym Platform", icon: "fas fa-dumbbell", color: "from-red-500 to-pink-600" },
                                { name: "MR X", desc: "Smart AI Teacher Platform", icon: "fas fa-chalkboard-teacher", color: "from-purple-500 to-indigo-600" },
                                { name: "Internal X", desc: "Smart AI Company Platform", icon: "fas fa-building", color: "from-blue-500 to-cyan-600" },
                                { name: "MF Academy", desc: "Smart Match Fit Sport Platform", icon: "fas fa-dumbbell", color: "from-red-500 to-pink-600" },
                                { name: "CodeGahez", desc: "Smart E-commerce Platform", icon: "fas fa-shopping-cart", color: "from-orange-500 to-yellow-600" }
                            ].map((project, index) => (
                                <div key={index} className="group/item p-4 rounded-lg 
                                                          bg-gradient-to-r from-gray-800/40 to-gray-900/40 dark:from-gray-800/40 dark:to-gray-900/40 light:from-gray-800/20 light:to-gray-900/20
                                                          border border-gray-700/30 dark:border-gray-700/30 light:border-gray-600/30
                                                          hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10 hover:border-purple-400/30 
                                                          transition-all duration-300">
                                    <div className="flex items-center">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mr-4`}>
                                            <i className={`${project.icon} text-white text-sm`}></i>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-white dark:text-white light:text-white group-hover/item:text-purple-300 transition-colors duration-300">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300">
                                                {project.desc}
                                            </p>
                                        </div>
                                        <div className="ml-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                                <i className="fas fa-hourglass-half mr-1"></i> Coming Soon
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50">
                            <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 text-sm">
                                <i className="fas fa-lightbulb text-purple-400 mr-2"></i>
                                More innovative projects in the pipeline. Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA at bottom */}
                <div className="text-center mt-16">
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg
                                 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
                                 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105
                                 transition-all duration-300"
                    >
                        <i className="fas fa-eye"></i>
                        Explore All Projects
                    </Link>
                </div>
            </div>
        </section>

        {/* client solutions section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                {/* Single unified gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

                {/* Subtle overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent"></div>

                {/* Gradient orbs */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl"></div>

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                            Client Solutions
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-rgba-gray dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
                        Customized solutions tailored to meet your specific business needs and objectives
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl transition-all duration-300
                          bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                          backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                          hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20
                          hover:scale-[1.01] transform">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-4">
                                <i className="fas fa-handshake text-white text-2xl"></i>
                            </div>
                            <h1 className="text-3xl font-bold text-white dark:text-white light:text-white">Published Solutions</h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Web Development", desc: "Modern, responsive websites and web applications", icon: "fas fa-code", color: "from-blue-500 to-cyan-500" },
                                { title: "AI Systems", desc: "Intelligent automation and machine learning solutions", icon: "fas fa-brain", color: "from-purple-500 to-pink-500" },
                                { title: "Custom Software", desc: "Tailored software solutions for unique business needs", icon: "fas fa-laptop-code", color: "from-green-500 to-emerald-500" },
                                { title: "Freelance & Contract Projects", desc: "Flexible engagement models for project-based work", icon: "fas fa-briefcase", color: "from-orange-500 to-yellow-500" }
                            ].map((solution, index) => (
                                <div key={index} className="group p-6 rounded-xl transition-all duration-300
                                                  bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-800/50 dark:to-gray-900/50 light:from-gray-800/30 light:to-gray-900/30
                                                  border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                                                  hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10">
                                    <div className="flex items-start">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                                            <i className={`${solution.icon} text-white text-lg`}></i>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white dark:text-white light:text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                                {solution.title}
                                            </p>
                                            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-300">
                                                {solution.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="text-left">
                                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 mb-2">
                                        <i className="fas fa-calendar-check text-blue-400 mr-2"></i>
                                        Ready to discuss your project requirements?
                                    </p>
                                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-300">
                                        We offer free consultations to understand your needs
                                    </p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                                     bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700
                                     text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105
                                     transition-all duration-300"
                                >
                                    <i className="fas fa-comments"></i>
                                    Schedule Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* services section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                {/* Single unified gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

                {/* Subtle overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent"></div>

                {/* Gradient orbs */}
                <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
                <div className="absolute -top-32 right-1/4 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-cyan-500">
                            Services
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-rgba-gray dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
                        Comprehensive technology solutions to drive your business forward
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "AI-Powered Applications",
                            desc: "Intelligent systems with machine learning and NLP",
                            icon: "fas fa-brain",
                            color: "from-purple-500 to-pink-600",
                            features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
                        },
                        {
                            title: "Web & System Development",
                            desc: "Full-stack solutions built for scale",
                            icon: "fas fa-laptop-code",
                            color: "from-blue-500 to-cyan-600",
                            features: ["Frontend Development", "Backend Systems", "API Integration", "Cloud Deployment"]
                        },
                        {
                            title: "Educational Platforms",
                            desc: "Interactive learning management systems",
                            icon: "fas fa-chalkboard-teacher",
                            color: "from-green-500 to-emerald-600",
                            features: ["LMS Development", "Interactive Content", "Progress Tracking", "Mobile Learning"]
                        },
                        {
                            title: "Custom Freelance Solutions",
                            desc: "Tailored development for your unique needs",
                            icon: "fas fa-briefcase",
                            color: "from-orange-500 to-yellow-600",
                            features: ["Project-Based Work", "Flexible Engagement", "Quick Turnaround", "Specialized Expertise"]
                        }
                    ].map((service, index) => (
                        <div key={index} className="group p-6 rounded-2xl transition-all duration-300
                                                  bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                                                  backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                                                  hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20
                                                  hover:scale-[1.03] transform">
                            <div className="flex flex-col h-full">
                                {/* Icon and Title */}
                                <div className="flex items-center mb-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                                        <i className={`${service.icon} text-white text-xl`}></i>
                                    </div>
                                    <h1 className="text-2xl font-bold text-white dark:text-white light:text-white">{service.title}</h1>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 dark:text-gray-300 light:text-gray-300 mb-6 flex-grow">
                                    {service.desc}
                                </p>

                                {/* Features */}
                                <div className="mt-4 pt-6 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50">
                                    <p className="text-sm font-medium text-gray-400 dark:text-gray-400 light:text-gray-400 mb-3">Key Features:</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-300 dark:text-gray-300 light:text-gray-300">
                                                <i className="fas fa-check-circle text-green-400 mr-2 text-xs"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-6 pt-4 border-t border-gray-700/30 dark:border-gray-700/30 light:border-gray-600/30">
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg
                                                 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 light:from-gray-800 light:to-gray-900
                                                 text-gray-300 hover:text-white font-medium text-sm
                                                 border border-gray-700/50 hover:border-purple-400/30
                                                 transition-all duration-300 group/btn"
                                    >
                                        Learn More
                                        <i className="fas fa-arrow-right ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
                        <i className="fas fa-cogs"></i>
                        Explore All Services
                    </Link>
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
            
            .light .text-rgba-cyan {
                color: #0891b2;
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
            
            /* Light mode card styling - DARKER */
            .light .bg-black\\/50 {
                background-color: rgba(30, 41, 59, 0.7) !important;
            }
            
            .light .bg-gray-900\\/30 {
                background-color: rgba(15, 23, 42, 0.7) !important;
            }
            
            .light .bg-gray-800\\/40 {
                background-color: rgba(30, 41, 59, 0.4) !important;
            }
            
            .light .bg-gray-900\\/40 {
                background-color: rgba(15, 23, 42, 0.4) !important;
            }
            
            .light .bg-gray-800\\/50 {
                background-color: rgba(30, 41, 59, 0.5) !important;
            }
            
            .light .bg-gray-900\\/50 {
                background-color: rgba(15, 23, 42, 0.5) !important;
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
            
            .light .from-cyan-500 {
                --tw-gradient-from: #0891b2;
            }
            
            .light .to-blue-600 {
                --tw-gradient-to: #2563eb;
            }
            
            .light .hover\\:from-cyan-600 {
                --tw-gradient-from: #0e7490;
            }
            
            .light .hover\\:to-blue-700 {
                --tw-gradient-to: #1d4ed8;
            }
            
            /* Custom scrollbar styles (same as work page) */
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
            
            /* Mobile button sizing */
            @media (max-width: 640px) {
                .flex.flex-col.sm\\:flex-row > a {
                    width: 100%;
                    min-width: auto;
                    padding: 1rem 0.5rem;
                    height: 3.5rem;
                }
                
                /* Center buttons content */
                a.inline-flex {
                    width: 100%;
                    justify-content: center;
                    padding: 1rem 0.5rem !important;
                }
                
                /* Responsive cards */
                .grid.grid-cols-1.lg\\:grid-cols-2 > div,
                .grid.grid-cols-1.md\\:grid-cols-2 > div,
                .grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 > div {
                    padding: 1.5rem;
                }
                
                .grid.grid-cols-1.lg\\:grid-cols-2 h1,
                .grid.grid-cols-1.md\\:grid-cols-2 h1 {
                    font-size: 1.75rem;
                }
                
                .grid.grid-cols-1.lg\\:grid-cols-2 p,
                .grid.grid-cols-1.md\\:grid-cols-2 p {
                    font-size: 0.95rem;
                }
            }
            
            /* Animations */
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            
            /* Smooth transitions */
            * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
        `}</style>
    </>
}