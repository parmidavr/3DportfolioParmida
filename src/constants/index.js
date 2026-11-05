import { carrent, decesFrance , SmallWorld, liris } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];
  
    
  const projects = [
    {
      name: "Finance Tracker",
      description:
        "The Finance Tracker app lets users manage budgets and expenses by adding, editing, and categorizing transactions. It shows spending with a pie chart and alerts users when budgets are exceeded. The app supports JSON data import/export and features a clean, responsive Qt Widgets interface with easy navigation",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Qmake",
          color: "green-text-gradient",
        },
        {
          name: "QtCreator",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/parmidavr/FinanceTracker",
    },
    {
      name: "Décès en France",
      description:
      "A data analysis project based on French mortality records. The application analyzes death statistics by year, age, and geographic location using structured datasets. It integrates an AI-powered assistant to help interpret results and includes data forecasting features to provide predictive insights based on historical trends.",
     tags: [
        { name: "Data", color: "blue-text-gradient" },
        { name: "SQL", color: "green-text-gradient" },
        { name: "Python", color: "pink-text-gradient" },
      ],
      image: decesFrance, // replace later with decesFrance if you add an image
      source_code_link: "https://github.com/parmidavr/deces.git",
    },
    {
      name: "Small World",
      description:
        "A tile-based strategy game inspired by constraint satisfaction mechanics. Players place tiles on a grid to fulfill multiple constraints and score points. The project features turn-based gameplay, dynamic scoring, and a complete game model including players, grids, tiles, and constraints.",
      tags: [
        { name: "Python", color: "blue-text-gradient" },
        { name: "Swing(GUI)", color: "green-text-gradient" },
        { name: "MVC", color: "pink-text-gradient" },
      ],
      image: SmallWorld, 
      source_code_link: "https://github.com/parmidavr/SmallWorld.git",
    },

    {
      name: "LLM Conversational Agent for Health Data Analysis",
      description:
        "An ongoing research project at LIRIS (CNRS) focused on developing an LLM-powered conversational agent that helps clinicians and researchers explore and analyze health data through natural language. The agent aims to support Text-to-SQL queries, Python-based data analysis, supervised machine learning, and clustering, making complex data analysis more accessible to non-technical users.",
      status: "In Progress",
      tags: [
        { name: "LLM", color: "blue-text-gradient" },
        { name: "Python", color: "green-text-gradient" },
        { name: "Machine Learning", color: "pink-text-gradient" },
        { name: "Text-to-SQL", color: "blue-text-gradient" },
      ],
      image: liris,
      source_code_link: null,
    },
   
  ];
  
  export { projects };
  