'use client';

import { useState } from 'react';
import Image from "next/image";
import noirLogo from './images/Noir_white_transparentbg.png';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Animated Background - stays in place */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20 transition-opacity duration-700">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
      </div>

      {/* First Page - Logo */}
      <div 
        className={`relative z-10 flex items-center justify-center min-h-screen transition-transform duration-700 ease-in-out ${
          currentPage >= 1 ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer">
            <Image
              src={noirLogo}
              alt="Noir Brewing logo"
              width={500}
              height={300}
            />
          </div>
          
          <div 
            onClick={() => setCurrentPage(1)}
            className="flex flex-col items-center gap-1 mt-24 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <p className="text-lg font-medium text-white">Learn more</p>
            <svg 
              className="w-6 h-6 animate-bounce text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Second Page - About */}
      <div 
        className={`relative z-10 flex items-center justify-center min-h-screen transition-transform duration-700 ease-in-out ${
          currentPage === 0 ? 'translate-y-0' : currentPage === 1 ? '-translate-y-full' : '-translate-y-[200vh]'
        }`}
      >
        {/* Up Chevron */}
        <div 
          onClick={() => setCurrentPage(0)}
          className="absolute top-8 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>

        {/* Content Box */}
        <div className="max-w-2xl mx-auto px-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-8">Quench your creativity and thirst</h1>
          <p className="text-lg leading-relaxed">
            Noir Brewing was created to make beer feel more welcoming, more creative, and more you. Founded in Brooklyn, Noir is rooted in the belief that craft beer should invite everyone in — not just those who already speak the language. Our brews are designed to be smooth, flavorful, and approachable, while still carrying an edge inspired by alternative music, art, and culture. Noir is beer for the curious, the creative, and the ones who don't quite fit the mold.
          </p>
        </div>

        {/* Down Chevron */}
        <div 
          onClick={() => setCurrentPage(2)}
          className="absolute bottom-8 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg 
            className="w-8 h-8 text-white animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Third Page - Contact */}
      <div 
        className={`relative z-10 flex items-center justify-center min-h-screen transition-transform duration-700 ease-in-out ${
          currentPage === 2 ? '-translate-y-[200vh]' : 'translate-y-0'
        }`}
      >
        {/* Up Chevron */}
        <div 
          onClick={() => setCurrentPage(1)}
          className="absolute top-8 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>

        {/* Contact Content */}
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-12">Where to find us 🔥</h2>
          
          <div className="flex items-center justify-center gap-8">
            {/* Instagram Icon */}
            <a 
              href="https://instagram.com/noirbrewing" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 hover:scale-110 transition-all duration-300"
            >
              <svg 
                className="w-16 h-16" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Email Icon */}
            <a 
              href="mailto:noirbrewing@gmail.com"
              className="hover:opacity-70 hover:scale-110 transition-all duration-300"
            >
              <svg 
                className="w-16 h-16" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
