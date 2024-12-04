import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    PaloAlto,
    Zscaler,
    Microsoft,
    meghaPortfolio,
    threejs,
    AmazonClone,
    Food,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "CyberSecurity Intern",
      company_name: "PaloAlto",
      icon: PaloAlto,
      iconBg: "#383E56",
      date: "September 2023 - Novermber 2023",
      points: [
        "Practical exposure to threat deteection, network security, and firewall management",
        "Skills in System security and mitigating cybersecurity risks through exercises and real-world simulations",
        "Developed understanding of cybersecurity concepts, including prevention, vulnerability assessment, and incident response strategies",
        "Aquired  experiencein configuring and managing Palo Alto firewalls",
      ],
    },
    {
      title: "Networking Intern",
      company_name: "Zscaler",
      icon: Zscaler,
      iconBg: "#383E56",
      date: "July 2024 - September",
      points: [
        "Gained hands-on experience in networking concepts, such as VPNs, SD-WAN, and secure connectivity",
        "Configured and managed Zscaler cloud security solutions while troubleshooting network issues for optimal performance.",
        "Explored zero-trust models, enhancing secure access knowledge for remote and hybrid environments.",
        "Developed skills in network monitoring, traffic analysis, and policy configuration using Zscaler tools.",
      ],
    },
    {
      title: "Foundation Course",
      company_name: "EduNet(Microsoft)",
      icon: Microsoft,
      iconBg: "#383E56",
      date: "August 2023 - October 2023",
      points: [
        "Learned Linux fundamentals, including commands and basic system operations.",
        "Gained foundational knowledge of HTML for structuring web content effectively.",
        "Acquired basics of JavaScript and MySQL for dynamic web development.",
      ],
    },
    // {
    //   title: "Job Title",
    //   company_name: "Company name",
    //   // icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "TimeLine",
    //   points: [
    //     "Desciption",
    //     "Description",
    //     "Description",
    //     "Description",
    //   ],
    // },
  ];

 const education = [
    {
      name: "Class 10th",
      date: "2019-20",
      institutename:"S.F D.A.V Public School",
      points: ["","Grade : 85.5%"],
      icon: "src/assets/school.png ",
    },
    {
      name: "Class 12th",
      date: "2021-22",
      institutename:"S.F D.A.V Public School",
      points: ["","Grade : 85.5%"],
      icon: "src/assets/school.png ",
    },
    {
      name: "Bachelor of Technology",
      institutename:"G.L. Bajaj Institute of Technology and Management",
      date: "2022-26",
      points: ["","Information Technology", "CGPA: 8.2/10"],
      icon: "src/assets/college.png ",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const myProfiles = [
    {
      title: "LinkedIn",
      image: "src/assets/linkedin_profile.png",
      source_code_link:"https://www.linkedin.com/in/megha-bichukale-8a6302258",
    },
    {
      title: "Leetcode",
      image: "src/assets/leetcode_profile copy.png",
      source_code_link:"https://leetcode.com/u/megha2705/",
    },
    {
      title: "Github",
      image: "src/assets/github_profile.png",
      source_code_link:"https://github.com/megha7250",
    },
  ];
  
  const projects = [
    {
      name: "Food WebSite",
      description:
        "Developed a fully responsive food website using HTML, CSS, and JavaScript, focusing on dynamic functionality, intuitive layouts, and seamless user experience across devices to demonstrate front-end development skills.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Food,
      source_code_link: "https://github.com/megha7250/Responsive-food-website",
    },
    {
      name: "Amazon Clone",
      description:
        "I create a simple homepage of amazon website using html and css. Since this website is not deployed yet so please fork the resources to your pc to see the final result.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        // {
        //   name: "Technology",
        //   color: "pink-text-gradient",
        // },
      ],
      image: AmazonClone,
      source_code_link: "https://github.com/megha7250/amazon---clone",
    },
    {
      name: "3D Portfolio",
      description:
        "Created a visually engaging 3D portfolio using React and Tailwind CSS, integrating interactive elements and responsive design to effectively showcase personal projects and skills.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Three js",
          color: "pink-text-gradient",
        },
      ],
      image: meghaPortfolio,
      source_code_link: "https://github.com/megha7250",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,myProfiles,education };