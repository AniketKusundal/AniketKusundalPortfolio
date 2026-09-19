export const experience = [
  {
    id: 'digisevaks',
    role: 'Website Developer',
    company: 'DigiSevaks Media Agency',
    location: 'Pune, Maharashtra, India',
    period: 'August 2026 — Present',
    startYear: 2026,
    startMonth: 8,
    current: true,
    highlight: 'CURRENT POSITION',
    summary: 'Developing responsive client-facing websites and web applications with React.js, Tailwind CSS, and WordPress, ensuring high performance, responsive UI/UX, and component reusability.',
    responsibilities: [
      'Built 5+ responsive websites for clients using React.js, Tailwind CSS, HTML5, and CSS3, focusing on responsive design and UI/UX.',
      'Developed reusable React.js components with animations and API integration for client-facing web applications.',
      'Maintained and customized WordPress-based client websites alongside custom React.js builds based on project requirements.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'WordPress', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'sandhya-softtech',
    role: 'Junior Web Developer',
    company: 'Sandhya Softtech Pvt. Ltd.',
    location: 'Ambajogai, Maharashtra',
    period: 'November 2025 — July 2026',
    startYear: 2025,
    startMonth: 11,
    current: false,
    highlight: 'PREVIOUS POSITION',
    summary: 'Independently developed a School ERP System end-to-end, covering frontend development, backend architecture, REST API design, database integration, and deployment.',
    responsibilities: [
      'Independently developed a School ERP System end-to-end, covering frontend development, backend architecture, and database design.',
      'Developed the frontend using React.js and built RESTful APIs with Node.js and Express.js to handle core application logic.',
      'Implemented authentication and MongoDB database integration, along with full CRUD functionality across application modules.',
      'Tested, debugged, and deployed the application as the sole developer while managing source code using Git/GitHub.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT', 'Git/GitHub'],
  },
];

export const experienceStory = [
  {
    step: '01',
    date: 'NOV 2025',
    company: 'SANDHYA SOFTTECH',
    role: 'Junior Web Developer',
    detail: 'Sole developer building a full-stack School ERP system end-to-end with React, Node.js, Express, and MongoDB.',
  },
  {
    step: '02',
    date: 'AUG 2026',
    company: 'DIGISEVAKS MEDIA AGENCY',
    role: 'Website Developer',
    detail: 'Building responsive client websites, developing reusable React components, and managing custom WordPress builds.',
  },
  {
    step: '03',
    date: 'NOW',
    company: 'CURRENT FOCUS',
    role: 'Full-Stack & Client Engineering',
    detail: 'Delivering client websites, engineering AI-powered full-stack web applications, and advancing toward full-stack engineering.',
  },
];

/**
 * Dynamic duration calculator
 */
export function calcDuration(startYear, startMonth) {
  const now = new Date();
  const totalMonths = (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth);
  if (totalMonths <= 0) return 'Recent';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months} mo`;
  if (months === 0) return `${years} yr`;
  return `${years} yr ${months} mo`;
}
