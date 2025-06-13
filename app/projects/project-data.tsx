export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Yugen Galleries E-commerce Website",
    year: 2025,
    description:
      "I combined my love for web development and woodworking by building an e-commerce site from scratch to sell my handmade wooden lanterns. The frontend is Next.js for a fully customizable experience, while a headless Shopify backend powers product management and checkout—so I get the best of both worlds: my own design with Shopify’s reliable infrastructure.",
    url: "https://www.yugengalleries.com/",
  },
  {
    title: "Chinese Menu Translator",
    year: 2025,
    description:
      "I built a mobile app that scans Chinese restaurant menus and turns each dish name into clear English—tap any item to view photos and a breakdown of how it’s made. I built this app because I struggled to figure out what to order at Chinese resturants. Since literal translations like ma yi shang shu (‘ants climbing a tree’) miss the point (it’s actually ground pork with vermicelli noodles), the app uses custom logic and a curated database to nail the meaning. Frontend is React Native for iOS/Android, backend is Python FastAPI, and Firebase Firestore/Storage handles data and image caching for a smooth experience.",
    url: "https://github.com/ryanjzheng/MenuTranslatorBackend",
  },
  {
    title: "RAG Powerlifting Coach",
    year: 2024,
    description:
      "I built an AI powerlifting coach that can chat with users about training and technique. It uses RAG (Retrieval-augmented generation) to pull from its knowledge base and give personalized advice. The whole thing runs on Azure Cloud and can handle questions about both programming and powerlifting fundamentals. Think of it like having a knowledgeable lifting buddy that's always available to chat. Unfortunately not currently deployed as AI Search Service is $80 a month!",
    url: "https://github.com/ryanjzheng/Powerlifting-RAG-Coach",
  },
  {
    title: "Ultimate Productivity App",
    year: 2024,
    description:
      "My own take on a productivity app, along with some AI and NLP capabilities for some spice. Used React, Firebase, and Gemini to make it happen. ",
    url: "https://today-and-tomorrow-c40ef.web.app/",
  },
  {
    title: "Portfolio Website",
    year: 2024,
    description:
      "What you're on right now. Threw it up in less than a day using Vercel and Next.js. Amazed by how easy it was.",
    url: "https://www.ryanjzheng.info/",
  },
  {
    title: "CSGO Pro Player Analytics",
    year: 2023,
    description:
      "A small hobby project that provides insights into counter strike professional’s peripherals and settings. It answers questions like “what is the most popular mouse pros use?” and “what is the average sensitivity pros use”. Uses web scraping to retrieve data. ",
    url: "https://github.com/ryanjzheng/Player-Analytics-Tool/",
  },
];