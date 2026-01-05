/**
 * JWR Computing Project Data
 * Contains all content blocks for the JWR Computing project page
 */

export const jwrData = {
  projectName: 'JWR Computing',
  description: 'Supporting equitable computer science education, locally and abroad.',
  heroImg: '/images/jwr/jwr.png',
  role: 'Designer/Developer',
  timeline: 'Dec. 2021 - Mar. 2022',
  team: ['Individual'],
  skills: [
    'Visual Design',
    'Branding',
    'Animation',
    'Back-end Development',
    'Front-end Development',
  ],
  tech: ['React', 'Node', 'HTML/CSS/JS', 'Firebase', 'OAuth'],
  blocks: [
    {
      type: 'richSection',
      heading: 'Context',
      content:
        'JWR Computing, a secondary school CS club, needed a scalable digital presence to manage events, grow membership, and centralize resources for their expanding student community. I was brought on to design and develop a full-featured website from the ground up.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Problem',
      content:
        'The club had no centralized system for outreach or operations, making it difficult to coordinate weekly meetings, promote events, or track member engagement—especially as attendance and interest began to grow rapidly.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Solution',
      content:
        'I built a responsive website using React.js and Node.js, integrating Google Firebase for authentication (OAuth), cloud functions, and backend database management. The site also connected with the club\'s calendar and social media platforms to help manage 20 staff and support a 250+ person school-wide CS event.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Process',
      content:
        'I designed and developed the site with a modular component-based architecture in React and Node.js, ensuring consistency across pages and ease of future updates. I used Firebase to implement secure login, real-time database access, and scalable backend logic. The entire stack was optimized for both performance and usability by a student audience.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Outcomes',
      content:
        'Within five months, the club saw a 300% increase in attendance, broader gender inclusion, and became the largest student-led organization on campus. The website also played a key role in helping the club secure over $70,000 in grants from partners like Google Cloud, GitHub, and Wolfram.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Reflection',
      content:
        'This project taught me how to apply full-stack development skills to create real impact for a student organization. I learned to integrate backend services with user-friendly interfaces, scale authentication workflows, and build for both immediate usability and long-term growth.',
      mediaPosition: 'none',
    },
    {
      type: 'gallery',
      images: [
        {
          src: '/images/jwr/talks.png',
          alt: 'JWR Computing talks page',
        },
        {
          src: '/images/jwr/join.png',
          alt: 'JWR Computing join page',
        },
        {
          src: '/images/jwr/members.png',
          alt: 'JWR Computing members directory',
        },
        {
          src: '/images/jwr/create.png',
          alt: 'JWR Computing create event',
        },
      ],
    },
  ],
};
