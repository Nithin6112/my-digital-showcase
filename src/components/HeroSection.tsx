import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Data Scientist', 'Python Developer', 'Machine Learning Engineer', 'Full Stack Developer'];
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    const currentRole = roles[roleIndex];
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (charIndex <= currentRole.length) {
          setTypedText(currentRole.slice(0, charIndex));
          charIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTypedText(currentRole.slice(0, charIndex));
        } else {
          isDeleting = false;
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [roleIndex]);
  const socialLinks = [{
    icon: Github,
    href: 'https://github.com/Nithin6112',
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: 'https://linkedin.com/in/nithin-s',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: 'mailto:s.nithin6112@gmail.com',
    label: 'Email'
  }, {
    icon: Phone,
    href: 'tel:+919538186124',
    label: 'Phone'
  }];
  return <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with 3D Curved Frame */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative animate-float">
              {/* Hexagonal tech nodes orbiting */}
              <div className="absolute -top-8 left-1/4 w-6 h-6 border-2 border-primary/50 rotate-45 animate-pulse" style={{
              animationDelay: '0s'
            }} />
              <div className="absolute top-10 -right-10 w-5 h-5 border-2 border-primary/40 rounded-sm rotate-12 animate-pulse" style={{
              animationDelay: '0.7s'
            }} />
              <div className="absolute bottom-20 -left-12 w-4 h-4 border-2 border-primary/60 rotate-45 animate-pulse" style={{
              animationDelay: '1.4s'
            }} />
              <div className="absolute -bottom-6 right-1/4 w-5 h-5 border-2 border-primary/30 rounded-sm rotate-45 animate-pulse" style={{
              animationDelay: '2.1s'
            }} />
              
              {/* Connecting circuit lines */}
              <svg className="absolute inset-0 w-[350px] h-[450px] md:w-[400px] md:h-[500px] z-0" viewBox="0 0 400 500">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Orbiting ellipses */}
                <ellipse cx="200" cy="250" rx="195" ry="245" fill="none" stroke="hsl(190, 100%, 50%)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" className="animate-spin" style={{
                transformOrigin: '200px 250px',
                animationDuration: '30s'
              }} />
                <ellipse cx="200" cy="250" rx="185" ry="235" fill="none" stroke="hsl(190, 100%, 50%)" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.15" className="animate-spin" style={{
                transformOrigin: '200px 250px',
                animationDuration: '25s',
                animationDirection: 'reverse'
              }} />
                {/* Glowing dots on orbit */}
                <circle cx="200" cy="10" r="3" fill="hsl(190, 100%, 50%)" filter="url(#glow)" opacity="0.7">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 250" to="360 200 250" dur="15s" repeatCount="indefinite" />
                </circle>
                <circle cx="390" cy="250" r="2.5" fill="hsl(190, 100%, 60%)" filter="url(#glow)" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="180 200 250" to="540 200 250" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="10" cy="250" r="2" fill="hsl(190, 100%, 50%)" filter="url(#glow)" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="90 200 250" to="450 200 250" dur="18s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Pulsating glow behind image */}
              <div className="absolute inset-0 w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <path d="M200,50 C320,50 370,150 370,250 C370,380 300,450 200,450 C100,450 30,380 30,250 C30,150 80,50 200,50" fill="hsl(190, 100%, 50%)" opacity="0.15" filter="url(#glow)" className="animate-pulse-glow" />
                </svg>
              </div>

              {/* Profile image container with curved D-shape */}
              <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] overflow-hidden">
                <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full z-10">
                  <defs>
                    <clipPath id="profileClip">
                      <path d="M180,40 C320,40 360,140 360,250 C360,390 290,460 180,460 C80,460 40,380 40,250 C40,140 70,40 180,40" />
                    </clipPath>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(190, 100%, 60%)" />
                      <stop offset="50%" stopColor="hsl(0, 0%, 100%)" />
                      <stop offset="100%" stopColor="hsl(190, 100%, 50%)" />
                    </linearGradient>
                  </defs>
                  <path d="M180,35 C325,35 365,140 365,250 C365,395 295,465 180,465 C75,465 35,380 35,250 C35,140 65,35 180,35" fill="none" stroke="url(#borderGradient)" strokeWidth="3" filter="url(#glow)" />
                </svg>
                
                <div className="absolute inset-0 z-0">
                  <img src={profileImage} alt="Nithin S" className="w-full h-full object-cover object-center" style={{
                  clipPath: 'path("M180,40 C320,40 360,140 360,250 C360,390 290,460 180,460 C80,460 40,380 40,250 C40,140 70,40 180,40")',
                  transform: 'scale(1)'
                }} />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <p className="mb-2 italic text-cyan-50 text-xl font-serif">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground lg:text-5xl">
              Nithin S
            </h1>
            <p className="text-2xl md:text-3xl mb-6">
              And I'm a <span className="text-primary typing-cursor">{typedText}</span>
            </p>
            <p className="mb-8 max-w-xl mx-auto lg:mx-0 italic text-xl text-justify text-cyan-100">
              I seek an opportunity to maximize my potential and contribute meaningfully to organizations. I am eager to take on challenging roles where I can develop innovative solutions for real-world scenarios.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>

            {/* Stats Bar - Full width horizontal layout */}
          </div>
        </div>
        <div className="w-full mt-12">
          <div className="flex justify-between items-center max-w-5xl mx-auto py-6 px-4">
            {[{
            number: '1+',
            label: 'Years of\nexperience'
          }, {
            number: '5+',
            label: 'Projects\ncompleted'
          }, {
            number: '10+',
            label: 'Technologies\nmastered'
          }, {
            number: '7+',
            label: 'Certifications\nearned'
          }].map((stat, i) => <div key={i} className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</span>
                <span className="text-sm md:text-base text-muted-foreground leading-tight whitespace-pre-line">{stat.label}</span>
                {i < 3 && <div className="w-px h-14 bg-border/50 ml-6" />}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;