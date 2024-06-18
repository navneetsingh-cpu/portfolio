import { nanoid } from "nanoid";
import {
  FaAngular,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaCodiepie,
  FaSass,
} from "react-icons/fa";
import {
  quoteGeneratorImage,
  unsplashImage,
  mixMasterImage,
  weatherForecastImg,
  stockTrackerImg,
  urlShortnerImg,
  numberPlateDetector,
  canadaPopulationTracker,
  comfyStoreImg,
  gptGeniusImg,
  // propertyImg,
  homeawayImg,
} from "./images";

import propertyPulse from './assets/propertyPulse.png';


export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  // { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML/CSS",
    icon: <FaHtml5 className="h-16 w-16 text-secondary" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "SaSS/SCSS",
    icon: <FaSass className="h-16 w-16 text-secondary" />,
    text: "Implemented SASS for efficient and maintainable CSS in web development projects.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-secondary" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-secondary" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Angular",
    icon: <FaAngular className="h-16 w-16 text-secondary" />,
    text: "Proficient in Angular, with experience developing dynamic and responsive web applications using Angular frameworks and libraries.",
  },
  {
    id: nanoid(),
    title: "Node.JS",
    icon: <FaNodeJs className="h-16 w-16 text-secondary" />,
    text: "Proficient in Node.js and Express.js, adept at developing server-side applications, RESTful APIs, and real-time web applications using JavaScript and related technologies.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-secondary" />,
    text: "Skilled in Java development, with expertise in building robust and scalable applications, implementing object-oriented design principles, and utilizing Java frameworks and technologies.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-secondary" />,
    text: "Experienced in Python programming, proficient in developing applications, scripting, and data analysis. Skilled in machine learning techniques, including data preprocessing, model development, and evaluation using Python libraries such as Streamlit.",
  },
  {
    id: nanoid(),
    title: "C# .NET",
    icon: <FaCodiepie className="h-16 w-16 text-secondary" />,
    text: "Experienced in C# .Net / Reactive extensions",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: propertyPulse,
    url: "https://property-pulse-navneet.vercel.app/",
    github: "https://github.com/navneetsingh-cpu/property-pulse",
    title: "Property Pulse - NextJs full stack app ",
    text: "Built on NextJs MongoDb",
  },
  {
    id: nanoid(),
    img: homeawayImg,
    url: "https://homeaway-navneet.vercel.app/",
    github: "https://github.com/navneetsingh-cpu/airbnb",
    title: "HomeAway an Airbnb Clone",
    text: "NextJs Full Stack Site built with Zod Validation, Prisma ORM and postgres SQL Db"  },
  {
    id: nanoid(),
    img: gptGeniusImg,
    url: "https://gpt-genius-navneet.vercel.app/",
    github: "https://github.com/navneetsingh-cpu/gpt-genius",
    title: "GptGenius - NextJs full stack app ",
    text: "Built on NextJs Prisma ORM ",
  },
  {
    id: nanoid(),
    img: comfyStoreImg,
    url: "https://comfy-store-navneet.netlify.app/",
    github: "https://github.com/navneetsingh-cpu/react-comfy-store",
    title: "Ecommerce - Comfy Store ",
    text: "Comfy Store made in React",
  },
  {
    id: nanoid(),
    img: weatherForecastImg,
    url: "https://weather-forecast-navneet.streamlit.app/",
    github:
      "https://github.com/navneetsingh-cpu/weather-forecast/blob/main/app.py",
    title: "Streamlit - Weather Forecast",
    text: "Forecast Weather based on City",
  },
  {
    id: nanoid(),
    img: stockTrackerImg,
    url: "https://stock-tracker-navneet.streamlit.app/",
    github:
      "https://github.com/navneetsingh-cpu/stock-tracker/blob/main/streamlit_app.py",
    title: "Streamlit - Stock Price Tracker",
    text: "Tracks Stock Price using Python",
  },
  {
    id: nanoid(),
    img: urlShortnerImg,
    url: "https://url-shortner-navneet.streamlit.app/",
    github:
      "https://github.com/navneetsingh-cpu/url-shortner/blob/main/streamlit_app.py",
    title: "URL shortner",
    text: "Shortens URL using Python",
  },

  {
    id: nanoid(),
    img: numberPlateDetector,
    url: "https://number-plate-detector-navneet.streamlit.app/",
    github:
      "https://github.com/navneetsingh-cpu/number-plate-detector/blob/main/streamlit_app.py",
    title: "Car License Plate Detector",
    text: "Detects and reads the License plate from the car rear picture using a pre trained model",
  },
  {
    id: nanoid(),
    img: canadaPopulationTracker,
    url: "https://canada-population-navneet.streamlit.app/",
    github:
      "https://github.com/navneetsingh-cpu/canada-population/blob/main/streamlit_app.py",
    title: "Canada Population Analyzer",
    text: "Visualize population of Canada",
  },
  {
    id: nanoid(),
    img: quoteGeneratorImage,
    url: "https://quote-generator-navneet.netlify.app/",
    github: "https://github.com/navneetsingh-cpu/quote-generator",
    title: "Quote Generator",
    text: "Quote Generator in Angular",
  },
  {
    id: nanoid(),
    img: unsplashImage,
    url: "https://unsplash-images-navneet.netlify.app/",
    github: "https://github.com/navneetsingh-cpu/unsplash-images",
    title: "Image Search",
    text: "Image Search using React and Unsplash API",
  },
  {
    id: nanoid(),
    img: mixMasterImage,
    url: "https://mixmaster-navneet.netlify.app/",
    github: "https://github.com/navneetsingh-cpu/mix-master",
    title: "Mix Master",
    text: "Cocktail maker website built in React",
  },
];
