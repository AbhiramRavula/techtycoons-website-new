// Helper function to convert Google Drive sharing URL to direct image URL
const getGoogleDriveDirectUrl = (shareUrl: string) => {
  const fileId = shareUrl.match(/\/d\/(.+?)\/view/)?.[1];
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : shareUrl;
};

export const events = [
  {
    title: "Inaugural of club and Launch of TechTycoons Website",
    details: "Inaugural of club and Launch of TechTycoons Website, around 100 students attend the event, Dr. Hanumantha Rao, Principal-MECS guest",
    date: "12/30/2022, 11:00:00 AM",
    image:  getGoogleDriveDirectUrl("https://drive.google.com/file/d/1rQwZMGx6vDixjXHiRDrAKnf_-AzKNl3o/view?usp=sharing")
  },
  {
    title: "Workshop on IBM SkillBuild",
    details: "Workshop on IBM SkillsBuild, students received certificates and badges after course completion. 136 students attended.",
    date: "10/23/2024, 10:00:00 AM",
    image: "/Images/anime/workshop.png"
  },
  {
    title: "Seminar on AI",
    details: "Seminar by Dr. P. Srikanth, Director, INAS Technologies on AI and future. ~136 students attended.",
    date: "10/23/2024, 9:00:00 AM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Workshop on Stress management and resilience",
    details: "Workshop by Dr. Thomas J Bussen (Visiting professor Singania University), attended by 80+ students",
    date: "11/27/2024, 10:00:00 AM",
    image: "/Images/anime/workshop.png"
  },
  {
    title: "HackerRank workshop",
    details: "Programming for Problem Solving using HackerRank platform for BE III SEM IT A",
    date: "12/18/2024, 10:00:00 AM",
    image: "/Images/anime/workshop.png"
  },
  {
    title: "Practices for Empowering Women's health",
    details: "Seminar on Empowering Women's Health by Dr. Likhitha Bejgaom, attended by 70+ girl students from CME & IT (2nd Year)",
    date: "3/7/2025, 10:40:00 AM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "INTRO TO MACHINE LEARNING",
    details: "Hands-on Workshop on Intro to Machine Learning",
    date: "4/10/2025, 1:10:00 PM",
    image: getGoogleDriveDirectUrl("https://drive.google.com/file/d/1tqCJH20ID-Dh2_h8cEWqKC5Y1oa8t39F/view?usp=sharing")
  },
  {
    title: "Project Expo 3",
    details: "Innovation नवोन्मेष: Project Expo inviting final year students to show their projects, best ones get prizes",
    date: "6/13/2025, 10:00:00 AM",
    image: getGoogleDriveDirectUrl("https://drive.google.com/file/d/1RZgQwFkWIkwcWfdeRq4Ky4ZKISITSVHs/view?usp=sharing")
  },
  {
    title: "Seminar - Transition from College Life to Work Life",
    details: "Transition seminar for outgoing students",
    date: "12/22/2022, 11:30:00 AM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Kwiz: Competition",
    details: "",
    date: "12/30/2022, 1:00:00 PM",
    image: "/Images/anime/quiz.png"
  },
  {
    title: "Webinar-Research Article- Writing Methods",
    details: "",
    date: "8/4/2022, 11:00:00 AM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Logo Designing, Load Aim Shoot, Free Fire, CODE XO, Treasure Hunt",
    details: "",
    date: "6/23/2023, 9:40:00 AM",
    image: "/Images/anime/codingComp.png"
  },
  {
    title: "Master Class on Future Technology",
    details: "Major upcoming future technologies by Tech Tycoon Student members, attended by 100 students",
    date: "12/18/2023, 2:10:00 PM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Career Guidance in Tech Field",
    details: "Seminar by Mr. Sai Krishna Alishala, Founder & CEO, Elitceler Technologies, attended by 100+ students",
    date: "2/15/2024, 2:10:00 PM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Smart MECS HACKATHON 2024",
    details: "First Hackathon at Matrusri Engineering College (Tech Tycoons club IT Dept.) with 85+ participants, judges: Mr. T. Rakesh reddy, Dr. Indumathi, Mr. K Praveen",
    date: "8/3/2024, 9:00:00 AM",
    image: getGoogleDriveDirectUrl("https://drive.google.com/file/d/11RbH8C037qA78LH0ak68uGD3y2RoEbt3/view?usp=sharing")
  },
  {
    title: "Kwiz: Tech Quiz",
    details: "Quiz competition to crown the quiz king!",
    date: "11/29/2023, 2:00:00 PM",
    image: "/Images/anime/quiz.png"
  },
  {
    title: "Seminar on current trends in business",
    details: "By Mr. T. Rakesh reddy (Business Analyst , HNBC), attended by 40+ students",
    date: "8/3/2024, 11:00:00 AM",
    image: "/Images/anime/seminars.png"
  },
  {
    title: "Musical Coding",
    details: "Code amongst the worst music you've ever heard, without getting distracted!",
    date: "10/5/2022, 1:18:42 AM",
    image: "/Images/anime/codingComp.png"
  },
  {
    title: "Website Maintenance part 2",
    details: "Handling events and other dynamic information for the website",
    date: "5/10/2025, 10:30:00 AM",
    image: "/Images/anime/workshop.png"
  },
  {
    title: "Find The Bug",
    details: "Debug the code pushed to production without testing. Use given logs to find the bug!",
    date: "2/8/2023, 1:23:49 AM",
    image: "/Images/anime/codingComp.png"
  }
];