export const profileData = {
  personal: {
    name: "Muhammad Imran",
    title: "Postdoctoral Researcher in Software Engineering",
    institution: "SPENCER Laboratory, University of L’Aquila, Italy",
    location: "L'Aquila, Italy",
    tagline: "Empirical software engineering, software performance engineering, performance bug detection, performance testing, energy estimation, machine learning, and large language models for software engineering.",
    avatar: process.env.PUBLIC_URL + "/images/profileImage_imran.jpg",
    email: "imran9pk@gmail.com",
    cvUrl: process.env.PUBLIC_URL + "/Muhammad_Imran_CV.pdf",
    socials: {
      scholar: "https://scholar.google.com/citations?user=S6gCcsMAAAAJ",
      orcid: "https://orcid.org/0009-0007-7931-8300",
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
      dates: "Dec 2025 – Present",
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
      role: "Lecturer",
      institution: "International Islamic University Islamabad",
      location: "Pakistan",
      dates: "Feb 2019 – May 2022",
      description: "Taught undergraduate CS and SE courses including Software Engineering, Requirements Engineering, Object-Oriented Analysis and Design, and Software Testing. Supervised final year projects and contributed to departmental accreditation committees."
    },
    {
      role: "Lecturer",
      institution: "Iqra University Islamabad Campus",
      location: "Pakistan",
      dates: "Jul 2015 – Jan 2019",
      description: "Delivered undergraduate CS courses and supervised final year projects with academic and technical mentorship, coordinating undergraduate project workflows."
    },
    {
      role: "Software Engineer",
      institution: "Diyatech Pvt. Ltd.",
      location: "Pakistan",
      dates: "May 2011 – Nov 2011",
      description: "Developed SharePoint enterprise solutions and optimized high-performance products including the 'Storage Edge' SharePoint optimization module."
    },
    {
      role: "Junior Software Engineer",
      institution: "360 Technologies Pvt. Ltd.",
      location: "Pakistan",
      dates: "Sep 2010 – Apr 2011",
      description: "Built specialized database systems, including the Budget Management System for the Pakistan Navy, focusing on data consistency and query performance."
    }
  ],
  publications: [
    {
      id: "pub-quatic-2026",
      title: "Static Metrics Are Insufficient: Predicting Java Method Energy Usage with Execution Time",
      authors: "Muhammad Imran, Ivano Malavolta, Vincenzo Stoico",
      venue: "International Conference on the Quality of Information and Communications Technology (QUATIC)",
      year: "2026",
      type: "Conference",
      selected: true,
      doi: "",
      pdf: "https://arxiv.org/pdf/2607.06124",
      code: "https://github.com/imran9pk/replication-package_method_energy_java"
    },
    {
      id: "pub-saner-2026",
      title: "An Empirical Investigation on the use of Large Language Models for Performance Bug Detection",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER)",
      year: "2026",
      type: "Conference",
      selected: true,
      doi: "https://doi.org/10.1109/SANER67736.2026.00044",
      pdf: "",
      code: "https://github.com/imran9pk/replication-package_perf_bugs_detection_LLM"
    },
    {
      id: "pub-emse-2025",
      title: "Is Code Coverage of Performance Tests Related to Source Code Features? An Empirical Study on Open-Source Java Systems",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "Empirical Software Engineering (EMSE), Vol. 30, Article 157",
      year: "2025",
      type: "Journal",
      selected: true,
      doi: "https://doi.org/10.1007/s10664-025-10712-3",
      pdf: "",
      code: "https://github.com/SpencerLabAQ/performance-test-coverage"
    },
    {
      id: "pub-ease-2024",
      title: "An Empirical Study on Code Coverage of Performance Testing",
      authors: "Muhammad Imran, Vittorio Cortellessa, Davide Di Ruscio, Riccardo Rubei, Luca Traini",
      venue: "International Conference on Evaluation and Assessment in Software Engineering (EASE)",
      year: "2024",
      type: "Conference",
      selected: false,
      doi: "https://doi.org/10.1145/3661167.3661196",
      pdf: "",
      code: "https://github.com/SpencerLabAQ/replication-package_performance-test-coverage"
    },
    {
      id: "pub-ccit-2016",
      title: "Dynamic Analysis for Security Testing of Web-Based Applications Using Agent Technology",
      authors: "Muhammad Imran, Khalid Jambi, Fawzi Eassa",
      venue: "4th International Conference on Advances in Computing, Communication and Information Technology (CCIT)",
      year: "2016",
      type: "Conference",
      selected: false,
      doi: "",
      pdf: "https://www.researchgate.net/publication/324062674_Dynamic_Analysis_for_Security_Testing_of_WEB_Based_Applications_Using_Agent_Technology",
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
      doi: "https://doi.org/10.5815/ijisa.2015.01.07",
      pdf: "",
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
      pdf: "https://www.academia.edu/download/50379382/Improving-the-Operating-System-Resource-Management.pdf",
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
      venue: "ISSTA 2026 (ACM SIGSOFT International Symposium on Software Testing and Analysis)",
      role: "Artifact Evaluation Committee Member",
      year: "2026"
    },
    {
      venue: "ASE 2026 (IEEE/ACM International Conference on Automated Software Engineering)",
      role: "Artifact Evaluation Committee Member",
      year: "2026"
    },
    {
      venue: "MSR 2026 (International Conference on Mining Software Repositories)",
      role: "Junior Program Committee Member, Technical Papers track",
      year: "2026"
    },
    {
      venue: "ECSA 2026 (European Conference on Software Architecture)",
      role: "Open Science Committee Member",
      year: "2026"
    },
    {
      venue: "AISA 2025 (International Workshop on AI-Assisted Software Architecting)",
      role: "Program Committee Member",
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
      title: "Ph.D. Scholarship",
      institution: "University of L’Aquila, Italy",
      year: "2022 – 2025",
      description: "Awarded for doctoral studies in Computer Science."
    },
    {
      title: "International Scholarship (MSc)",
      institution: "King Abdulaziz University, Saudi Arabia",
      year: "2012 – 2014",
      description: "Awarded for academic excellence."
    },
    {
      title: "Merit Scholarship (BSc)",
      institution: "International Islamic University Islamabad",
      year: "2007 – 2010",
      description: "Awarded for high academic performance."
    }
  ],
  news: [
    {
      date: "Jul 2026",
      content: "New paper on predicting Java method energy usage with execution time accepted at QUATIC 2026! ⚡",
      category: "publication"
    },
    {
      date: "Jan 2026",
      content: "Paper on Large Language Models for Performance Bug Detection accepted at SANER 2026! 🚀",
      category: "publication"
    },
    {
      date: "Dec 2025",
      content: "Honored to join the Artifact Evaluation Committee for ISSTA 2026 and the Open Science Committee for ECSA 2026! 📋",
      category: "service"
    },
    {
      date: "Dec 2025",
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
