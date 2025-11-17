"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface Member {
  name: string;
  role: string;
  image: string;
  branch: string;
  linkedin?: string;
  instagram?: string;
}

interface Batch {
  year: string;
  members: Member[];
}

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
  tanujPic: '/Images/Tanuj.jpg',
  tribhuvaniPic: '/Images/Tribhuvani.jpg',
  sadgunaPic: '/Images/Sadguna.jpg',
  navyaPic: '/Images/Navya.jpg',
  narenderreddyPic: '/Images/Narender Reddy.jpg',
  nagaharshanPic: '/Images/NagaHarshan.jpg',
  charishmaPic: '/Images/Charishma.jpg',
  asadPic: '/Images/Asad.jpg',
  arnavPic: '/Images/Arnav.jpg',
  srihasPic: '/Images/SriHas.jpg',
  radhikaPic: '/Images/Radhika.jpg',
  hamsikaPic: '/Images/Hamsika.jpg',

};

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
        linkedin: 'https://www.linkedin.com/in/dandhibhotla-shanmukhaditya-ab9b822a6',
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
        role: 'Club Head',
        branch: 'Information Technology',
        image: memberImages.amulyaPic,
        linkedin: 'https://www.linkedin.com/in/amulya-dugyala-88a5b429a',
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
        linkedin: 'https://www.linkedin.com/in/sravya-guruzada-5291a3285',
      },
      {
        name: 'Akshay',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.akshayPic,
        linkedin: 'https://www.linkedin.com/in/akshay-kumar-gujjula-2500a1255',
      },
      {
        name: 'Laeeq',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.laeeqPic,
        linkedin: 'https://www.linkedin.com/in/laeeq-ahmed-528b6a258',
      },
      {
        name: 'Raza',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.razaPic,
      },
      {
        name: 'Harshitha',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.harshithaPic,
        linkedin: 'https://www.linkedin.com/in/harshitha-veeramalla-59a188287',
      },
      {
        name: 'Abhiram',
        role: 'Club Head',
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
        linkedin: 'https://www.linkedin.com/in/ajish-dommeti-184501279',
      },
      {
        name: 'N Shiva Kumar',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.shivaKumarPic,
        linkedin: 'https://www.linkedin.com/in/neela-shivakumar-1b773a305',
      },
      {
        name: 'Sirimai P',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.sirimaiPic,
        linkedin: 'https://www.linkedin.com/in/sirimai-p-7572a8301',
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
        linkedin: 'https://www.linkedin.com/in/sruthi-m-478b86332',
      },
      {
        name: 'Krithika',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.krithikaPic,
        linkedin: 'https://www.linkedin.com/in/krithika-panjarla-1a368a340',
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
      {
          name: 'Hamsika',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.hamsikaPic,
          linkedin: 'https://www.linkedin.com/in/megaji-hamsikaa-352594299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
    ],
  },
  {
    year: '2024-28',
    members: [
      {
        name: 'Arnav',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.arnavPic,
        linkedin: 'https://www.linkedin.com/in/arnav-b-2a879b398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      {
        name: 'Asad',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.asadPic,
        linkedin: 'https://www.https://www.linkedin.com/in/syed-r-45060732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.com/in/neela-shivakumar-1b773a305',
      },
      {
        name: 'Charishma',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.charishmaPic,
        linkedin: 'https://whttps://www.linkedin.com/in/c-sai-tribhuvani-bharathi-9a9210396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appww.linkedin.com/in/sirimai-p-7572a8301',
      },
      {
        name: 'Naga Harshan',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.nagaharshanPic,
        linkedin: 'https://www.https://www.linkedin.com/in/avadhanula-naga-harshan-5b8ab431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.com/in/amanamoni-balaji-5225b532a',
      },
      {
        name: 'Narender Reddy',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.narenderreddyPic,
        linkedin: 'https://https://www.linkedin.com/in/narender-reddy-godala-14276b367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.linkedin.com/in/vidula-raghavendra-307aa330b/',
      },
      {
        name: 'Navya',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.navyaPic,
        linkedin: 'https://www.https://www.linkedin.com/in/navya-sangem-a0569032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.com/in/sruthi-m-478b86332',
      },
      {
        name: 'Radhika',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.radhikaPic,
        linkedin: 'https://www.https://www.linkedin.com/in/radhika-rathi-142230361.com/in/krithika-panjarla-1a368a340',
      },
      {
        name: 'Sadguna',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.sadgunaPic,
        linkedin: 'https://www.https://www.linkedin.com/in/valaboju-sadguna-4770b3314?utm_source=share_via&utm_content=profile&utm_medium=member_android.com/in/lakshya-peddapuli-711689340',
      },
      {
        name: 'Srihaas',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.srihasPic,
        linkedin: 'https://www.linkedin.com/in/srihaasiruventi/',
      },
      {
        name: 'Tanuj',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.tanujPic,
        linkedin: 'https://www.linkedin.com/in/tanuj-alugoju-55777c369',
      },
       {
        name: 'Trubhuvani',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.tribhuvaniPic,
        linkedin: 'https://www.linkedin.com/in/c-sai-tribhuvani-bharathi-9a9210396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
  },
];

export default function MembersPage() {
  const [selectedBatch, setSelectedBatch] = useState<string>('2023-27');

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
          role: 'Club Head',
          branch: 'Information Technology',
          image: memberImages.amulyaPic,
          linkedin: 'https://www.linkedin.com/in/amulya-dugyala-88a5b429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Aakash',
          role: 'Technical Lead',
          branch: 'Information Technology',
          image: memberImages.aakashPic,
          linkedin: 'https://www.linkedin.com/in/aakash-sai-arvapally-143980247',
        },
        {
          name: 'G Sravya',
          role: 'Public relations lead',
          branch: 'Information Technology',
          image: memberImages.sravyaPic,
          linkedin: 'https://www.linkedin.com/in/sravya-guruzada-5291a3285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPfnYw%2FvuRkaODxtdtJ7AvQ%3D%3D',
        },
        {
          name: 'Akshay',
          role: 'Treasurer',
          branch: 'Information Technology',
          image: memberImages.akshayPic,
          linkedin: 'https://www.linkedin.com/in/akshay-kumar-gujjula-2500a1255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BK9tMPtPDQR6%2Fnkdg6rr0cQ%3D%3D',
        },
        {
          name: 'Laeeq',
          role: 'Tech Executive',
          branch: 'Information Technology',
          image: memberImages.laeeqPic,
          linkedin: 'https://www.linkedin.com/in/laeeq-ahmed-528b6a258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BngW9sPnJT3elwIXTmOuhvw%3D%3D',
        },
        {
          name: 'Raza',
          role: 'Creative Head',
          branch: 'Information Technology',
          image: memberImages.razaPic,
          linkedin: '',
        },
        {
          name: 'Harshitha',
          role: 'Content Head',
          branch: 'Information Technology',
          image: memberImages.harshithaPic,
          linkedin: 'https://www.linkedin.com/in/harshitha-veeramalla-59a188287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
        {
          name: 'Abhiram',
          role: 'Club Head',
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
          {
          name: 'Hamsika',
          role: 'Member',
          branch: 'Information Technology',
          image: memberImages.hamsikaPic,
          linkedin: 'https://www.linkedin.com/in/megaji-hamsikaa-352594299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
      ],
    },
    {
    year: '2024-28',
    members: [
      {
        name: 'Arnav',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.arnavPic,
        linkedin: 'https://www.linkedin.com/in/arnav-b-2a879b398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      {
        name: 'Asad',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.asadPic,
        linkedin: 'https://www.linkedin.com/in/syed-r-45060732a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Charishma',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.charishmaPic,
        linkedin: 'https://www.linkedin.com/in/charishmabavandla/',
      },
      {
        name: 'Naga Harshan',
        role: 'Member',
        branch: 'Information Technology  ',
        image: memberImages.nagaharshanPic,
        linkedin: 'https://www.linkedin.com/in/avadhanula-naga-harshan-5b8ab431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Narender Reddy',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.narenderreddyPic,
        linkedin: 'https://www.linkedin.com/in/narender-reddy-godala-14276b367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Navya',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.navyaPic,
        linkedin: 'https://www.linkedin.com/in/navya-sangem-a0569032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        name: 'Radhika',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.radhikaPic,
        linkedin: 'https://www.linkedin.com/in/radhika-rathi-142230361/',
      },
      {
        name: 'Sadguna',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.sadgunaPic,
        linkedin: 'https://www.linkedin.com/in/valaboju-sadguna-4770b3314?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      },
      {
        name: 'Srihaas',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.srihasPic,
        linkedin: 'https://www.linkedin.com/in/srihaasiruventi/',
      },
      {
        name: 'Tanuj',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.tanujPic,
        linkedin: 'https://www.linkedin.com/in/tanuj-alugoju-55777c369',
      },
       {
        name: 'Tribhuvani',
        role: 'Member',
        branch: 'Information Technology',
        image: memberImages.tribhuvaniPic,
        linkedin: 'https://www.linkedin.com/in/c-sai-tribhuvani-bharathi-9a9210396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
  },
  ];

  return (
    <main className="min-h-screen bg-[#f6f7fa]">
      {/* Hero Section */}
      <section className="relative bg-[#0b0d23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Our Club Members
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Meet the talented individuals who make our tech community thrive
          </p>
        </div>
      </section>

      {/* Batch Selection Section */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {batches.map((batch) => (
              <button
                key={batch.year}
                onClick={() => setSelectedBatch(batch.year)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedBatch === batch.year
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                Batch {batch.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Members Grid Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {batches
            .filter((batch) => batch.year === selectedBatch)
            .map((batch) => (
              <div key={batch.year} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {batch.members.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-square">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400 bg-gray-100">
                          {member.name[0]}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 relative">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 mb-1">{member.role}</p>
                      <p className="text-sm text-gray-500 mb-3">{member.branch}</p>
                      <div className="flex gap-3 justify-center">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                          >
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section>
    </main>
  )}
  