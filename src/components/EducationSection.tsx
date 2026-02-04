import { BookOpen, Building, GraduationCap, ExternalLink } from 'lucide-react';
const EducationSection = () => {
  const educationData = [{
    icon: BookOpen,
    title: 'SSLC',
    institution: 'Sri Akkamahadevi English High School, Bhadravathi',
    description: 'Completed SSLC with 80% score, building a strong academic foundation.',
    score: '80%',
    period: 'June 2017 - April 2018',
    driveLink: 'YOUR_GOOGLE_DRIVE_LINK_SSLC' // Replace with actual link
  }, {
    icon: Building,
    title: 'Pre University (PUC)',
    institution: 'Sri Akkamahadevi Science PU College, Bhadravathi',
    description: 'Completed Pre University Education in Science stream with 75% score.',
    score: '75%',
    period: 'July 2018 - March 2020',
    driveLink: 'YOUR_GOOGLE_DRIVE_LINK_PUC' // Replace with actual link
  }, {
    icon: GraduationCap,
    title: 'B.E. (ISE)',
    institution: 'Jawaharlal Nehru National College of Engineering, Shivamogga',
    description: 'Bachelor of Engineering in Information Science & Engineering with CGPA of 8.04.',
    score: 'CGPA: 8.04',
    period: 'Dec 2020 - June 2024',
    driveLink: 'YOUR_GOOGLE_DRIVE_LINK_BE' // Replace with actual link
  }];
  return <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto">
            My academic journey that shaped my technical expertise and problem-solving skills
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => <div key={index} className="education-card group">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <edu.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-primary text-center mb-2">
                {edu.title}
              </h3>

              {/* Institution */}
              <p className="text-sm lg:text-base text-center mb-3 px-2 text-cyan-50">
                {edu.institution}
              </p>

              {/* Score Badge */}
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm lg:text-base rounded-full font-semibold">
                  {edu.score}
                </span>
              </div>

              {/* Period */}
              <p className="text-xs text-center mb-6 text-cyan-50 lg:text-base">
                {edu.period}
              </p>

              {/* Know More Button */}
              <a href={edu.driveLink} target="_blank" rel="noopener noreferrer" className="know-more-btn text-base rounded-sm text-primary-foreground bg-primary">
                Know More
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default EducationSection;