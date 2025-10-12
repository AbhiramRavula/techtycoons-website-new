"use client";

import AccordionCarousel from "../components/AccordionCarousel";
import Image from 'next/image';

// Helper function to convert Google Drive sharing URL to direct image URL
const getGoogleDriveDirectUrl = (shareUrl: string) => {
  const fileId = shareUrl.match(/\/d\/(.+?)\/view/)?.[1];
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : shareUrl;
};

// Gallery events data
const galleryEvents = [
  {
    title: "Event 1: Inaugural of club & Launch of TechTycoons Website",
    images: [
      getGoogleDriveDirectUrl("https://drive.google.com/file/d/1bOxMoM8ev_zORcCH91GpZCpvVautz_Jw/view?usp=sharing"),
      getGoogleDriveDirectUrl("https://drive.google.com/file/d/1z9oyYKwVBdxA6J325hR13YRT4DfVKg3S/view?usp=drive_link"),
      getGoogleDriveDirectUrl("https://drive.google.com/file/d/1orVkosJL8hVf8tAURhy5ROdOujNPg58O/view?usp=drive_link")
    ],
    description: "The grand inauguration of Tech Tycoons club featured distinguished guests and enthusiastic students coming together to mark the beginning of our technical journey."
  },
  {
    title: "Event 2: Seminar - Transition from College Life to Work Life",
    images: [
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
    ],
  },
  {
    title: "Event 3: Kwiz: Technical Knowledge Competition",
    images: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Students showcasing their technical knowledge through an engaging quiz competition focused on IT and computer science."
  },
  {
    title: "Event 4: Research Article Writing Workshop",
    images: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Expert-led workshop on research paper writing methodologies and best practices in academic publishing."
  },
  {
    title: "Event 5: Tech Gaming & Design Challenge",
    images: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "A fun-filled day of competitive gaming, logo design challenges, and an exciting tech treasure hunt."
  },
  {
    title: "Event 6: Master Class on Future Technology",
    images: [
      "/Images/anime/events/masterclass1.jpg",
      "/Images/anime/events/masterclass2.jpg",
      "/Images/anime/events/masterclass3.jpg",
    ],
  },
  {
    title: "Event 7: Career Guidance in Tech Field",
    images: [
      "/Images/anime/events/career1.jpg",
      "/Images/anime/events/career2.jpg",
      "/Images/anime/events/career3.jpg",
    ],
  },
  {
    title: "Event 8: Smart MECS HACKATHON 2024",
    images: [
       getGoogleDriveDirectUrl("https://drive.google.com/file/d/1ah-MqBwLLJx8BvhTPYkQE8A58dFYTEDT/view?usp=sharing"),
      getGoogleDriveDirectUrl("https://drive.google.com/file/d/1tJhhgZfB9GlNrv52elJf3vggp0MWZswD/view?usp=sharing"),
      getGoogleDriveDirectUrl("https://drive.google.com/file/d/1Ah-dMQA8V2P1Kk5bNlbuM4T1wVox5p0M/view?usp=sharing")
    ],
  },
  {
    title: "Event 9: Seminar on current trends in business analytics",
    images: [
      "/Images/anime/events/business1.jpg",
      "/Images/anime/events/business2.jpg",
      "/Images/anime/events/business3.jpg",
    ],
  },
  {
    title: "Event 10: Workshop on IBM SkillBuild",
    images: [
      "/Images/anime/events/ibm1.jpg",
      "/Images/anime/events/ibm2.jpg",
      "/Images/anime/events/ibm3.jpg",
    ],
  },
  {
    title: "Event 11: Seminar on AI",
    images: [
      "/Images/anime/events/ai1.jpg",
      "/Images/anime/events/ai2.jpg",
      "/Images/anime/events/ai3.jpg",
    ],
  },
  {
    title: "Event 12: Workshop on Stress management and resilience",
    images: [
      "/Images/anime/events/stress1.jpg",
      "/Images/anime/events/stress2.jpg",
      "/Images/anime/events/stress3.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fa]">
      {/* Banner Section */}
      <section className="relative bg-[#0b0d23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300" style={{ fontFamily: "var(--font-rajdhani)" }}>
            Explore our events through pictures
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <AccordionCarousel events={galleryEvents} />
        
        {/* External Links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center items-center">
          <a
            href="https://drive.google.com/drive/folders/1qM8qJEo_Pm-7K9lz4kXzmill6WeKpWhh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
          >
            View All Photos
          </a>
          <a
            href="https://drive.google.com/drive/folders/1_gPWtpCXkNc5vIcjbWRc6a03iVunVcXk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0b0d23] text-white rounded-full hover:bg-gray-900 transition-colors text-center"
          >
            View Event Reports
          </a>
        </div>
      </section>
    </main>
  );
}
