"use client"

import React, { useState } from 'react';
// import './CSS/common.css';
// import './CSS/utility.css';
// import './CSS/members.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from './Images/logoMainn-removebg-preview.png';
import Image from 'next/image';

// Member image paths
const memberImages = {
  pavanPic: '/Images/Pavan-Pic.jpg',
  saiPrashanthPic: '/Images/Sai-Prashanth-Pic.jpg',
  aneeshPic: '/Images/Aneesh-Pic.jpg',
  varshaPic: '/Images/Varsha-Pic.jpg',
  anshuPic: '/Images/Anshu-Pic.jpg',
  manmadhPic: '/Images/Manmadh-Reddy-Pic.jpg',
  shivaPic: '/Images/Shiva-Pic.jpg',
  shivaRajPic: '/Images/Shiva-Raj-Pic.jpg',
  siriPic: '/Images/Siri-Pic.jpg',
  keerthanaPic: '/Images/Keerthana-Pic.jpg',
  shanmukhPic: '/Images/Shanmukh-Pic.jpg',
  nithinPic: '/Images/Nithin-Pic.jpg',
  sreejaPic: '/Images/Sreeja-Pic.jpg',
  nikeshPic: '/Images/Nikesh-Pic.jpg',
  amulyaPic: '/Images/Amulya.jpg',
  aakashPic: '/Images/Aakash.jpg',
  sravyaPic: '/Images/sravya.jpg',
  akshayPic: '/Images/akshay.jpg',
  laeeqPic: '/Images/laeeq-Ahmed.jpg',
  razaPic: '/Images/Raza.jpg',
  harshithaPic: '/Images/Harshitha.jpg',
  abhiramPic: '/Images/Abhiram.jpg',
  anishPic: '/Images/Aneesh Dommeti.jpg',
  shivaKumarPic: '/Images/N Shiva Kumar.jpg',
  sirimaiPic: '/Images/Sirimai P.jpg',
  balajiPic: '/Images/Amanamoni Balaji.jpg',
  vidulaPic: '/Images/Vidula Raghavendra.jpg',
  sruthiPic: '/Images/sruthi.jpg',
  krithikaPic: '/Images/Krithika.jpg',
  lakshyaPic: '/Images/Lakshya.jpg',
  abhishekPic: '/Images/P Abhishek.jpg',
  // Add more member images as needed
};
import laeeqPic from './Images/laeeq-Ahmed.jpg';
import razaPic from './Images/Raza.jpg';
import harshithaPic from './Images/Harshitha.jpg';
import abhiramPic from './Images/Abhiram.jpg';
import anishPic from './Images/Aneesh Dommeti.jpg';
import shivaKumarPic from './Images/N Shiva Kumar.jpg';
import sirimaiPic from './Images/Sirimai P.jpg';
import balajiPic from './Images/Amanamoni Balaji.jpg';
import vidulaPic from './Images/Vidula Raghavendra.jpg';
import sruthiPic from './Images/sruthi.jpg';
import krithikaPic from './Images/Krithika.jpg';
import lakshyaPic from './Images/Lakshya.jpg';
import abhishekPic from './Images/P Abhishek.jpg';

const MembersPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Member data grouped by batch
  const batches = [
    {
      year: '2019-23',
      members: [
        {
          name: 'R. Pavan Kumar Reddy',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.pavanPic,
          linkedin: 'https://www.linkedin.com/in/pavankumarreddy-r-19276618b/',
        },
        {
          name: 'USVSN Sai Prashanth',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.saiPrashanthPic,
          linkedin: 'https://www.linkedin.com/in/usvsnsp/',
        },
        {
          name: 'Aneesh Malapaka',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.aneeshPic,
          linkedin: 'https://www.linkedin.com/in/aneesh-malapaka/',
        },
        {
          name: 'Srivarsha Kamishetty',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.varshaPic,
          linkedin: 'https://www.linkedin.com/in/sri-varsha-kamishetty-1715421b5/',
        },
      ],
    },
    {
      year: '2020-24',
      members: [
        {
          name: 'Anshu Puttapaka',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.anshuPic,
          linkedin: 'https://www.linkedin.com/in/anshu-puttapaka-465632235',
        },
        {
          name: 'Manmadh Reddy',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.manmadhPic,
          linkedin: 'https://www.linkedin.com/in/manmadh-reddy-505914213/',
        },
        {
          name: 'Shiva Indavarapu',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.shivaPic,
          linkedin: 'https://www.linkedin.com/in/shiva-indavarapu',
        },
        {
          name: 'Sakilam Shiva Raj',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.shivaRajPic,
          linkedin: 'https://www.linkedin.com/in/sakilamshivaraj/',
        },
        {
          name: 'Sri Siri',
          role: 'Alumni',
          branch: 'Information Technology',
          image: memberImages.siriPic,
          linkedin: 'https://www.linkedin.com/in/sri-siri-486951245/',
        },
      ],
    },
    {
      year: '2021-25',
      members: [
        {
          name: 'T Keerthana',
          role: 'Club Lead',
          branch: 'Information Technology',
          image: memberImages.keerthanaPic,
          linkedin: 'https://www.linkedin.com/in/keerthana-todimela-0a238625a',
        },
        {
          name: 'D. Shanmukhaditya',
          role: 'Networking Associate',
          branch: 'Information Technology',
          image: memberImages.shanmukhPic,
          linkedin: 'https://www.linkedin.com/in/dandhibhotla-shanmukhaditya-ab9b822a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'M Nithin',
          role: 'Logistics Associate',
          branch: 'Information Technology',
          image: memberImages.nithinPic,
          linkedin: 'https://www.linkedin.com/in/nithin-reddy-m-9623b9259',
        },
        {
          name: 'Sreeja Pagidipala',
          role: 'Networking Associate',
          branch: 'Information Technology',
          image: memberImages.sreejaPic,
          linkedin: 'https://www.linkedin.com/in/sreeja-pagidipala-376191253/',
        },
        {
          name: 'Vasa Nikesh',
          role: 'Tech Associate',
          branch: 'Information Technology',
          image: memberImages.nikeshPic,
          linkedin: 'https://www.linkedin.com/in/vasa-nikesh-1b004325a/',
        },
      ],
    },
    {
      year: '2022-26',
      members: [
        {
          name: 'Amulya',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.amulyaPic,
          linkedin: 'https://www.linkedin.com/in/amulya-dugyala-88a5b429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Aakash',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.aakashPic,
          linkedin: 'https://www.linkedin.com/in/aakash-sai-arvapally-143980247',
        },
        {
          name: 'G Sravya',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.sravyaPic,
          linkedin: 'https://www.linkedin.com/in/sravya-guruzada-5291a3285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPfnYw%2FvuRkaODxtdtJ7AvQ%3D%3D',
        },
        {
          name: 'Akshay',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.akshayPic,
          linkedin: 'https://www.linkedin.com/in/akshay-kumar-gujjula-2500a1255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BK9tMPtPDQR6%2Fnkdg6rr0cQ%3D%3D',
        },
        {
          name: 'Laeeq',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.laeeqPic,
          linkedin: 'https://www.linkedin.com/in/laeeq-ahmed-528b6a258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BngW9sPnJT3elwIXTmOuhvw%3D%3D',
        },
        {
          name: 'Raza',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.razaPic,
          linkedin: '',
        },
        {
          name: 'Harshitha',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.harshithaPic,
          linkedin: 'https://www.linkedin.com/in/harshitha-veeramalla-59a188287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Abhiram',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.abhiramPic,
          linkedin: 'https://www.linkedin.com/in/ravula-abhiram-880b29216',
          instagram: 'https://www.instagram.com/abhiramravula/',
        },
      ],
    },
    {
      year: '2023-27',
      members: [
        {
          name: 'Anish Dommeti',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.anishPic,
          linkedin: 'https://www.linkedin.com/in/ajish-dommeti-184501279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'N Shiva Kumar',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.shivaKumarPic,
          linkedin: 'https://www.linkedin.com/in/neela-shivakumar-1b773a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Sirimai P',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.sirimaiPic,
          linkedin: 'https://差し込む。com/in/sirimai-p-7572a8301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Amanamoni Balaji',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.balajiPic,
          linkedin: 'https://www.linkedin.com/in/amanamoni-balaji-5225b532a',
        },
        {
          name: 'Vidula Raghavendra',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.vidulaPic,
          linkedin: 'https://www.linkedin.com/in/vidula-raghavendra-307aa330b/',
        },
        {
          name: 'Sruthi M',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.sruthiPic,
          linkedin: 'https://www.linkedin.com/in/sruthi-m-478b86332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        },
        {
          name: 'Krithika',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.krithikaPic,
          linkedin: 'https://www.linkedin.com/in/krithika-panjarla-1a368a340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Peddapuli Lakshya',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.lakshyaPic,
          linkedin: 'https://www.linkedin.com/in/lakshya-peddapuli-711689340',
        },
        {
          name: 'P Abhishek',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.abhishekPic,
          linkedin: 'http://www.linkedin.com/in/p-abhishek1',
        },
      ],
    },
  ];

  return (
    <div suppressHydrationWarning={true}>
      <div className="header--box">
        <nav className="flex just-between" id="navbar">
          <div className="logobox">
            <a className="placeholder" href="/" rel="noopener noreferrer">
              <img className="logoImg" src="/Images/anime/LogoNew.png" alt="logo" />
            </a>
          </div>
          <div className="desktop--items">
            <ul id="desk--ul">
              <li className="mob--list">
                <a href="./eventsPage.html" rel="noopener noreferrer">Events</a>
              </li>
              <li className="mob--list">
                <a href="./galleryPage.html" rel="noopener noreferrer">Gallery</a>
              </li>
              <li className="mob--list">
                <a href="./blogPage.html" rel="noopener noreferrer">Blog</a>
              </li>
              <li className="mob--list">
                <a href="/members" rel="noopener noreferrer">Members</a>
              </li>
              <li className="mob--list">
                <a href="./achievements.html" rel="noopener noreferrer">Achievements</a>
              </li>
            </ul>
          </div>
          <div className="mobile--menu flex flex-col" id="mob" onClick={toggleMenu}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          <div className={`mobmenu--items--hidden ${isMenuOpen ? 'mobmenu--items--visible' : ''}`} id="dropdown">
            <ul className="mob--ul">
              <li className="mob--list">
                <a href="./eventsPage.html" rel="noopener noreferrer">Events</a>
              </li>
              <li className="mob--list">
                <a href="./galleryPage.html" rel="noopener noreferrer">Gallery</a>
              </li>
              <li className="mob--list">
                <a href="./blogPage.html" rel="noopener noreferrer">Blog</a>
              </li>
              <li className="mob--list">
                <a href="./membersPage.html" rel="noopener noreferrer">Members</a>
              </li>
              <li className="mob--list">
                <a href="./achievements.html" rel="noopener noreferrer">Achievements</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="membersMain">
        <main>
          <div className="membersLayout">
            <h2>Our Club Members</h2>
            <hr />
          </div>
          {batches.map((batch) => (
            <div key={batch.year}>
              <h2>Batch {batch.year}</h2>
              <hr />
              <div className="membersBox">
                {batch.members.map((member) => (
                  <div className="container" key={member.name}>
                    <div className="banner-img"></div>
                    <Image 
                      src={member.image} 
                      alt={`${member.name}'s profile`}
                      width={200}
                      height={200}
                      className="profile-img"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/fallback-profile.jpg';
                      }}
                    />
                    <h1 className="name">{member.name || 'Member'}</h1>
                    <p className="description">
                      Role: <strong>{member.role}</strong>
                    </p>
                    <div className="branch">
                      <h4>{member.branch}</h4>
                    </div>
                    <div className="icon">
                      {member.linkedin && (
                        <div className="icons l">
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                        </div>
                      )}
                      {member.instagram && (
                        <div className="icons i" style={{ boxShadow: 'none' }}>
                          <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default MembersPage;
