"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ParticlesComponent = dynamic(() => import('@/app/components/particles'), {
  loading: () => <div className="absolute inset-0 bg-[#0b0d23]" />,
  ssr: false
});

export default function HomeContent() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[#0b0d23]" />
        <ParticlesComponent />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8 tracking-wider transform hover:scale-105 transition-transform duration-300 animate-pulse" style={{ fontFamily: 'var(--font-orbitron)', fontWeight: 700 }}>
            Tech Tycoons
          </h1>
          <p className="text-2xl text-white mb-4 tracking-wide" style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 500 }}>
            Binding Technology with People
          </p>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A technical club as an initiative by the Department of Information Technology,{' '}
            <a href="https://matrusri.edu.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">
              Matrusri Engineering College
            </a>
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#f6f7fa]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Vision</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-12" />
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img src="/Images/anime/vision.png" alt="Vision" className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="md:w-2/3">
              <p className="text-xl text-gray-900 leading-relaxed">
                <span className="inline-block mr-4 text-blue-600">→</span>
                To foster development of technical and technological skills amongst students in
                various aspects of programming and hardware, make them aware of industry ready
                practices used in the field of CS and IT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Mission</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-12" />
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img src="/Images/anime/mission.png" alt="Mission" className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-6">
                <li className="text-xl text-gray-900 flex items-start">
                  <span className="mr-4 text-blue-600">→</span>
                  To encourage students to participate in world-class competitions.
                </li>
                <li className="text-xl text-gray-900 flex items-start">
                  <span className="mr-4 text-blue-600">→</span>
                  To educate enthusiastic students in learning design and development.
                </li>
                <li className="text-xl text-gray-900 flex items-start">
                  <span className="mr-4 text-blue-600">→</span>
                  To enrich student's programming practices by inculcating industry-wide coding style.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Events by us</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 md:mb-12" />
          <div className="space-y-4 md:space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl">Here at Tech Tycoons, we offer a wide range of events to build technical and communication skills amongst our participants.</p>
            <p className="text-lg md:text-xl">These events also establish industry-ready skills amongst our audience.</p>
            <p className="text-lg md:text-xl mb-8">A sneak-peak at a couple of events organized by us include:</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">1) Technical Quiz</h3>
            <img src="Images/anime/quiz.png" alt="Technical Quiz" className="w-full h-48 object-contain mb-4" />
            <p className="text-base md:text-lg text-center">
              Quizzes would be designed to cultivate student's mind by asking inquisitive questionnaires. We will test student's problem solving and theoretical knowledge in tech.
              These would be conducted in increasing order of difficulty.
            </p>
          </div>

          {/* Event 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">2) Seminars</h3>
            <img src="Images/anime/seminars.png" alt="Seminars" className="w-full h-48 object-contain mb-4" />
            <p className="text-base md:text-lg text-center">
              Seminars would be geared towards a wide range of IT domains. This would introduce applied-programming practices to make them ready for the real experiences.
            </p>
          </div>

          {/* Event 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">3) Hackathons</h3>
            <img src="Images/anime/hackathon.png" alt="Hackathons" className="w-full h-48 object-contain mb-4" />
            <p className="text-base md:text-lg text-center">
              Hackathons would be organized to improve collaboration abilities of students. They will serve as a medium to introduce cutting edge technologies to students and make them industry-ready.
            </p>
          </div>

          {/* Event 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">4) Coding competitions</h3>
            <img src="Images/anime/codingComp.png" alt="Coding Competitions" className="w-full h-48 object-contain mb-4" />
            <p className="text-base md:text-lg text-center">
              Coding competitions are organized to boost student's problem solving abilities. This would prepare them to face world-class coding competitions like ICPC, Google CodeJam, Meta HackerCup.
            </p>
          </div>

          {/* Event 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold mb-4">5) Paper Presentations</h3>
            <img src="Images/anime/seminars.png" alt="Paper Presentations" className="w-full h-48 object-contain mb-4" />
            <p className="text-base md:text-lg text-center">
              Paper presentations will be organized to aid innovative thinking in students. With a number of themes to choose from, paper presentations teach the process of innovation to students.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* HOD and Club Incharge Section */}
      <section className="bg-[#f6f7fa] text-black py-16 px-8">
        {/* <h2 className="text-3xl font-bold mb-2">Message from the H.O.D and the Club Incharge</h2> */}
        <div className="h-1 w-full bg-yellow-400 mb-8" />
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center">
            <img src="/Images/SrinivasSir.jpg" alt="Dr. J. Srinivas" className="rounded-full w-40 h-40 object-cover mb-2 border-4 border-white shadow-lg" />
            <div className="text-center">
              <p className="font-bold text-blue-800 text-lg">Dr. J. Srinivas</p>
              <p className="text-xs">Professor & Head of the Department Information Technology</p>
            </div>
            <blockquote className="italic text-lg text-center mt-8 md:mt-0">
              <span className="text-3xl font-serif">”</span><br />
              <span className="font-semibold">Let noble thoughts come from all directions </span><br />
              <span className="text-3xl font-serif">”</span>
            </blockquote>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Images/Mrs.k.mounika.jpg" alt="Mounika " className="rounded-full w-40 h-40 object-cover mb-2 border-4 border-white shadow-lg" />
            <div className="text-center">
              <p className="font-bold text-blue-800 text-lg">Mrs.K.Mounika </p>
              <p className="text-xs">Assistant Professor Dept IT</p>
            </div>
            {/* <blockquote className="italic text-lg text-center mt-8 md:mt-0">
              <span className="text-3xl font-serif">”</span><br />
              Let noble thoughts come from all directions<br />
              <span className="text-3xl font-serif">”</span>
            </blockquote> */}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-[#f6f7fa] text-black py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Contact Us</h2>
          <div className="h-1 w-full bg-yellow-400 mb-8" />
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg md:text-xl">Get in touch with us for more information</p>
              <p className="text-lg md:text-xl">If you need help or have a question, we are here with the following social media presence</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a 
                href="mailto:techtycoons.drive@gmail.com" 
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="Email us"
              >
                <img src="/mail.svg" alt="Email" className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tech-tycoons-club-423233362/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="Visit our LinkedIn"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/techtycoons_mecs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/techtycoons" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors duration-300"
                aria-label="View our GitHub"
              >
                <img src="/github.svg" alt="GitHub" className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
