/**
 * Pascal Project Data
 * Contains all content blocks for the Pascal project page
 */

export const pascalData = {
  projectName: 'Pascal',
  description: 'People-first and people-friendly mathematics learning resources.',
  heroImg: '/images/pascal/pascal.png',
  role: 'Designer/Developer',
  timeline: 'March 2022',
  team: ['Individual'],
  skills: ['Visual Design', 'Branding', 'Mobile Design', 'Front-end Development'],
  tech: ['Pug', 'HTML/CSS/JS', 'Figma', 'Express.js', 'OAuth'],
  blocks: [
    {
      type: 'richSection',
      heading: 'Context',
      content:
        'I created **Pascal** to address the lack of *intuitive*, *accessible* math learning platforms. Many students, especially those studying independently, are underserved by existing tools.\n\nI wanted to build something that made learning math simpler and more engaging.',
      mediaPosition: 'beside',
      imageAfter: {
        src: '/images/pascal/maths.jpg',
        alt: 'Pascal math interface for learning',
        caption: 'Building intuitive math learning experiences',
      },
    },
    {
      type: 'richSection',
      heading: 'Problem',
      content:
        'Most math platforms are *clunky*, *confusing*, or *inaccessible* to students without strong institutional support, making self-study difficult and discouraging.',
      mediaPosition: 'beside',
      imageAfter: {
        src: '/images/pascal/gallery.jpg',
        alt: 'Pascal gallery view for visual learning',
        caption: 'Making math more accessible and approachable',
      },
    },
    {
      type: 'richSection',
      heading: 'Solution',
      content:
        '**Pascal** is a web-based math resource I built to help students around the world *self-study*, get help with questions, and challenge themselves through clear video tutorials and guided walkthroughs.',
      mediaPosition: 'none',
      imageAfter: {
        src: '/images/pascal/videos.png',
        alt: 'Pascal video tutorials section',
        caption: 'Comprehensive video tutorials and guided learning',
      },
    },
    {
      type: 'richSection',
      heading: 'Process',
      content:
        'I built **Pascal** using **HTML**, **CSS**, **JavaScript**, and **Pug**, along with **Node.js**, **Express.js**, and **Bootstrap**. I coded everything in Visual Studio Code, *learning new frameworks and debugging* as I went.',
      mediaPosition: 'none',
      imageAfter: {
        src: '/images/pascal/leaderboard.jpg',
        alt: 'Pascal leaderboard engagement feature',
        caption: 'Building engagement through gamification',
      },
    },
    {
      type: 'richSection',
      heading: 'Outcomes',
      content:
        'I created a *functional prototype* that delivers educational content through a *clean* and *accessible* interface. Along the way, I developed **full-stack skills** and implemented features that laid the groundwork for future functionality like **authentication** and **cloud integration**.',
      mediaPosition: 'none',
      imageAfter: {
        src: '/images/pascal/Home.png',
        alt: 'Pascal home dashboard showcasing outcomes',
        caption: 'Clean and accessible interface for learners',
      },
    },
    {
      type: 'richSection',
      heading: 'Reflection',
      content:
        'This project taught me how to manage an *end-to-end development process* on my own—from ideation to deployment. I strengthened my skills in **Node.js**, **Express.js**, and **UI design**, and learned how to create educational content that puts *user experience first*.',
      mediaPosition: 'none',
      imageAfter: {
        src: '/images/pascal/Landing.png',
        alt: 'Pascal landing page showcasing the final product',
        caption: 'The final polished product and learning outcome',
      },
    },
    {
      type: 'gallery',
      images: [
        {
          src: '/images/pascal/Landing.png',
          alt: 'Pascal landing page',
        },
        {
          src: '/images/pascal/Signup.png',
          alt: 'Pascal signup flow',
        },
        {
          src: '/images/pascal/Home.png',
          alt: 'Pascal home dashboard',
        },
        {
          src: '/images/pascal/achieve.png',
          alt: 'Pascal achievements interface',
        },
        {
          src: '/images/pascal/Friends.png',
          alt: 'Pascal friends feature',
        },
        {
          src: '/images/pascal/Community.png',
          alt: 'Pascal community section',
        },
        {
          src: '/images/pascal/Lessons.png',
          alt: 'Pascal lessons interface',
        },
        {
          src: '/images/pascal/Search.png',
          alt: 'Pascal search functionality',
        },
        {
          src: '/images/pascal/Subject.png',
          alt: 'Pascal subject view',
        },
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          src: '/images/pascal/maths.jpg',
          alt: 'Pascal math interface',
        },
        {
          src: '/images/pascal/gallery.jpg',
          alt: 'Pascal gallery view',
        },
        {
          src: '/images/pascal/leaderboard.jpg',
          alt: 'Pascal leaderboard',
        },
        {
          src: '/images/pascal/videos.png',
          alt: 'Pascal videos section',
        },
      ],
    },
  ],
};
