// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import rinlLogo from './assets/company_logo/rinl.png';

// Education Section Logo's
import nistLogo from './assets/education_logo/nist.jpeg';
import gvhssLogo from './assets/education_logo/gyanavikash.jpeg';
import ssvmLogo from './assets/education_logo/sishumandir.jpeg';

// Project Section Logo's
import crowdLogo from './assets/work_logo/crowd.png'; 
import csprepLogo from './assets/work_logo/photography.png';
import movierecLogo from './assets/work_logo/rinl.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Boot strap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring boot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java Script', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: rinlLogo,
      role: "Fullstack Developer",
      company: "Rastriya Ispat Nigam Limited,Vishakapatnam",
      date: "May 2025- June 2025",
      desc: " I successfully completed a real-time project during our internship at Vizag Steel Plant (RINL) at Vishakapatnam. The project, titled 'Suggestion Scheme', is a web-based solution designed to streamline how employees share suggestions to drive improvement and innovation within the organization.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "MongoDb",
      ],
    },
    
  ];
  
  export const education = [
   
    {
  id: 0,
  img: nistLogo,
  school: "NIST University, Berhampur",
  date: "2022 November – 2026",
  grade: "9.13cgpa",
  desc: "Currently pursuing a degree in Computer Science and Technology. Building a strong foundation in software development, data structures, algorithms, and modern web technologies. Actively involved in coding, project work, and continuous learning.",
  degree: "Bachelor of Technology (B.Tech)",
},

    {
      id: 1,
      img: gvhssLogo,
      school: "Gyanavikash Higher Secondary School, Chatrapur",
      date: "May 2020 - June 2022",
      grade: "83%",
      desc: "I completed my class 12 education from Gyanavikash Higher Secondary School, Chatrapur, under the CHSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CHSE(XII)",
    },
    {
      id: 2,
      img: ssvmLogo,
      school: "Saraswati Sishu Vidya Mandir, SriramNagar",
      date: "Apr 2019 - March 2020",
      grade: "80.83%",
      desc: "I completed my class 10 education from Saraswati Sishu Vidya Mandir, SriramNagar, under the BSE board.",
      degree: "BSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Crowd Detection",
      description:
        "An intelligent and interactive Streamlit application built for real-time crowd detection using YOLO-based object detection. Leveraging cutting-edge computer vision and deep learning techniques, the app accurately identifies and counts people in images and video streams. Its clean and responsive interface ensures ease of use, making it an ideal solution for monitoring public spaces, managing events, and enhancing safety through real-time crowd analytics.",
      image: crowdLogo,
      tags: ["YOLO", "Streamlit", "OpenCV"],
      github: "https://github.com/somesh720/Crowd-Detection.git",
      webapp: "https://crowd-detection-fcrmfgmsqhfrpctefr3afx.streamlit.app/",
    },
    {
      id: 1,
      title: "Photography Booking Site",
      description:
        "A full-stack photography booking platform that allows photographers to showcase their portfolio and clients to easily schedule sessions online. The application features dynamic photo galleries, personalized user profiles, and a secure, real-time booking system. Built with modern web technologies, the platform offers a seamless experience for both photographers and clients, streamlining the process from portfolio browsing to confirmed appointments.",
      image: csprepLogo,
      tags: [ "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/somesh720/photography-website.git",
      webapp: "https://photography-website123.netlify.app/",
    },
    {
      id: 2,
      title: "RINL Suggestion Scheme",
      description:
        "Developed a responsive web-based suggestion management system for RINL employees, enabling secure registration, login, and suggestion submission. The system allows admins to view and manage suggestions based on employee ID, improving internal feedback collection and organizational transparency.",
      image: movierecLogo,
      tags: [ "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/somesh720/RINL-Suggestion-Scheme.git",
      webapp: "https://rinl-suggestion-scheme.netlify.app/",
    },
    
  ];  