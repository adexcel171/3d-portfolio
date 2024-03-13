import {
  mobile,
  blog,
  crm,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  techshop,
  cryptowallet,
  Express,
  node,
  python,
  store,
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
    title: "Frontend Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express js",
    icon: Express,
  },
 
  {
    name: "Python Django",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Development Tutor",
    company_name: "Ebs Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Curriculum Design & Teaching: Lead the development of a dynamic frontend curriculum, focusing on HTML, CSS, JavaScript, React.js, Bootstrap, and other essential technologies for aspiring web developers.",
      "Interactive Learning: Created an engaging learning environment through hands-on projects, coding challenges, and personalized support.",
      "Adaptability & Innovation: Stayed current with industry trends, integrating innovative tools, and methodologies to enhance the learning experience.",
      "Collaboration & Mentorship: Fostered a collaborative learning community, offering one-on-one mentorship and support for students.",
    ],
  },
  {
    title: "E-commerce Website Development: ",
    company_name: "Freelance",
    icon: store,
    iconBg: "#E6DEDD",
    date: "August 2023 - Feb 2024",
    points: [
      "Successfully built a feature-rich e-commerce website utilizing the MERN stack, showcasing proficiency in MongoDB, Express.js, React.js, and Node.js.",

      "Key Features:",
      
      "Implemented user authentication with Login and Register functionality",
     "Developed a seamless shopping experience with Add to Cart and PayPal payment system integration.",
      "Enabled product management, allowing users to upload, update, and delete products.",
      "Implemented sorting and filtering options for a user-friendly product discovery.",
      "Created responsive design for optimal user experience across various devices.",
      "Established secure admin routes for product management, ensuring efficient control over product upload, update, and deletion.",
      "Implemented order creation functionality for a streamlined purchasing process.",
      "Technical Skills:",
      
      
    ],
  },
  {
    title: "Web Developer",
    company_name: "Personal Blog",
    icon: blog,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "MERN Blog Development: Successfully crafted a dynamic blog website using the MERN stack, featuring advanced functionalities for web developers.",

      "Key Features:",
      
      "Implemented user authentication with login and user registration",
      "Enabled user comments on blog posts, fostering community engagement.",
      "Integrated Firebase for seamless picture uploads within blog posts.",
      "Implemented user login with OAuth through Firebase for enhanced security.",
      "Developed a fully responsive blog website, ensuring optimal user experience across devices",
      "Technical Skills",
      
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "User Authentication and Authorization",
      "Commenting System",
      "Firebase Integration (Picture Uploads)",
     " OAuth Authentication through Firebase",
      "Responsive Web Design",
    
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "CRM System Development: Spearheaded the development of a comprehensive CRM system using the MERN stack, delivering essential features for efficient customer relationship management.",

"Key Features:",

"Implemented robust user authentication and authorization for secure access",
"Integrated dynamic contact management with features such as user profiles and interaction histories.",
"Designed a responsive dashboard for real-time insights into customer data.",
"Developed a task management system for improved workflow and collaboration",
"Implemented data visualization tools to facilitate informed decision-making",
"Ensured seamless communication with integrated email features",
"Technical Skills",


"User Authentication and Authorization",
"Contact Management",
"Responsive Dashboard Design",
"Task Management",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Excel as the MERN stack developer on our project. His technical expertise was invaluable",
    name: "Sandy Smith",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "he was able to quickly identify and solve complex problems. He was always willing to go the extra mile to ensure that our project was a success.",
    name: "David Johnson",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "He is incredibly organized and detailed-oriented, which makes him an asset in any team environment",
    name: "Emma Williams",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects = [
  {
    name: "E-commerce web app",
    description:
      "An E-commerce website with a clean and minimal UI design that accepts paypal payment",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techshop,
    source_code_link: "https://github.com/adexcel171/ecom-store",
  },
  {
    name: "CRM",
    description:
      "A customer relationship System that manage customer details with a real time dashboard update",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/adexcel171",
  },
  {
    name: "Mern Blog",
    description:
      "Successfully delivered a feature-rich blog platform were developers can read an learn about what is the lestest trend in tech and more",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/adexcel171",
  },
];

export { services, technologies, experiences, testimonials, projects };
