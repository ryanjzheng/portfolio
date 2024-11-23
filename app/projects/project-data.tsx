export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "RAG Powerlifting Coach",
    year: 2024,
    description:
      "I built an AI powerlifting coach that can chat with users about training and technique. It uses RAG (Retrieval-augmented generation) to pull from its knowledge base and give personalized advice. The whole thing runs on Azure Cloud and can handle questions about both programming and powerlifting fundamentals. Think of it like having a knowledgeable lifting buddy that's always available to chat. Unfortunately not currently deployed as AI Search Service is $80 a month!",
    url: "https://github.com/ryanjzheng/Le-Coach",
  },
  {
    title: "Ultimate Productivity App",
    year: 2024,
    description:
      "My own take on a productivity app, along with some AI and NLP capabilities for some spice. Used React and Firebase to make it happen. ",
    url: "https://today-and-tomorrow-c40ef.web.app/",
  },
  {
    title: "Portfolio Website",
    year: 2024,
    description:
      "What you're on right now. Threw it up in less than a day using Vercel and Next.js. Amazed by how easy it was.  ",
    url: "https://www.ryanjzheng.info/",
  },
  {
    title: "CSGO Pro Player Analytics",
    year: 2023,
    description:
      "A small hobby project that provides insights into counter strike professional’s peripherals and settings. It answers questions like “what is the most popular mouse pros use?” and “what is the average sensitivity pros use”. Uses web scraping to retrieve data and Postgres to store it. ",
    url: "https://github.com/ryanjzheng/Player-Analytics-Tool/",
  },
];
