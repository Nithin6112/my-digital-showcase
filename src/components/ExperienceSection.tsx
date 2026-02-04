import { Briefcase, Award, ExternalLink, FileText, Lightbulb } from 'lucide-react';

const ExperienceSection = () => {
  const certifications = [
    { name: 'Google Cloud Analytics Certification', date: 'September 2022', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_GOOGLE_CLOUD' },
    { name: 'Java Programming - Great Learning', date: 'October 2023', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_JAVA' },
    { name: 'Basics of Python - Infosys Springboard', date: 'October 2023', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_PYTHON' },
    { name: 'Oracle Cloud Infrastructure - Oracle University', date: 'September 2023', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_ORACLE' },
    { name: 'Database Management System', date: 'November 2023', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_DBMS' },
    { name: 'Ethical Hacking Essentials - EC-Council', date: 'February 2024', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_ETHICAL_HACKING' },
    { name: 'Software Automation Testing - PwC Academy', date: 'August 2024', driveLink: 'YOUR_GOOGLE_DRIVE_LINK_AUTOMATION_TESTING' },
  ];

  const activities = [
    { 
      name: 'Student Development Program on Analyzing Computer Networks, Microcontroller & Embedded Systems', 
      date: 'August 2022', 
      driveLink: 'YOUR_GOOGLE_DRIVE_LINK_SDP' 
    },
    { 
      name: 'AI for Students: Build Your Own Generative AI Model - Workshop by IIT Delhi alumnus', 
      date: 'December 2023', 
      driveLink: 'YOUR_GOOGLE_DRIVE_LINK_AI_WORKSHOP' 
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 underline decoration-2 underline-offset-8">
            Experience & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-4xl mx-auto mt-6">
            I bring hands-on experience through internships, projects, and job simulations, where I've worked with big data, machine learning, and real-world problem-solving. Alongside my practical experience, I've earned certifications in Java, Ethical Hacking, Blockchain, and Cybersecurity, which showcase my ability to adapt to diverse technologies and continuously expand my skill set.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Internship Card */}
          <div className="experience-card">
            <h3 className="text-xl lg:text-2xl font-bold text-primary text-center mb-4">Internship</h3>
            <p className="text-muted-foreground text-base lg:text-lg text-center">
              "The internship was conducted at Jawaharlal Nehru New College of Engineering, Shivamogga, under the JNNCE EI LEARN Platform, in collaboration with Ekathva Innovations Pvt. Ltd., focusing on big data analysis and machine learning."
              <a 
                href="YOUR_GOOGLE_DRIVE_LINK_INTERNSHIP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>

          {/* Job Simulations Card */}
          <div className="experience-card">
            <h3 className="text-xl lg:text-2xl font-bold text-primary text-center mb-4">Job Simulations</h3>
            <p className="text-muted-foreground text-base lg:text-lg text-center">
              Completed a job simulation at Forage, gaining hands-on experience in real-world Data Analytics and cybersecurity scenarios. Developed skills in Exploratory Data Analysis (EDA), Machine Learning (ML), threat detection, vulnerability assessment, and network security through tasks designed by industry experts. Enhanced problem-solving abilities and applied theoretical knowledge to practical challenges. This experience demonstrated readiness for professional roles in cybersecurity.
              <a 
                href="YOUR_GOOGLE_DRIVE_LINK_JOB_SIMULATION" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>

          {/* Certifications Card */}
          <div className="experience-card">
            <h3 className="text-xl lg:text-2xl font-bold text-primary text-center mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-foreground text-sm lg:text-base group-hover:text-primary transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-muted-foreground text-xs lg:text-sm">{cert.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Publication Card */}
          <div className="experience-card border-l-4 border-primary">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary">Publication</h3>
            </div>
            <p className="text-muted-foreground text-base lg:text-lg text-center">
              Article published in IJRPR journal on Windmill Power Prediction project during April 2024.
              <a 
                href="YOUR_GOOGLE_DRIVE_LINK_PUBLICATION" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </div>

          {/* Extracurricular Activities Card */}
          <div className="experience-card">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary">Extracurricular Activities</h3>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <a
                  key={index}
                  href={activity.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <span className="text-primary mt-1">•</span>
                  <div className="flex-1">
                    <p className="text-foreground text-sm lg:text-base group-hover:text-primary transition-colors">
                      {activity.name}
                    </p>
                    <p className="text-muted-foreground text-xs lg:text-sm">{activity.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center pt-8">
            <a
              href="YOUR_GOOGLE_DRIVE_LINK_CV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary inline-flex items-center gap-2"
            >
              Download CV
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
