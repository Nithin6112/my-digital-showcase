import { useEffect, useState, useRef } from 'react';
interface Skill {
  name: string;
  level: number;
  icon: string;
}
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainSkills: Skill[] = [{
    name: 'Python',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  }, {
    name: 'React.js',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }, {
    name: 'Java',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  }, {
    name: 'JavaScript',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  }, {
    name: 'HTML5',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }, {
    name: 'CSS3',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  }, {
    name: 'MySQL',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  }, {
    name: 'C/C++',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
  }];
  const otherTechnologies = [{
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  }, {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  }, {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  }, {
    name: 'Android',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
  }, {
    name: 'Oracle',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'
  }, {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-lg text-cyan-50">
            Technical expertise developed through education, internships, and personal projects
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {mainSkills.map((skill, index) => <div key={skill.name} className="skill-card" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center p-2">
                  <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">{skill.name}</h3>
                  <p className="text-primary text-sm">{skill.level}%</p>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 0.1}s`
            }} />
              </div>
            </div>)}
        </div>

        {/* Other Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {otherTechnologies.map(tech => <div key={tech.name} className="flex flex-col items-center gap-2">
                <div className="tech-badge">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-sm text-cyan-50">{tech.name}</span>
              </div>)}
          </div>
        </div>

        {/* Publication */}
        <div className="mt-16 max-w-3xl mx-auto">
          
        </div>
      </div>
    </section>;
};
export default SkillsSection;