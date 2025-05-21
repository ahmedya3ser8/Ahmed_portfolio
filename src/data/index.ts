import noteApp from '../assets/images/note-app.png'
import gameOverImg from '../assets/images/game-over.png'
import trendifyImg from '../assets/images/trendify.png'
import FinanceImg from '../assets/images/Finance-Business.png'
import crudImg from '../assets/images/crud.png'
import danielsImg from '../assets/images/daniels.png'
import freshCartImg from '../assets/images/freshCart.png'

interface IProject {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  langs: string[];
  demo: string;
  liveDemo: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    imgUrl: trendifyImg,
    title: 'Trendify Ecommerce',
    desc: 'E-commerce frontend development focuses on building fast, responsive, and user-friendly interfaces for online stores. Built using Reactjs, Tailwind CSS, and API integrations. Optimizing performance, accessibility, and mobile responsiveness.',
    langs: ['Html', 'Css', 'Reactjs', 'TailwindCss', 'TypeScript'],
    demo: 'https://github.com/ahmedya3ser8/Trendify-Ecommerce',
    liveDemo: 'https://trendify-ecommerce-two.vercel.app/'
  },
  {
    id: 2,
    imgUrl: noteApp,
    title: 'Note App',
    desc: 'Simple Note App built with reactjs and tailwindCss it have authentication, API integrations and crud ',
    langs: ['Html', 'Css', 'Reactjs', 'TailwindCss', 'TypeScript'],
    demo: 'https://github.com/ahmedya3ser8/Note_App',
    liveDemo: 'https://note-app-six-gamma.vercel.app/'
  },
  {
    id: 3,
    imgUrl: freshCartImg,
    title: 'FreshCart Ecommerce',
    desc: 'FreshCart is a modern e-commerce grocery store website built by Nextjs and tailwindCss featuring a clean and user-friendly interface. It allows users to browse, search, and purchase a wide range of grocery products online.',
    langs: ['Html', 'Css', 'NextJs', 'ReactJs', 'TailwindCss', 'TypeScript'],
    demo: 'https://github.com/ahmedya3ser8/freshcart',
    liveDemo: 'https://freshcart-ojka.vercel.app/'
  },
  {
    id: 4,
    imgUrl: gameOverImg,
    title: 'Game Over',
    desc: 'A simple movies website built using HTML, CSS, Bootstrap, and pure JavaScript. movies and movie details and login, register authentication',
    langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    demo: 'https://github.com/ahmedya3ser8/Game-Over',
    liveDemo: 'https://ahmedya3ser8.github.io/Game-Over/'
  },
  {
    id: 5,
    imgUrl: FinanceImg,
    title: 'Finance Business',
    desc: 'A simple landing page built using HTML, CSS, Bootstrap, and pure JavaScript.',
    langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    demo: 'https://github.com/ahmedya3ser8/Finance_Business',
    liveDemo: 'https://ahmedya3ser8.github.io/Finance_Business/'
  },
  {
    id: 6,
    imgUrl: crudImg,
    title: 'Simple CRUD',
    desc: 'Simple CRUD (Create, Read, Update, Delete) system implemented using HTML, CSS, JavaScript, Bootstrap.',
    langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    demo: 'https://github.com/ahmedya3ser8/Bookmark',
    liveDemo: 'https://ahmedya3ser8.github.io/Bookmark/'
  },
  {
    id: 7,
    imgUrl: danielsImg,
    title: 'Daniels',
    desc: 'A simple landing page built using HTML, CSS, Bootstrap, and pure JavaScript.',
    langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    demo: 'https://github.com/ahmedya3ser8/Daniels',
    liveDemo: 'https://ahmedya3ser8.github.io/Daniels/'
  }
]