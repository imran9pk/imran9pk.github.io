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
      details: "Thesis: Agent Based Security Testing of Web Based Applications, advised by Prof. Fathy Elbouraey Eassa. Supported by the KAU International Scholarship."
    },
    {
      degree: "B.Sc. in Software Engineering",
      institution: "International Islamic University Islamabad",
      location: "Pakistan",
      dates: "2006 – 2010",
      details: "Awarded the Merit Scholarship for high academic performance."
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
  skills: [
    {
      category: "AI & LLM",
      items: ["LLM evaluation & benchmarking", "Prompt engineering", "Structured output extraction", "Fine-tuning (QLoRA, SFT)", "Hugging Face Transformers"]
    },
    {
      category: "Languages",
      items: ["Python", "Java", "SQL", "C#"]
    },
    {
      category: "ML & Data",
      items: ["Scikit-learn", "PyTorch", "SHAP", "Feature engineering", "Static & dynamic code analysis", "Dataset construction", "Model evaluation"]
    },
    {
      category: "Infrastructure & Tools",
      items: ["REST APIs", "Git", "SLURM (HPC cluster job management)"]
    }
  ],
  projects: [
    {
      title: "LLM-Based Distributed Trace Analysis Pipeline",
      period: "2025 – Present",
      affiliation: "Extension of TraceLLM benchmark · SPENCER Lab",
      description: "Extended an LLM evaluation benchmark for distributed trace analysis (OpenTelemetry), introducing a token-efficient serialization format (TOON) achieving ~40% token reduction across 9,000+ structured records. Evaluated multiple LLMs on structured log analysis tasks using RAG-compatible context representations, comparing retrieval accuracy across five serialization formats.",
      tags: ["LLMs", "Distributed Tracing", "RAG"],
      code: ""
    },
    {
      title: "LLM-Based Performance Bug Detection Tool",
      period: "2024 – 2025",
      affiliation: "Published at SANER 2026",
      description: "Fine-tuned Qwen2.5-Coder-7B using QLoRA for automated detection of performance antipatterns in Java source code, achieving measurable improvement over zero-shot and few-shot baselines. Built a prompt engineering framework with structured output extraction and evaluation infrastructure across multiple LLM configurations.",
      tags: ["LLM Fine-Tuning", "QLoRA", "Performance Bugs"],
      code: "https://github.com/imran9pk/replication-package_perf_bugs_detection_LLM"
    },
    {
      title: "Performance Test Coverage Analyzer",
      period: "2022 – 2024",
      affiliation: "Published at EMSE 2025, EASE 2024",
      description: "Built a static and dynamic analysis pipeline to extract code features from large Java systems and model their relationship to performance test coverage. Trained and evaluated ML classifiers, including CodeBERT and GraphCodeBERT, on method-level features extracted from 15+ open-source Java projects.",
      tags: ["Static Analysis", "CodeBERT", "Java"],
      code: "https://github.com/SpencerLabAQ/performance-test-coverage"
    },
    {
      title: "Method-Level Energy Prediction Pipeline",
      period: "2025",
      affiliation: "Published at QUATIC 2026 · Vrije Universiteit Amsterdam",
      description: "Built an end-to-end pipeline to predict energy consumption of Java methods using static code features and execution time, combining profiling instrumentation with ML-based modeling. Applied SHAP analysis to identify dominant predictors, providing interpretable energy estimates without requiring full dynamic profiling.",
      tags: ["Energy Estimation", "SHAP", "Java"],
      code: "https://github.com/imran9pk/replication-package_method_energy_java"
    }
  ],
  teaching: [
    {
      course: "Software Engineering, Requirements Engineering, Object-Oriented Analysis & Design, Software Testing",
      role: "Lecturer",
      institution: "International Islamic University Islamabad",
      period: "Feb 2019 – May 2022"
    },
    {
      course: "Undergraduate Computer Science Courses",
      role: "Lecturer",
      institution: "Iqra University, Islamabad Campus",
      period: "Jul 2015 – Jan 2019"
    }
  ],
  administrativeService: [
    {
      role: "Co-PI, EU-funded research project",
      description: "Led establishment of a 50-workstation computer laboratory (approx. €50,000), overseeing procurement, setup, and operationalization.",
      institution: "International Islamic University Islamabad",
      period: "2019 – 2022"
    },
    {
      role: "Coordinator, National Program Accreditation Committee (HEC Pakistan)",
      description: "Curriculum review and learning outcome documentation.",
      institution: "International Islamic University Islamabad",
      period: "2019 – 2022"
    },
    {
      role: "Undergraduate Final Year Project Coordinator",
      description: "Managed project allocation, supervision workflows, and assessment processes across graduating cohorts.",
      institution: "Iqra University, Islamabad Campus",
      period: "2015 – 2019"
    }
  ],
  studentSupervision: [
    "Co-supervised one M.Sc. student at the University of L’Aquila, Italy (completed).",
    "Supervised B.Sc. Final Year Projects across two universities (IIU and Iqra University), mentoring students on problem framing, implementation, and evaluation.",
    "Delivered a guest lecture and hands-on Java tutorial on Software Design Patterns for a graduate-level course at Vrije Universiteit Amsterdam, in collaboration with Assoc. Prof. Ivano Malavolta."
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
      content: "New paper on predicting Java method energy usage with execution time accepted at QUATIC 2026."
    },
    {
      date: "Jan 2026",
      content: "Paper on Large Language Models for Performance Bug Detection accepted at SANER 2026."
    },
    {
      date: "Dec 2025",
      content: "Joined the Artifact Evaluation Committee for ISSTA 2026 and the Open Science Committee for ECSA 2026."
    },
    {
      date: "Dec 2025",
      content: "Successfully defended PhD dissertation at the University of L'Aquila and started as a Postdoctoral Researcher."
    },
    {
      date: "Aug 2025",
      content: "Empirical study on Code Coverage of Performance Tests published in Empirical Software Engineering (EMSE)."
    },
    {
      date: "Feb 2025",
      content: "Joined the Software and Sustainability (S²) Group at Vrije Universiteit Amsterdam as a Scientific Collaborator."
    }
  ]
};
