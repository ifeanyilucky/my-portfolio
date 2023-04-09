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
}> = [
  {
    title: 'Thebrick',
    link: 'https://thebrik.co',
    id: 3,
    description: 'Hostel renting platform for students across Nigeria',
    year: 2021,
    cover: '/projects/thebrik.co.png',
    technologies: [
      'React',
      'Node JS',
      'MongoDB',
      'Material UI',
      'Redux',
      'Context API',
    ],
    type: ['project', 'others'],
    github: '',
  },
  {
    title: 'Carter',
    link: 'https://carterblog.netlify.app',
    id: 5,
    description: 'Blog for Artists',
    year: 2022,
    cover: '/projects/moviesearch.jpg',
    technologies: ['React', 'NextJs', 'Context API'],
    type: ['project', 'others'],
    github: '',
  },
  {
    title: 'Buylocate Africa',
    link: 'https://buylocate.com',
    id: 1,
    description: 'An errand running platform for Nigerians in Diaspora',
    year: 2022,
    cover: '',
    technologies: [
      'React',
      'Node JS',
      'MongoDB',
      'Material UI',
      'Redux',
      'Context API',
    ],
    type: ['project', 'others'],
    github: '',
  },
  {
    title: 'Streamroan',
    link: 'https://stream-roan.vercel.app',
    id: 45,
    description: 'An errand running platform for Nigerians in Diaspora',
    year: 2022,
    cover: '/projects/streamroan.jpg',
    technologies: ['Vuejs', 'Typescript'],
    type: ['project', 'personal'],
    github: '',
  },
  {
    title: 'Yousavie',
    link: 'https://yousavie.vercel.com',
    id: 2,
    description: 'Download youtube videos for free',
    year: 2021,
    cover: '',
    technologies: ['React', 'NextJs', 'Tailwind'],
    type: ['project', 'others'],
    github: '',
  },

  {
    title: 'Jentomed Specialist Hospital',
    link: 'https://jentomed.com',
    id: 4,
    description: 'A specialized General Hospital in Ibadan',
    year: 2022,
    cover: '',
    technologies: ['React', 'NextJs', 'Context API'],
    type: ['project', 'others'],
    github: '',
  },

  {
    title: 'Jentoscopes ENT Hospital',
    link: 'https://jentoscopes.com.ng',
    id: 6,
    description: 'Specialized ear, nose and throat clinic in Lagos state.',
    year: 2020,
    cover: '',
    technologies: [
      'React',
      'Node JS',
      'MongoDB',
      'Material UI',
      'Redux',
      'Context API',
    ],
    type: ['project', 'others'],
    github: '',
  },
];
