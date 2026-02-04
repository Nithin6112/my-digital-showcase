import { Briefcase, Award, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Experience',
      subtitle: 'Data Science Intern',
      company: 'Ekathva Innovations',
      description: 'Big data analysis, ML operations, Advanced Python APIs',
      period: 'Aug 2023 - Sep 2023',
    },
  ];

  const education = [
    {
      degree: 'B.E. in Information Science & Engineering',
      institution: 'JNNCE',
      score: 'CGPA: 8.04',
      period: '2020 - 2024',
    },
    {
      degree: 'Pre University (PUC)',
      institution: 'Sri Akkamahadevi Science PU College',
      score: '75%',
      period: '2018 - 2020',
    },
  ];

  const certifications = [
    'Google Cloud Analytics',
    'Oracle Cloud Infrastructure',
    'Ethical Hacking Essentials',
    'Software Automation Testing',
    'Database Management System',
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto italic">
            "I seek an opportunity to maximize my potential and contribute meaningfully to the organization. I am eager to take on challenging roles where I can share and refine my ideas to develop innovative solutions for real-world scenarios."
          </p>
        </div>

        {/* Experience and Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience Card */}
          <div className="section-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <p className="text-muted-foreground">{exp.subtitle}</p>
                <p className="text-primary font-semibold text-lg">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                <p className="text-muted-foreground text-sm">{exp.period}</p>
              </div>
            ))}

            {/* Education */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Education</h4>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="mb-3 pl-2 border-l-2 border-primary/30">
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-primary text-sm">{edu.score} | {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="section-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>

            {/* Publication */}
            <div className="mt-8 p-4 border-l-4 border-primary rounded-r-lg bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏆</span>
                <span className="text-primary font-semibold">Publication</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Article published in IJRPR journal on Windmill Power Prediction project during April 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
