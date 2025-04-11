export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Prescripto Clone - Health Management System",
    href: "https://github.com/benguinsan/booking_care",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    logo: "assets/logo.svg",
    logoStyle: {
      backgroundColor: "#f0f0f0",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "SpringBoot",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        id: 2,
        name: "Java",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "Carhub",
    href: "https://github.com/benguinsan/CarShowClone",
    desc: "A sleek car showcase platform that allows users to browse, filter, and explore various luxury and sports cars. The website provides detailed specifications, high-quality images, and an intuitive interface for car enthusiasts to discover their dream vehicles.",
    logo: "assets/carhub.svg",
    logoStyle: {
      backgroundColor: "#ffffff",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "assets/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "assets/icons8-next.js.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    zakuScale: isSmall ? 3 : isMobile ? 3.3 : 4.0,
    stylized_planetScale: isSmall ? 3 : isMobile ? 3 : 6,
    zakuPosition: isMobile ? [2, -9, 8] : [5, -9, 8],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 6, 0]
      : isTablet
      ? [5, 4, 0]
      : [-7, 4, 0],
    stylized_planetPosition: isMobile
      ? [-5, 0, 0]
      : isTablet
      ? [-5, 0, 0]
      : [-9.2, -4, 0],
  };
};

export const mySkills = [
  {
    id: 1,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 3,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  {
    id: 5,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 7,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 8,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    id: 9,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    id: 10,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    id: 11,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    id: 12,
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
  },
];
