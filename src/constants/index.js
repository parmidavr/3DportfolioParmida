import {   
    carrent,   
  } from "../assets";


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
    
   
  ];
  
  export { projects };
  