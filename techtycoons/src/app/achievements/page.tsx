"use client";

import Link from 'next/link';
import { certifications, extras } from '../data/achievements';

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fa]">
      {/* Hero Section */}
      <section className="relative bg-[#0b0d23] text-white py-20 px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d23]/90 to-[#0b0d23]/70">
          <img 
            src="/Images/anime/hackathon.png" 
            alt="Achievements Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Our Achievements
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing the remarkable accomplishments of our IT department members
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="mb-12 text-lg text-center text-gray-700 max-w-2xl mx-auto">
          Explore the achievements of our IT department, including certifications, publications, 
          and competition awards earned by our students under faculty guidance.
        </p>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((item, idx) => (
                <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <img 
                    src="/Images/anime/logoMain.png" 
                    alt="Certificate Icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="font-semibold text-lg text-gray-900 mb-2">{item.name}</div>
                <div className="text-sm text-gray-600 mb-1">{item.organization}, {item.year}</div>
                <div className="text-sm text-gray-500 mb-4">
                  Achieved by: <span className="font-medium">{item.achievedBy}</span>
                </div>
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Publications & Additional Achievements */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Publications and Additional Achievements
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {extras.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="font-semibold text-lg text-gray-900 mb-2">{item.name}</div>
                <div className="text-sm text-gray-600 mb-1">{item.organization}, {item.year}</div>
                <div className="text-sm text-gray-500 mb-4">
                  Achieved by: <span className="font-medium">{item.achievedBy}</span>
                </div>
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  View Publication / Certificate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
