import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects - matching your theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-20 md:pt-30  sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <h1 className="text-9xl sm:text-[12rem] font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
                404
              </span>
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white light:text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-rgba-gray dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>

          {/* Search Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="relative">
                  <i className="fas fa-search text-6xl text-cyan-400 opacity-50"></i>
                  <div className="absolute -top-2 -right-2">
                    <i className="fas fa-question-circle text-2xl text-blue-400 animate-bounce"></i>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-transparent rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent -rotate-12 animate-float delay-500"></div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/"
              className="group px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg
                       bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700
                       text-white shadow-lg hover:shadow-xl hover:scale-105 transform
                       border border-cyan-400/30 hover:border-cyan-400/50
                       flex items-center justify-center gap-2 min-w-[200px]"
            >
              <i className="fas fa-home group-hover:scale-110 transition-transform duration-300"></i>
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg
                       bg-transparent hover:bg-cyan-500/10
                       text-cyan-400 hover:text-white
                       border-2 border-cyan-400/50 hover:border-cyan-400
                       shadow-lg hover:shadow-cyan-500/20
                       flex items-center justify-center gap-2 min-w-[200px]"
            >
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform duration-300"></i>
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-6 rounded-2xl transition-all duration-300
                     bg-black/50 dark:bg-black/50 light:bg-gray-900/30
                     backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                     hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10
                     max-w-lg mx-auto"
          >
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-lightbulb text-white text-xl"></i>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-2">
                  Need Help?
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 text-sm">
                  If you believe this is an error or need assistance finding something, feel free to contact us.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                >
                  <i className="fas fa-paper-plane"></i>
                  Contact Support
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Animated floating elements */}
          <div className="fixed bottom-10 left-10 w-8 h-8 rounded-full bg-cyan-400/20 animate-float"></div>
          <div className="fixed top-20 right-20 w-6 h-6 rounded-full bg-blue-400/20 animate-float delay-300"></div>
          <div className="fixed top-1/2 left-20 w-4 h-4 rounded-full bg-cyan-300/20 animate-float delay-700"></div>
        </div>
      </div>

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
        
        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
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
          h1.text-9xl {
            font-size: 8rem;
          }
          
          .flex.flex-col.sm\\:flex-row > a,
          .flex.flex-col.sm\\:flex-row > button {
            width: 100%;
            min-width: auto;
            padding: 1rem 0.5rem;
          }
          
          .w-48.h-48 {
            width: 12rem;
            height: 12rem;
          }
          
          .fa-search.text-6xl {
            font-size: 4rem;
          }
        }
        
        @media (max-width: 480px) {
          h1.text-9xl {
            font-size: 6rem;
          }
          
          h2.text-3xl {
            font-size: 2rem;
          }
          
          .w-48.h-48 {
            width: 10rem;
            height: 10rem;
          }
          
          .fa-search.text-6xl {
            font-size: 3rem;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
  );
}