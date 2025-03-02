import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Download, ExternalLink, Mail, MapPin, Calendar, Briefcase, GraduationCap, Award, Code, Book, Shield, Database, Server } from 'lucide-react';
import '../styles/main.css';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
}

interface Project {
  title: string;
  tags: string[];
  description: string;
  repoUrl?: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  specialization?: string;
}

interface Skill {
  category: string;
  items: string[];
  colorClass: string;
}

const ResumeWebsite: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = (): void => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');

    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const publications: Publication[] = [
    {
      title: "Leveraging Secure Social Media Crowdsourcing for Gathering Firsthand Account in Conflict Zones",
      authors: "A. K. Orojo et al.",
      venue: "(ASONAM '24)",
      year: "2024"
    },
    {
      title: "Predicting Software Vulnerability Trends with Multi-Recurrent Neural Networks: A Time Series Forecasting Approach",
      authors: "A. K. Orojo et al.",
      venue: "(NLPAICS '24)",
      year: "2024"
    },
    {
      title: "A Unified Framework Incorporating AW-TRBAC and Semantic Variational Autoencoders for Dynamic Threat Detection and Access Control",
      authors: "A. K. Orojo et al.",
      venue: "(DCS-Water '24)",
      year: "2024"
    },
    {
      title: "Access Control Evaluation in Distributed NoSQL Environments",
      authors: "G. Speegle, A. K. Orojo et al.",
      venue: "(SACMAT 2025)",
      year: "2025 (Under Review)"
    },
    {
      title: "AI-Driven Cybersecurity: Fine-Tuned LLMs for Packet-Level and Multi-Modal Network Traffic Analysis",
      authors: "A. K. Orojo et al",
      venue: "(NeurIPS 2025)",
      year: "2025 (Under Review)"
    }
  ];

  const projects: Project[] = [
    {
      title: "Quantum Safe Zero Trust Security for Cyber-Physical Systems",
      tags: ["Post-Quantum", "OpenZiti", "Security"],
      description: "Designed and implemented a quantum-safe version of OpenZiti for Cyber-Physical Systems (CPS) to mitigate risks posed by quantum-enabled adversaries.",
      repoUrl: "https://github.com/LaBackDoor/Post-Quantum"
    },
    {
      title: "PANACEA - Policy Analysis and NoSQL Access Control Evaluation Approach",
      tags: ["NoSQL", "Access Control", "Security"],
      description: "Developed a fine-grained access control system for NoSQL databases, applying policies and generating dynamic access control views.",
      repoUrl: "https://github.com/LaBackDoor/PANACEA"
    },
    {
      title: "DDoS Attack Simulation Framework",
      tags: ["Security", "Simulation", "Research"],
      description: "Built an automated research framework for simulating Distributed Denial of Service (DDoS) attacks in a controlled environment.",
      repoUrl: "https://github.com/LaBackDoor/DDos-Attack"
    },
    {
      title: "TrAice - Network Traffic Analyzer",
      tags: ["LLMs", "Network Analysis", "Cybersecurity"],
      description: "Developed a comprehensive tool that streamlines the analysis, interpretation, and understanding of network traffic data from PCAP files and Log Files, leveraging LLMs like LLama3 to enhance cybersecurity education and detection."
    },
    {
      title: "MAADER - Cyber-Physical Testbed",
      tags: ["CPS", "Security", "Simulation"],
      description: "Designed and implemented a comprehensive cyber-physical testbed integrating emulation, simulation, and physical components to demonstrate and analyze CPS attacks."
    },
    {
      title: "HTTP2 MegEx: Client and Server Implementation",
      tags: ["Java", "Networking", "HTTP2"],
      description: "Developed a comprehensive implementation of HTTP/2 protocols based on RFC7540, including both client and server components.",
      repoUrl: "https://github.com/AKOrojo/Http2_Megex"
    }
  ];

  const experiences: Experience[] = [
    {
      title: "CyberSecurity AI Trainer",
      company: "micro1",
      location: "Remote",
      period: "December 2024 - Present",
      description: [
        "Simulated over 10 cyber attack vectors on large language models in a Docker-based VM environment, identifying and mitigating up to 85% of targeted vulnerabilities.",
        "Designed and maintained secure Docker setups that reduced environment deployment time by 30%, ensuring consistent and reproducible cybersecurity simulations.",
        "Compiled comprehensive technical reports quantifying discovered vulnerabilities and implementing strategic mitigation measures that boosted AI system resilience by 60%."
      ]
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "Baylor University",
      location: "Waco, TX",
      period: "June 2023 - Present",
      description: [
        "Developed and demonstrated a novel approach using Multi-Recurrent Neural Networks (MRNs) for superior time-series forecasting in cybersecurity, outperforming traditional models like ARIMA, FFMLP, SRN, and LSTM by 32.78% with fewer parameters.",
        "Developed and implemented an enhanced access control evaluation framework for distributed NoSQL environments, integrating node identity, distributed processing of Unified Resource Properties (URPs), and data anonymization techniques.",
        "Successfully developed and executed a cybersecurity summer camp, imparting key cyber threat awareness and prevention strategies to 30 students, resulting in a 90% increase in participants' understanding of cybersecurity principles.",
        "Utilized Proxmox, Ansible, and Terraform to effectively provision labs for over 30 different scenarios, enhancing practical learning and fostering advanced technical skills among students.",
        "Developed a comprehensive tool (TrAice) that streamlines the analysis, interpretation, and understanding of network traffic data from PCAP files and Log Files, leveraging LLMs like LLama3 to enhance cybersecurity education and detection.",
        "Designed and implemented a comprehensive cyber-physical testbed (MAADER) integrating emulation, simulation, and physical components to demonstrate and analyze CPS attacks."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Baylor University",
      location: "Waco, TX",
      period: "January 2023 - May 2023",
      description: [
        "Pioneered research on leveraging social media for real-time data collection in conflict zones: Co-authored a research paper titled 'Leveraging Social Media Crowdsourcing for Gathering Ground Truth in Conflict Zones'.",
        "Contributed to academic excellence in data communication education: Assisted in teaching the Data Communication course, supported over 30 students by creating and grading assignments.",
        "Conceptualized and implemented a comprehensive Critical Infrastructure and Cybersecurity course, benefiting industry professionals globally with hands-on lab experiences and actionable intel.",
        "Employed expertise in PLC programming and HMI creation to simulate factory PLC environments, providing practical exposure to industrial automation dynamics."
      ]
    },
    {
      title: "Security Coordinator",
      company: "Apex Ezone",
      location: "Remote",
      period: "August 2021 - Present",
      description: [
        "Developed and maintained robust backend infrastructure for an eSports training and fantasy betting platform: Architected Django-based microservices deployed in separate containers, utilizing PostgreSQL for structured data management and Redis for caching and messaging.",
        "Strengthened organizational security and threat detection: Monitored and analyzed threats using IDS and SIEM tools, conducted log analysis with Splunk to identify suspicious activities, and performed vulnerability assessments with tools like Nessus and NMAP.",
        "Proactively mitigated and responded to security threats: Investigated phishing emails, domains, and IPs with Open-Source tools, leading to a 40% reduction in phishing incidents.",
        "Rescanned and recommissioned mitigated systems to ensure network stability, while researching emerging threats and vulnerabilities to address potential risks and improve incident response times by 30%."
      ]
    },
    {
      title: "Junior Programmer & Data Science Analyst Intern",
      company: "German Institute of Business and Technology",
      location: "Accra, Ghana",
      period: "June 2021 - August 2021",
      description: [
        "Enhanced software quality and reliability: Developed and implemented comprehensive unit testing processes using JUnit and Mockito, alongside automation methods with Selenium and Jenkins, resulting in a 25% decrease in post-deployment bugs and a 40% reduction in runtime errors.",
        "Streamlined design and deployment processes: Defined technological designs using UML diagrams and design patterns to ensure accurate specifications and completed application migrations using Docker and Kubernetes, achieving a 99% on-time delivery rate.",
        "Optimized team efficiency and data operations: Utilized Agile methodologies, including Scrum and Kanban, to improve team efficiency by 20%, while designing Python-based tools and ETL processes to enhance data handling by 30%."
      ]
    },
    {
      title: "Information Technology Teacher",
      company: "Learning Hive",
      location: "Accra, Ghana",
      period: "February 2020 - March 2020",
      description: [
        "Enhanced student engagement and performance through tailored instruction and effective technology integration, resulting in a 15% improvement in overall student performance.",
        "Optimized and maintained educational technology infrastructure to minimize downtime and streamline processes, reducing system downtime by 40%.",
        "Tested and evaluated student progress to assess teaching methods, materials, and projects."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Straitgate School",
      location: "Lagos, Nigeria",
      period: "May 2019 - August 2019",
      description: [
        "Implemented practice exercises and used repetition, enabling students to grasp new concepts quickly, resulting in a 20% improvement in test scores.",
        "Partnered with the teacher to plan and implement lessons following the school's curriculum, goals, and objectives.",
        "Documented student progress and communicated with parents to keep them informed, increasing parental engagement by 30%."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Leti Arts",
      location: "Greater Accra, Ghana",
      period: "May 2018 - August 2018",
      description: [
        "Developed diverse software solutions and applications: Created over 100 mini-games in C++ and in-house applications using Angular and Node.js, improving user engagement by 30% and operational efficiency.",
        "Optimized data analytics and processing: Designed and executed data analysis tools using SQL, Hadoop, Spark, Pandas, and NumPy, boosting data processing speed and enabling actionable business insights.",
        "Streamlined testing and automation: Automated repetitive tasks with Selenium and improved program performance using tools like Py-Spy and cProfile, reducing manual testing time by 60% and achieving a 25% performance boost.",
        "Improved code quality and team productivity: Applied Git to resolve coding issues, cutting bug reports by 70%, and adopted agile methodologies with Jira and Confluence to enhance project delivery timelines."
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "Doctor of Philosophy (PhD) in Computer Science",
      institution: "Baylor University",
      location: "Waco, TX, USA",
      period: "January 2023 - December 2025 (Expected)",
      gpa: "3.53/4.0",
      specialization: "Major in Computer Science"
    },
    {
      degree: "Master of Science (MS) in Cybersecurity",
      institution: "Webster University",
      location: "Saint Louis, MO, USA",
      period: "January 2021 - July 2022",
      gpa: "3.83/4.0",
      specialization: "Combined Major in Cybersecurity"
    },
    {
      degree: "Bachelor of Science (BS) in Computer Science, Minor in Management",
      institution: "Webster University",
      location: "Saint Louis, MO, USA",
      period: "October 2017 - May 2020",
      gpa: "3.54/4.0; CS-only: 4.0",
      specialization: "Combined Major in Computer Science and Minor in Management"
    }
  ];

  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "YAML", "Go", "Terraform HCL", "C++"],
      colorClass: "programming"
    },
    {
      category: "Technologies",
      items: ["Docker", "Kubernetes", "OpenZiti", "Proxmox", "vSphere", "Redis", "PostgreSQL", "MongoDB", "Django", "Flask", "FastAPI", "Ansible", "Terraform"],
      colorClass: "technologies"
    },
    {
      category: "Cybersecurity Tools",
      items: ["Splunk", "Nessus", "NMAP", "IDS/IPS", "SIEM", "Burp Suite", "Metasploit", "Wireshark", "OpenSSL", "OSINT tools", "Snort", "Suricata"],
      colorClass: "security"
    },
    {
      category: "Machine Learning & AI",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "BERT", "LLMs", "Pandas", "NumPy", "NLP-based cybersecurity tools"],
      colorClass: "ai"
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure", "AWS", "CI/CD", "Jenkins", "GitLab CI", "GitHub Actions", "SecDevOps", "Agile", "Scrum", "Kanban"],
      colorClass: "cloud"
    }
  ];

  const certifications = [
    "HashiCorp Terraform Associate (003)",
    "CompTIA Security+",
    "CompTIA Network+",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure Security Engineer Associate",
    "SOC Analyst 2",
    "LPI Linux Essentials"
  ];

  return (
      <div className="resume-container">
        {/* Header with theme toggle */}
        <header className="header">
          <div className="container header-content">
            <h2 className="logo">A K Orojo</h2>
            <div className="desktop-nav">
              <nav className="navigation">
                <ul className="nav-links">
                  <li><a href="#about" className="nav-link">About</a></li>
                  <li><a href="#experience" className="nav-link">Experience</a></li>
                  <li><a href="#education" className="nav-link">Education</a></li>
                  <li><a href="#skills" className="nav-link">Skills</a></li>
                  <li><a href="#projects" className="nav-link">Projects</a></li>
                  <li><a href="#publications" className="nav-link">Publications</a></li>
                  <li className="theme-toggle-container">
                    <button
                        onClick={toggleDarkMode}
                        className="theme-toggle"
                        aria-label="Toggle dark mode"
                    >
                      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
              <div className="mobile-menu">
                <nav>
                  <ul className="mobile-nav-links">
                    <li><a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a></li>
                    <li><a href="#experience" className="mobile-nav-link" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#education" className="mobile-nav-link" onClick={toggleMenu}>Education</a></li>
                    <li><a href="#skills" className="mobile-nav-link" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#publications" className="mobile-nav-link" onClick={toggleMenu}>Publications</a></li>
                  </ul>
                </nav>
              </div>
          )}
        </header>

        <main className="container main-content">
          {/* Hero Section */}
          <section id="about" className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Abanisenioluwa K. Orojo</h1>
              <p className="hero-subtitle">
                Cybersecurity Researcher and Engineer | PhD Candidate | Innovating Data-Driven Solutions for Threat Detection and Resilience
              </p>
              <div className="location">
                <MapPin size={18} className="location-icon" />
                <span className="location-text">Waco, Texas, United States</span>
              </div>
              <div className="hero-actions-container">
                <div className="hero-actions">
                  <a
                      href="mailto:b.korojo@gmail.com"
                      className="btn btn-primary"
                      aria-label="Contact me via email"
                  >
                    <Mail size={18} className="btn-icon" />
                    <span className="btn-text">Contact Me</span>
                  </a>

                  <a
                      href="./assets/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      aria-label="Download my CV in PDF format"
                  >
                    <Download size={18} className="btn-icon" />
                    <span className="btn-text">Download CV</span>
                  </a>

                  <a
                      href="#projects"
                      className="btn btn-tertiary"
                      aria-label="View my portfolio projects"
                  >
                    <Code size={18} className="btn-icon" />
                    <span className="btn-text">View Projects</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-picture-container">
              <div className="profile-picture">
                <img
                    src="./assets/images/profile_pic.jpg"
                    alt="Abanisenioluwa Orojo"
                    className="profile-image"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about-section">
            <h2 className="section-title">
              <Briefcase size={28} className="section-icon" />
              About Me
            </h2>
            <div className="card about-card">
              <p className="about-text">
                Dedicated cybersecurity professional with a strong academic background in Computer Science and Cybersecurity (PhD candidate). Proven track record of leveraging data-driven insights to enhance threat detection capabilities and implement robust encryption solutions.
              </p>
              <p className="about-text">
                Recognized for innovative problem-solving, exemplified by developing novel multi-recurrent neural network models for superior time-series forecasting and attack prediction in cybersecurity.
              </p>
              <p className="about-text">
                Experienced in designing and delivering comprehensive cybersecurity courses and workshops, empowering industry professionals and students with practical skills to defend against evolving cyber threats. Adept at translating complex technical concepts for diverse audiences, fostering understanding and engagement.
              </p>
              <p className="about-text">
                Passionate about making the digital world a safer place by continuously researching and developing innovative solutions to address emerging cybersecurity challenges. Committed to staying at the forefront of the field and contributing to the advancement of cybersecurity knowledge and practices.
              </p>
            </div>

            {/* Social Links Section */}
            <section className="social-links-section">
              <div className="section-header">
                <h3 className="subsection-title">
                  <ExternalLink size={22} className="subsection-icon" />
                  Professional Network
                </h3>
                <p className="subsection-description">Connect with me on these platforms for collaboration opportunities.</p>
              </div>

              <div className="social-links-container">
                <a
                    href="https://www.linkedin.com/in/abaniseorojo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card linkedin"
                    aria-label="Visit my LinkedIn profile"
                >
                  <div className="social-icon-wrapper">
                    <Linkedin size={24} className="social-icon" />
                  </div>
                  <div className="social-content">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-handle">@abaniseorojo</span>
                  </div>
                </a>

                <a
                    href="https://github.com/LaBackDoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card github"
                    aria-label="Visit my GitHub profile"
                >
                  <div className="social-icon-wrapper">
                    <Github size={24} className="social-icon" />
                  </div>
                  <div className="social-content">
                    <span className="social-name">GitHub</span>
                    <span className="social-handle">@LaBackDoor</span>
                  </div>
                </a>

                <a
                    href="https://labackdoor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card website"
                    aria-label="Visit my personal website"
                >
                  <div className="social-icon-wrapper">
                    <ExternalLink size={24} className="social-icon" />
                  </div>
                  <div className="social-content">
                    <span className="social-name">Website</span>
                    <span className="social-handle">labackdoor.com</span>
                  </div>
                </a>

                <a
                    href="mailto:b.korojo@gmail.com"
                    className="social-card email"
                    aria-label="Send me an email"
                >
                  <div className="social-icon-wrapper">
                    <Mail size={24} className="social-icon" />
                  </div>
                  <div className="social-content">
                    <span className="social-name">Email</span>
                    <span className="social-handle">b.korojo@gmail.com</span>
                  </div>
                </a>
              </div>
            </section>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section experience-section">
            <h2 className="section-title">
              <Briefcase size={28} className="section-icon" />
              Professional Experience
            </h2>

            {/* Experience Timeline */}
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="experience-meta">
                    <span className="experience-period">
                      <Calendar size={14} className="meta-icon" />
                      {experience.period}
                    </span>
                        <span className="experience-location">
                      <MapPin size={14} className="meta-icon" />
                          {experience.location}
                    </span>
                      </div>
                      <div className="card experience-card">
                        <h3 className="experience-title">{experience.title}</h3>
                        <p className="experience-company">{experience.company}</p>
                        <ul className="experience-description">
                          {experience.description.map((item, i) => (
                              <li key={i} className="experience-item">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="section education-section">
            <h2 className="section-title">
              <GraduationCap size={28} className="section-icon" />
              Education
            </h2>
            <div className="education-container">
              {education.map((edu, index) => (
                  <div key={index} className="card education-card">
                    <div className="education-header">
                      <div className="education-info">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <p className="education-institution">{edu.institution}</p>
                        <div className="education-location">
                          <MapPin size={16} className="meta-icon" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="education-period">
                        <Calendar size={16} className="meta-icon" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="education-details">
                      {edu.gpa && (
                          <div className="education-detail">
                            <span className="detail-label">GPA:</span> {edu.gpa}
                          </div>
                      )}
                      {edu.specialization && (
                          <div className="education-detail">
                            <span className="detail-label">Specialization:</span> {edu.specialization}
                          </div>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section skills-section">
            <h2 className="section-title">
              <Code size={28} className="section-icon" />
              Skills & Technologies
            </h2>

            <div className="card skills-card">
              <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-category">
                      <h3 className="skill-title">
                        {index === 0 && <Code size={20} className="skill-icon" />}
                        {index === 1 && <Server size={20} className="skill-icon" />}
                        {index === 2 && <Shield size={20} className="skill-icon" />}
                        {index === 3 && <Database size={20} className="skill-icon" />}
                        {index === 4 && <Server size={20} className="skill-icon" />}
                        {skill.category}
                      </h3>
                      <div className="skill-tags">
                        {skill.items.map((item) => (
                            <span key={item} className={`skill-tag ${skill.colorClass}`}>
                        {item}
                      </span>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="certifications-section">
              <h3 className="subsection-title">
                <Award size={20} className="subsection-icon" />
                Certifications
              </h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="card certification-card">
                      <div className="certification-badge">
                        <Award size={16} className="certification-icon" style={{ marginRight: '8px' }} />
                        <span className="certification-name">{cert}</span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section projects-section">
            <h2 className="section-title">
              <Code size={28} className="section-icon" />
              Projects
            </h2>

            <div className="projects-grid">
              {projects.map((project, index) => (
                  <div key={index} className="card project-card">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">
                      {tag}
                    </span>
                      ))}
                    </div>
                    <p className="project-description">
                      {project.description}
                    </p>
                    {project.repoUrl && (
                        <div className="project-link-container">
                          <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                          >
                            <Github size={16} className="project-link-icon" />
                            <span>GitHub Repository</span>
                          </a>
                        </div>
                    )}
                  </div>
                ))}
            </div>
          </section>

          {/* Publications Section */}
          <section id="publications" className="section publications-section">
            <h2 className="section-title">
              <Book size={28} className="section-icon" />
              Publications
            </h2>

            <div className="publications-list">
              {publications.map((pub, index) => (
                  <div key={index} className="card publication-card">
                    <h3 className="publication-title">{pub.title}</h3>
                    <p className="publication-authors">{pub.authors}</p>
                    <div className="publication-meta">
                      <span className="publication-venue">{pub.venue}</span>
                      <span className="publication-year">{pub.year}</span>
                    </div>
                  </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-top">
            <div className="container footer-main">
              <div className="footer-branding">
                <h3 className="footer-name">Abanisenioluwa K. Orojo</h3>
                <p className="footer-tagline">Cybersecurity Researcher | Innovator | Educator</p>
              </div>

              <div className="footer-navigation">
                <h4 className="footer-heading">Quick Links</h4>
                <nav className="footer-nav">
                  <a href="#about" className="footer-nav-link">About</a>
                  <a href="#experience" className="footer-nav-link">Experience</a>
                  <a href="#education" className="footer-nav-link">Education</a>
                  <a href="#skills" className="footer-nav-link">Skills</a>
                  <a href="#projects" className="footer-nav-link">Projects</a>
                  <a href="#publications" className="footer-nav-link">Publications</a>
                </nav>
              </div>

              <div className="footer-contact">
                <h4 className="footer-heading">Contact</h4>
                <a href="mailto:b.korojo@gmail.com" className="footer-contact-item">
                  <Mail size={16} className="footer-contact-icon" />
                  <span>b.korojo@gmail.com</span>
                </a>
                <p className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon" />
                  <span>Waco, Texas, United States</span>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container footer-bottom-content">
              <p className="copyright">© {new Date().getFullYear()} Abanisenioluwa Orojo. All rights reserved.</p>

              <div className="footer-social">
                <a
                    href="mailto:b.korojo@gmail.com"
                    className="footer-social-link"
                    aria-label="Send email"
                >
                  <Mail size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/abaniseorojo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                    href="https://github.com/LaBackDoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
              </div>

              <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="back-to-top"
                  aria-label="Back to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default ResumeWebsite;