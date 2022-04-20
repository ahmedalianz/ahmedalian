import { Route, Routes } from "react-router-dom";

import About from "pages/About";
import Contact from "pages/Contact";
import ProjectDetails from "pages/ProjectDetails";
import Projects from "pages/Projects";
import Resume from "pages/Resume";

export default function PortfolioRoutes() {
  const projects = [
    {
      id: 1,
      name: "Netflix Clone",
      image: "/images/projects/netflix/1.png",
      link: "https://netflex-nine.vercel.app/",
      logo: "/images/projects/netflix/netflixlogo.png",
      github: "https://github.com/ahmedalianz/netflix-Clone",
      filter: ["React", "SCSS"],
      images: [
        "/images/projects/netflix/1.png",
        "/images/projects/netflix/2.png",
        "/images/projects/netflix/3.png",
        "/images/projects/netflix/5.png",
        "/images/projects/netflix/6.png",
        "/images/projects/netflix/8.png",
      ],
      desc: "This Application Fetches the Popular Movies and Tv Shows From TMDB ,It's The Same Design Style As The Real Netflix , Manually Customized Components like Accordion & Floating Input Without any external Library , It Supports Two Languages (English & Arabic), It's Also Very responsive Design",
    },
    {
      id: 2,
      name: "Sprout Social",
      image: "/images/projects/sprout/1.png",
      link: "https://sprout-social.vercel.app/",
      logo: "/images/projects/sprout/sproutlogo.png",
      github: "https://github.com/ahmedalianz/social-React-Redux-MogoDb",
      filter: ["React", "Redux", "Node", "Express", "MongoDB"],
      images: [
        "/images/projects/sprout/1.png",
        "/images/projects/sprout/2.png",
        "/images/projects/sprout/3.png",
        "/images/projects/sprout/4.png",
      ],
      desc: "In This Application You Can Sign up or login to your account , You can create a post , like it , comment on it ,search for people,view & Edit Your Profile , and more , It's also very responsive Design",
    },
    {
      id: 3,
      name: "Electronics Store",
      image: "/images/projects/store/1.png",
      link: "https://electronicz-store.vercel.app/",
      logo: "/images/projects/store/storelogo.png",
      github: "https://github.com/ahmedalianz/E-commerce-react-redux",
      filter: ["React", "Redux", "Node", "Express", "MongoDB"],
      images: [
        "/images/projects/store/1.png",
        "/images/projects/store/2.png",
        "/images/projects/store/3.png",
        "/images/projects/store/4.png",
        "/images/projects/store/5.png",
        "/images/projects/store/6.png",
        "/images/projects/store/7.png",
        "/images/projects/store/8.png",
      ],
      desc: "In This Application You Can view all the products , add to cart , checkout , and more ,it Supports Arabic Language, It's also very responsive Design",
    },
    {
      id: 4,
      name: "Pizza Ordering App",
      image: "/images/projects/pizza/1.png",
      link: "https://pizza-sooty.vercel.app/",
      filter: ["React", "Redux", "Next"],
      images: [
        "/images/projects/pizza/1.png",
        "/images/projects/pizza/2.png",
        "/images/projects/pizza/3.png",
        "/images/projects/pizza/4.png",
        "/images/projects/pizza/5.png",
        "/images/projects/pizza/6.png",
        "/images/projects/pizza/7.png",
        "/images/projects/pizza/8.png",
        "/images/projects/pizza/9.png",
        "/images/projects/pizza/10.png",
        "/images/projects/pizza/11.png",
      ],
      desc: "In This Application You Can Order Pizza , You can add Topping , Add To Cart , Checkout ,you can pay cash or via paypal,the admin can contol products & orders create new Pizzas and more , It Supports Two Languages (English & Arabic),  It's also very responsive Design",
    },
    {
      id: 5,
      name: "Deer Fitness",
      image: "/images/projects/deer.png",
      link: "https://deer-fitness.vercel.app/",
      filter: ["React", "MERN"],
      images: ["/images/projects/deer.png"],
      desc: "This Application is Made for a Gym so that it's participants can make reservations easily  , It Supports Arabic Languages,  It's also very responsive Design",
    },
    {
      id: 6,
      name: "Shareable To Do App",
      image: "/images/projects/shareable.png",
      link: "https://sharable-to-do.vercel.app/",
      filter: ["React"],
      images: ["/images/projects/shareable.png"],
      desc: "In This Application You Can you can create any user by just name so lists are just for your username, Every username has his own lists & able to : Create a New list,Add List Items,Navigate Between Lists,Share Any List By Several Means eg:facebook,whatsapp,direct link,  It's also very responsive Design",
    },
    {
      id: 18,
      name: "Agency",
      image: "/images/projects/agency.png",
      link: "https://agency-beta.vercel.app/",
      filter: ["React", "Landing Page"],
      images: ["/images/projects/agency.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 19,
      name: "Manage",
      image: "/images/projects/manage.png",
      link: "https://ahmedalianz.github.io/manage-landing-page/",
      filter: ["Landing Page"],
      images: ["/images/projects/manage.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 20,
      name: "EasyBank",
      image: "/images/projects/easy.png",
      link: "https://ahmedalianz.github.io/easybank-landing-page/",
      filter: ["Landing Page"],
      images: ["/images/projects/easy.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 21,
      name: "Huddle",
      image: "/images/projects/huddle.png",
      link: "https://ahmedalianz.github.io/huddle-landing-page/",
      filter: ["Landing Page"],
      images: ["/images/projects/huddle.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 22,
      name: "Kanban Board",
      image: "/images/projects/kanban.png",
      link: "https://kanban-boardz.netlify.app/",
      filter: ["Angular"],
      images: ["/images/projects/kanban.png"],
      desc: "Its a Kanban Board to sort tasks",
    },
    {
      id: 7,
      name: "Bloger",
      image: "/images/projects/bloger.png",
      link: "https://ahmedalianz.github.io/blogr/",
      filter: ["Landing Page"],
      images: ["/images/projects/bloger.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 8,
      name: "Lion",
      image: "/images/projects/lion.png",
      link: "https://ahmedalianz.github.io/Lion-HTML-CSS/",
      filter: ["Landing Page"],
      images: ["/images/projects/lion.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 9,
      name: "Studio VR",
      image: "/images/projects/studio.png",
      link: "https://ahmedalianz.github.io/studio-vr/",
      filter: ["Landing Page"],
      images: ["/images/projects/studio.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 10,
      name: "ClipBoard",
      image: "/images/projects/clipboard.png",
      link: "https://ahmedalianz.github.io/clipboard/",
      filter: ["Landing Page"],
      images: ["/images/projects/clipboard.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 11,
      name: "Breaking Bad Cast",
      image: "/images/projects/breaking.png",
      link: "https://breaking-bad-castz.netlify.app/",
      filter: ["React"],
      images: ["/images/projects/breaking.png"],
      desc: "In This Application You Can view all the characters , Search for any one of these characters",
    },
    {
      id: 12,
      name: "Menu Mangment",
      image: "/images/projects/cart.png",
      link: "https://shopping-cart22.netlify.app/",
      filter: ["React"],
      images: ["/images/projects/cart.png"],
      desc: "In This Application You Can view all the products , add to cart , edit products , and more",
    },
    {
      id: 13,
      name: "My Reads",
      image: "/images/projects/reads.png",
      link: "https://my-readsz1.netlify.app/",
      filter: ["React"],
      images: ["/images/projects/reads.png"],
      desc: "In This Application You Can Add Books to Your Reading list & search for any books by it's title or author",
    },
    {
      id: 14,
      name: "Calculator",
      image: "/images/projects/calculator.png",
      link: "https://ahmedalianz.github.io/calculator-JS/",
      filter: [],
      images: ["/images/projects/calculator.png"],
      desc: "Its a simple Calculator",
    },
    {
      id: 15,
      name: "SunnySide",
      image: "/images/projects/sunny.png",
      link: "https://ahmedalianz.github.io/sunnyside/",
      filter: ["Landing Page"],
      images: ["/images/projects/sunny.png"],
      desc: "Its a Landing Page",
    },
    {
      id: 16,
      name: "Expense Tracker",
      image: "/images/projects/expense.png",
      link: "https://ahmedalianz.github.io/Expense-tracker-JS/",
      filter: [],
      images: ["/images/projects/expense.png"],
      desc: "In This Application You Can Add You Salary and expenses so you can track them",
    },
    {
      id: 17,
      name: "News Reader AI",
      image: "/images/projects/news.png",
      link: "https://ahmedalianz.github.io/Expense-tracker-JS/",
      filter: ["React"],
      images: ["/images/projects/news.png"],
      desc: "In This Application You Can Search for new by just saying the word and it will show you the news",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects projects={projects} />} />
      <Route
        path="/projects/:id"
        element={<ProjectDetails projects={projects} />}
      />
    </Routes>
  );
}
