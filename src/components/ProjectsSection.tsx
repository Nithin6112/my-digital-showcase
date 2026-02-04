import { useState } from 'react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
}
const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projects: Project[] = [{
    id: 1,
    title: 'Diamond Price Prediction',
    description: 'Machine Learning project for predicting diamond prices using advanced regression algorithms and data analysis techniques.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop',
    technologies: ['Python', 'ML', 'Pandas'],
    date: '2023'
  }, {
    id: 2,
    title: 'Wind Power Prediction',
    description: 'LSTM model trained on historical wind data to predict future power generation patterns in kilowatt (kW). Published in IJRPR journal.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop',
    technologies: ['Python', 'LSTM', 'TensorFlow'],
    date: 'April 2024'
  }, {
    id: 3,
    title: 'Grocery Management App',
    description: 'Android application using Java and Firebase for managing customer orders, inventory, and home delivery credentials.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
    technologies: ['Java', 'Android', 'Firebase'],
    date: 'June 2023'
  }, {
    id: 4,
    title: 'Railway Ticket Booking',
    description: 'File structures project using C++ with primary index for storing and fetching customer ticket bookings and train details.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop',
    technologies: ['C++', 'OOP', 'File I/O'],
    date: 'July 2023'
  }, {
    id: 5,
    title: 'Airline Reservation System',
    description: 'Database management system for airline reservations built with Java Swings and integrated database connectivity.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
    technologies: ['Java', 'Swings', 'MySQL'],
    date: 'Feb 2022'
  }];
  return <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-lg text-cyan-50">
            A showcase of my academic and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map(project => <div key={project.id} className={`project-card cursor-pointer ${project.id === 1 || project.id === 5 ? 'lg:col-span-1' : ''}`} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-all duration-500 ${hoveredProject === project.id ? 'scale-110 brightness-75' : 'scale-100'}`} />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <div className="p-4">
                <h3 className="text-foreground font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.date}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;