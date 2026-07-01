export const profileData = {
  personal: {
    name: "Muhammad Imran",
    title: "Postdoctoral Researcher in Software Engineering",
    institution: "SPENCER Laboratory, University of L’Aquila, Italy",
    location: "L'Aquila, Italy",
    tagline: "Empirical software engineering, software performance engineering, performance bug detection, performance testing, energy estimation, machine learning, and large language models for software engineering.",
    avatar: "https://imran9pk.github.io/images/profileImage_imran.jpg",
    email: "imran9pk@gmail.com",
    cvUrl: process.env.PUBLIC_URL + "/Muhammad_Imran_CV.pdf",
    socials: {
      scholar: "https://scholar.google.com/citations?user=S6gCcsMAAAAJ",
      orcid: "https://orcid.org/", // General ORCID URL or search
      github: "https://github.com/imran9pk",
      linkedin: "https://linkedin.com/in/imran9pk",
      email: "mailto:imran9pk@gmail.com",
      portfolio: "https://imran9pk.github.io"
    }
  },
  researchInterests: [
    {
      title: "Empirical Software Engineering",
      description: "Using empirical methods to analyze software systems, repositories, and developer behaviors to discover insights and improve software quality."
    },
    {
      title: "Software Performance Engineering",
      description: "Analyzing and optimizing software speed, scalability, and resource usage throughout the development life cycle."
    },
    {
      title: "Performance Bug Detection & Testing",
      description: "Automating the detection of performance regressions, bottlenecks, and inefficient code structures through testing and analysis."
    },
    {
      title: "Energy Estimation in Java Systems",
      description: "Modeling and predicting the energy consumption of software systems at the method level without specialized hardware meters."
    },
    {
      title: "Large Language Models & AI for SE",
      description: "Leveraging cutting-edge LLMs and machine learning algorithms to automate code generation, performance bug finding, and automated testing."
    },
    {
      title: "Software Testing & Analysis",
      description: "Static and dynamic analysis techniques, code coverage optimization, and agent-based automated testing frameworks."
    }
  ],
  education: [
    {
      degree: "Ph.D. in Information and Communication Technologies",
      institution: "University of L’Aquila",
      location: "Italy",
      dates: "2022 – 2025",
      details: "Research focus on automating software performance problem detection using empirical methods, machine learning, and Large Language Models (LLMs). Supported by the Italian Government Ph.D. Scholarship."
    },
    {
      degree: "M.Sc. in Computer Science",
      institution: "King Abdulaziz University",
      location: "Saudi Arabia",
      dates: "2012 – 2014",
      details: "Graduated with High Honors (CGPA: 4.82 / 5.0). Specialization in Software Engineering and Agent-Based Systems. Supported by KAU International Scholarship."
    },
    {
      degree: "B.Sc. in Software Engineering",
      institution: "International Islamic University Islamabad",
      location: "Pakistan",
      dates: "2006 – 2010",
      details: "Graduated with Honors (CGPA: 3.83 / 4.0). Specialization in software design, development, and testing methodologies. Awarded Merit Scholarship."
    }
  ],
  experience: [
    {
      role: "Postdoctoral Researcher",
      institution: "SPENCER Laboratory, University of L'Aquila",
      location: "Italy",
      dates: "2025 – Present",
      description: "Conducting advanced research in software performance assurance, empirical analysis, and the applications of LLMs for automated performance bug detection and test code coverage optimization."
    },
    {
      role: "Scientific Collaborator / Visiting Researcher",
      institution: "Software and Sustainability (S²) Group, Vrije Universiteit Amsterdam",
      location: "Netherlands",
      dates: "Feb 2025 – Apr 2025",
      description: "Collaborated on method-level energy estimation in Java systems with Dr. Ivano Malavolta. Explored the relationships between code features, execution time, and power consumption."
    },
    {
      role: "Lecturer / Senior Lecturer",
      institution: "International Islamic University Islamabad",
      location: "Pakistan",
      dates: "2014 – 2022",
      description: "Taught undergraduate CS and SE courses including Software Engineering, Object-Oriented Programming, and Software Testing. Supervised 15+ capstone projects, mentored student groups, and acted as Academic Coordinator."
    },
    {
      role: "Lecturer",
      institution: "Iqra University Islamabad Campus",
      location: "Pakistan",
      dates: "2014 – 2015",
      description: "Delivered lectures in core software engineering subjects and managed software project labs for undergraduate students."
    },
    {
      role: "Software Engineer",
      institution: "Diyatech Pvt. Ltd.",
      location: "Pakistan",
      dates: "2011 – 2012",
      description: "Developed SharePoint enterprise solutions and optimized high-performance products including the 'Storage Edge' SharePoint optimization module."
    },
    {
      role: "Junior Software Engineer",
      institution: "360 Technologies Pvt. Ltd.",
      location: "Pakistan",
      dates: "2010 – 2011",
      description: "Built specialized database systems, including the Budget Management System for the Pakistan Navy, focusing on data consistency and query performance."
    }
  ],
  publications: [
    {
      id: "pub-saner-2026",
      title: "An Empirical Investigation on the use of Large Language Models for Performance Bug Detection",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER)",
      year: "2026",
      type: "Conference",
      selected: true,
      doi: "#",
      pdf: "#",
      code: "https://github.com/imran9pk"
    },
    {
      id: "pub-icpc-2026",
      title: "Method-Level Energy Prediction in Java Using Code Features and Execution Time",
      authors: "Muhammad Imran, Ivano Malavolta, Vincenzo Stoico",
      venue: "International Conference on Program Comprehension (ICPC) — Under Review",
      year: "2026",
      type: "Under Review",
      selected: true,
      doi: "",
      pdf: "#",
      code: "https://github.com/imran9pk"
    },
    {
      id: "pub-emse-2025",
      title: "Is Code Coverage of Performance Tests Related to Source Code Features? An Empirical Study on Open-Source Java Systems",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "Empirical Software Engineering (EMSE), Vol. 30, Article 157",
      year: "2025",
      type: "Journal",
      selected: true,
      doi: "https://doi.org/10.1007/s10664-024-10565-x",
      pdf: "#",
      code: "https://github.com/imran9pk"
    },
    {
      id: "pub-ease-2024",
      title: "An Empirical Study on Code Coverage of Performance Testing",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "International Conference on Evaluation and Assessment in Software Engineering (EASE)",
      year: "2024",
      type: "Conference",
      selected: false,
      doi: "https://doi.org/10.1145/3661167.3661210",
      pdf: "#",
      code: "https://github.com/imran9pk"
    },
    {
      id: "pub-ccit-2016",
      title: "Dynamic Analysis for Security Testing of Web-Based Applications Using Agent Technology",
      authors: "Muhammad Imran, Khalid Jambi, Fawzi Eassa",
      venue: "4th International Conference on Advances in Computing, Communication and Information Technology (CCIT)",
      year: "2016",
      type: "Conference",
      selected: false,
      doi: "https://doi.org/10.15224/978-1-63248-092-7-39",
      pdf: "#",
      code: ""
    },
    {
      id: "pub-ijisa-2015",
      title: "Query Optimization in Arabic Plagiarism Detection: An Empirical Study",
      authors: "Imran H. Khan, M. A. Siddiqui, Khalid M. Jambi, Muhammad Imran, Abdullah A. Bagais",
      venue: "International Journal of Intelligent Systems and Applications (IJISA), Vol. 7, Issue 1",
      year: "2015",
      type: "Journal",
      selected: false,
      doi: "https://doi.org/10.5815/ijisa.2015.01.03",
      pdf: "#",
      code: ""
    },
    {
      id: "pub-ijser-2014",
      title: "Improving the Operating System Resource Management by Processes Simulation",
      authors: "Muhammad Imran, Wajeeh Alhalabi",
      venue: "International Journal of Scientific & Engineering Research (IJSER), Vol. 5, Issue 2",
      year: "2014",
      type: "Journal",
      selected: false,
      doi: "",
      pdf: "#",
      code: ""
    }
  ],
  projects: [
    {
      title: "Performance Bug Detection using Large Language Models",
      description: "Evaluating the efficacy of advanced generative LLMs (GPT-4, Llama, Gemini) in identifying performance regressions and bottlenecks in complex object-oriented software.",
      tags: ["LLMs", "Performance Engineering", "Empirical study"],
      bgUrl: "https://images.pexels.com/photos/34804021/pexels-photo-34804021.jpeg"
    },
    {
      title: "Code Coverage of Performance Tests in Java Systems",
      description: "An empirical investigation tracking how software complexity, test composition, and architectural patterns correlate with the coverage profile of performance test suites.",
      tags: ["Performance Testing", "Java Systems", "Code Coverage"],
      bgUrl: "https://images.pexels.com/photos/20396530/pexels-photo-20396530.jpeg"
    },
    {
      title: "Method-Level Energy Prediction in Java",
      description: "A collaborative effort mapping code metrics and execution profiles to power consumption, providing developers with compiler-level energy diagnostics.",
      tags: ["Green Computing", "Energy Modeling", "Static Analysis"],
      bgUrl: "https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg"
    },
    {
      title: "Agent-Based Security Testing of Web Applications",
      description: "Multi-agent framework that crawls web architectures dynamically, simulating hostile actors to uncover vulnerabilities in session management and input validation.",
      tags: ["Agent Technology", "Dynamic Analysis", "Security Testing"],
      bgUrl: "https://images.pexels.com/photos/34804021/pexels-photo-34804021.jpeg"
    },
    {
      title: "Arabic Plagiarism Detection System",
      description: "Implementing query optimization and custom indexing pipelines to scan and match stylistic and semantic patterns across large-scale Arabic corpora.",
      tags: ["Information Retrieval", "Plagiarism Detection", "NLP"],
      bgUrl: "https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg"
    }
  ],
  teaching: [
    {
      course: "Software Testing and Analysis",
      role: "Lecturer / Lead Instructor",
      institution: "International Islamic University Islamabad",
      period: "Undergraduate Level"
    },
    {
      course: "Object-Oriented Programming (Java / C++)",
      role: "Lecturer / Lab Coordinator",
      institution: "International Islamic University Islamabad",
      period: "Undergraduate Level"
    },
    {
      course: "Software Engineering & Architecture",
      role: "Lecturer",
      institution: "International Islamic University Islamabad",
      period: "Undergraduate Level"
    },
    {
      course: "Web Engineering & Design Patterns",
      role: "Lecturer & Project Supervisor",
      institution: "International Islamic University Islamabad & Iqra University",
      period: "Undergraduate Level"
    }
  ],
  academicService: [
    {
      venue: "ISSTA 2026 (International Symposium on Software Testing and Analysis)",
      role: "Program Committee / Reviewer",
      year: "2026"
    },
    {
      venue: "ECSA 2026 (European Conference on Software Architecture)",
      role: "Program Committee / Reviewer",
      year: "2026"
    },
    {
      venue: "MSR 2026 (Mining Software Repositories)",
      role: "Program Committee / Reviewer",
      year: "2026"
    },
    {
      venue: "AISA 2025 (Artificial Intelligence for Software Assurance)",
      role: "Program Committee / Reviewer",
      year: "2025"
    },
    {
      venue: "IEEE Transactions on Software Engineering (TSE)",
      role: "Journal Reviewer",
      year: "Ongoing"
    },
    {
      venue: "Empirical Software Engineering (EMSE)",
      role: "Journal Reviewer",
      year: "Ongoing"
    },
    {
      venue: "Journal of Systems and Software (JSS)",
      role: "Journal Reviewer",
      year: "Ongoing"
    }
  ],
  awards: [
    {
      title: "Ph.D. Scholarship & Fellowship",
      institution: "University of L’Aquila / Italian Government",
      year: "2022",
      description: "Fully funded three-year scholarship for doctoral studies in Information and Communication Technologies."
    },
    {
      title: "International Research Scholarship",
      institution: "King Abdulaziz University",
      year: "2012",
      description: "Prestigious academic award and full fellowship for M.Sc. in Computer Science."
    },
    {
      title: "Academic Merit Scholarship",
      institution: "International Islamic University Islamabad",
      year: "2006",
      description: "Undergraduate tuition waiver awarded for maintaining top academic standing throughout B.Sc. studies."
    }
  ],
  news: [
    {
      date: "Jan 2026",
      content: "Paper on Large Language Models for Performance Bug Detection accepted at SANER 2026! 🚀",
      category: "publication"
    },
    {
      date: "Dec 2025",
      content: "Honored to join the Program Committee for ISSTA 2026 and ECSA 2026! 📋",
      category: "service"
    },
    {
      date: "Oct 2025",
      content: "Successfully defended PhD dissertation at the University of L'Aquila and starting as a Postdoctoral Researcher! 🎓",
      category: "milestone"
    },
    {
      date: "Aug 2025",
      content: "Our empirical study on Code Coverage of Performance Tests is published in EMSE! 📚",
      category: "publication"
    },
    {
      date: "Feb 2025",
      content: "Joined the Software and Sustainability (S²) Group at Vrije Universiteit Amsterdam as a Scientific Collaborator! 🇳🇱",
      category: "collaboration"
    }
  ]
};
