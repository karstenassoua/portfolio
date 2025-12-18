/**
 * Greencoin Project Data
 * Contains all content blocks for the Greencoin project page
 */

export const greencoinData = {
  projectName: 'Greencoin',
  description: 'Equipping and rewarding the world for environmental care.',
  heroImg: '/images/greencoin/greencoin.png',
  role: 'Designer/Developer',
  timeline: 'Dec. 2021 - Mar. 2022',
  team: ['Ryan Bascos (Back-end Developer)'],
  skills: ['Visual Design', 'Branding', 'Mobile Design', 'iOS Development'],
  tech: ['iOS', 'Swift', 'XCode', 'Figma'],
  blocks: [
    {
      type: 'richSection',
      heading: 'Context',
      content:
        'I created Greencoin to make environmentally friendly habits easier and more rewarding—especially for students who want to take action but lack incentives or tools to do so consistently.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Problem',
      content:
        'Recycling and sustainable habits often feel like thankless tasks, especially among students. I wanted to build a system that motivated environmentally conscious behavior through community and real rewards.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Solution',
      content:
        'Greencoin is a mobile app designed for iOS that lets users log their recycling activity, compete with friends, and earn \'Greencoins\'—a digital currency redeemable in a store or for donations. The app also includes eco-tips, recycling guides, and timers for sustainable habits like shorter showers.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Process',
      content:
        'I designed the app using Figma to prototype the full UX/UI, and built it in Swift using Xcode. I also integrated Google and email authentication for secure login, designed gamified challenges, and developed the digital rewards system to track user activity over time.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Outcomes',
      content:
        'I launched a polished, high-fidelity prototype that combined environmental education, habit tracking, and gamification. The app structure supports real-time user engagement, digital rewards, and future scalability across platforms like Android.',
      mediaPosition: 'none',
    },
    {
      type: 'richSection',
      heading: 'Reflection',
      content:
        'Through this project, I deepened my skills in iOS development, learned to create meaningful user incentives, and saw firsthand how behavior design can support sustainability. I also practiced balancing technical constraints with creative feature design in a way that encourages real-world impact.',
      mediaPosition: 'none',
    },
    {
      type: 'gallery',
      images: [
        {
          src: '/images/greencoin/Landing.png',
          alt: 'Greencoin landing page',
        },
        {
          src: '/images/greencoin/Login.png',
          alt: 'Greencoin login screen',
        },
        {
          src: '/images/greencoin/Info.png',
          alt: 'Greencoin info section',
        },
      ],
    },
  ],
};
