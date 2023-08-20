export const projects: Array<{
  title: string;
  link: string;
  id: number;
  description: string;
  year: number;
  cover: string;
  technologies: string[];
  type: string[];
  github: string;
  about: string;
}> = [
  {
    title: "Thebrik",
    link: "https://thebrik.co",
    id: 3,
    description: "Hostel renting platform for students across Nigeria",
    year: 2021,
    cover: "/projects/thebrik.png",
    technologies: [
      "React",
      "Node JS",
      "MongoDB",
      "Material UI",
      "Redux",
      "Context API",
    ],
    type: ["project", "others"],
    github: "",
    about:
      "We are building the most convenient way for the modern day Nigeria students to get their suitable hostel. Our customers are at the center of everything we do, and we are obsessed with creating a pleasant experience throughout their entire journey.",
  },

  {
    title: "Jentomed Hospital",
    link: "https://jentomed.com",
    id: 6,
    description: "Specialized hospital in Ibadan, Nigeria.",
    year: 2022,
    cover: "/projects/www.jentomed.com.png",
    technologies: ["NextJs", "Context API"],
    type: ["project", "others"],
    github: "",
    about:
      "Jentomed Specialist Hospital is a multi-disciplinary private healthcare facility focusing on the best possible clinical outcomes for our patients and their families.",
  },

  {
    title: "Carter",
    link: "https://carter-rose.vercel.app",
    id: 5,
    description: "Blog for Artists",
    year: 2022,
    cover: "/projects/carter-rose.vercel.app.png",
    technologies: ["React", "NextJs", "Context API", "Sanity CMS"],
    type: ["project", "blog", "others"],
    github: "https://github.com/ifeanyilucky/carter",
    about:
      "Carter blog is a content platform which allows readers to engage in a wide range of dynamic and innovative ideas expressed through different art forms.",
  },
  {
    title: "Buylocate Africa",
    link: "https://buylocate.com",
    id: 1,
    description: "An errand running platform for Nigerians in Diaspora",
    year: 2022,
    cover: "",
    technologies: [
      "React",
      "Node JS",
      "MongoDB",
      "Material UI",
      "Redux",
      "Context API",
    ],
    type: ["project", "others"],
    github: "",
    about: "",
  },
  {
    title: "Streamroan",
    link: "https://stream-roan.vercel.app",
    id: 45,
    description: "A landing page UI built with React",
    year: 2022,
    cover: "/projects/streamroan.jpg",
    technologies: ["Vuejs", "Typescript"],
    type: ["project", "personal"],
    github: "https://github.com/ifeanyilucky/stream",
    about:
      "Streamroan is a revolutionary asset streaming protocol that brings subscriptions, salaries, vesting, and rewards to DAOs and crypto-native businesses worldwide.",
  },
  {
    title: "Yousavie",
    link: "https://yousavie.vercel.com",
    id: 2,
    description: "Download youtube videos for free",
    year: 2021,
    cover: "/projects/yousavie.png",
    technologies: ["React", "NextJs", "Tailwind", "Typescript"],
    type: ["project", "others"],
    github: "https://github.com/ifeanyilucky/yousavie",
    about:
      "Download youtube videos with a high-quality MP4/MP3 in the Yousavie video downloader for 100% free, easy-to-use, and unlimited.",
  },
  {
    title: "Movie Info Search",
    link: "",
    id: 5,
    description: "Movie information search",
    year: 2022,
    cover: "/projects/moviesearch.jpg",
    technologies: ["React", "Context API", "Typescript"],
    type: ["project", "others"],
    github: "https://github.com/ifeanyilucky/moviesearch",
    about:
      "MovieSearch is an online website of information built with React JS  to search for films, television series, podcasts, home videos, video games, and watching thrillers online – including cast, production crew and personal biographies and so much more. MovieSearch is currently in WIP",
  },
];
