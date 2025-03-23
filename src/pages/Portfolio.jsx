import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Linkedin, Mail, ArrowDown, 
  MoonStar as Moon, 
  Sun,
  Github,
  ExternalLink
} from 'lucide-react';
import image from '../assets/image.jpg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-20 transition-all duration-500 ${darkMode 
        ? 'bg-gray-800/95 backdrop-blur-lg border-b border-gray-700/50' 
        : 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50'} shadow-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                Anuj Puri
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink title="Home" section="home" active={activeSection} darkMode={darkMode} />
              <NavLink title="About" section="about" active={activeSection} darkMode={darkMode} />
              <NavLink title="Projects" section="projects" active={activeSection} darkMode={darkMode} />
              <NavLink title="Skills" section="skills" active={activeSection} darkMode={darkMode} />
              <NavLink title="Contact" section="contact" active={activeSection} darkMode={darkMode} />
              
              {/* Dark Mode Toggle Switch */}
              <div className="relative flex items-center">
  <button
    onClick={toggleDarkMode}
    className={`p-2 rounded-full transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300 ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-yellow-400 text-white hover:bg-yellow-500'}`}
    aria-label="Toggle dark mode"
  >
    {darkMode ? (
      <Moon size={20} className="animate-fadeInRotate" />
    ) : (
      <Sun size={20} className="animate-fadeInRotate" />
    )}
  </button>
</div>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <label className="mr-2 relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-500">
                  <div className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-all duration-500 flex items-center justify-center peer-checked:translate-x-6 ${darkMode ? 'bg-gray-800' : 'bg-yellow-400'}`}>
                    {darkMode ? <Moon size={12} className="text-yellow-300" /> : <Sun size={12} className="text-white" />}
                  </div>
                </div>
              </label>
              
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className={`md:hidden transition-all duration-500 ${darkMode ? 'bg-gray-800/98 backdrop-blur-lg' : 'bg-white/98 backdrop-blur-lg'} animate-slideDown`}>
            <div className="px-3 pt-3 pb-4 space-y-2">
              <MobileNavLink title="Home" section="home" active={activeSection} onClick={() => setMenuOpen(false)} darkMode={darkMode} />
              <MobileNavLink title="About" section="about" active={activeSection} onClick={() => setMenuOpen(false)} darkMode={darkMode} />
              <MobileNavLink title="Projects" section="projects" active={activeSection} onClick={() => setMenuOpen(false)} darkMode={darkMode} />
              <MobileNavLink title="Skills" section="skills" active={activeSection} onClick={() => setMenuOpen(false)} darkMode={darkMode} />
              <MobileNavLink title="Contact" section="contact" active={activeSection} onClick={() => setMenuOpen(false)} darkMode={darkMode} />
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${darkMode ? 'from-gray-900 via-indigo-950 to-purple-950 opacity-70' : 'from-blue-50 via-indigo-50 to-purple-50 opacity-80'}`}>
            <div className="absolute inset-0 animate-subtlePulse">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-floatDelay"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center md:text-left animate-fadeIn">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                Hello, I'm <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Anuj Puri
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-70 animate-grow"></span>
                </span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl font-medium">
                A passionate <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">
                    Frontend Developer
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 20">
                    <path
                      d="M0,10 Q25,20 50,10 Q75,0 100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-indigo-500 animate-draw"
                    />
                  </svg>
                </span>
              </p>
              <p className="mt-4 text-lg max-w-2xl mx-auto md:mx-0 opacity-80 leading-relaxed">
                Crafting elegant and intuitive web experiences with modern technologies
              </p>
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-2"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className={`px-8 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-950/30' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                >
                  View Projects
                </a>
              </div>
              <div className="mt-12 flex justify-center md:justify-start space-x-8">
                <SocialIcon icon={<Linkedin size={26} />} href="www.linkedin.com/in/anuj-puri-b45897257" darkMode={darkMode} />
                <SocialIcon icon={<Mail size={26} />} href="mailto:anuzpuri944@gmail.com" darkMode={darkMode} />
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <a 
                href="#about" 
                className={`flex items-center animate-bounce transition-all duration-300 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-800'}`}
              >
                <ArrowDown size={26} />
                <span className="ml-3 text-lg">Discover More</span>
              </a>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle darkMode={darkMode}>About Me</SectionTitle>
            <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative w-72 h-72 mx-auto group">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r transition-all duration-500 transform rotate-45 opacity-75 blur-md group-hover:blur-lg ${darkMode ? 'from-purple-600 to-indigo-600' : 'from-blue-600 to-indigo-600'}`}></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={image} 
                      alt="Anuj Puri" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                <p className="text-lg leading-relaxed">
                  <span className="text-2xl text-purple-600 dark:text-purple-400">✨</span> I'm a dedicated frontend developer with a keen eye for design and a passion for creating seamless user experiences. My journey in web development is fueled by curiosity and a commitment to excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  Specializing in React and modern CSS frameworks, I transform concepts into responsive, accessible interfaces. I thrive on solving complex problems and pushing the boundaries of what's possible on the web.
                </p>
                <p className="text-lg leading-relaxed">
                  Let's collaborate to bring your vision to life! <span className="text-2xl text-blue-600 dark:text-blue-400">🚀</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-b from-gray-900 to-indigo-950' : 'bg-gradient-to-b from-indigo-50 to-blue-100'}`}>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulseSlow"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulseSlowDelay"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle darkMode={darkMode}>My Projects</SectionTitle>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="E-Commerce Website" 
                description="A feature-rich online store with advanced filtering and secure payment processing."
                tags={['React', 'Redux', 'Node.js', 'MongoDB']}
                imageUrl="https://th.bing.com/th/id/OIP.3ZSoiNJz3fGIR2zQvkpV4QHaDt?w=304&h=180&c=7&r=0&o=5&pid=1.7"
                liveUrl="https://example.com"
                repoUrl="https://github.com/yourusername/ecommerce"
                darkMode={darkMode}
              />
              
              <ProjectCard 
                title="Weather Dashboard" 
                description="Real-time weather insights with a sleek, intuitive interface."
                tags={['React', 'API', 'CSS3', 'Responsive']}
                imageUrl="https://ts1.mm.bing.net/th?id=OIP.eGnPHe-V-BNDAnWVXZa7-gHaEM&pid=15.1"
                liveUrl="https://example.com"
                repoUrl="https://github.com/yourusername/weather-app"
                darkMode={darkMode}
              />
              
              <ProjectCard 
                title="Task Management App" 
                description="Organize tasks efficiently with drag-and-drop and real-time updates."
                tags={['React', 'TypeScript', 'Firebase', 'Tailwind CSS']}
                imageUrl="https://th.bing.com/th/id/OIP.6SW3Hbmq3PDjFLuatOqmBgHaD4?w=344&h=180&c=7&r=0&o=5&pid=1.7"
                liveUrl="https://example.com"
                repoUrl="https://github.com/yourusername/task-manager"
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle darkMode={darkMode}>My Skills</SectionTitle>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 ${darkMode ? 'bg-gray-800/40 border border-gray-700/50' : 'bg-white/70 shadow-2xl'}`}>
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Frontend Development
                </h3>
                <div className="space-y-6">
                  <SkillBar skill="HTML5 & CSS3" percentage={90} darkMode={darkMode} />
                  <SkillBar skill="JavaScript" percentage={85} darkMode={darkMode} />
                  <SkillBar skill="React.js" percentage={80} darkMode={darkMode} />
                  <SkillBar skill="Tailwind CSS" percentage={75} darkMode={darkMode} />
                </div>
              </div>
              <div className={`p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 ${darkMode ? 'bg-gray-800/40 border border-gray-700/50' : 'bg-white/70 shadow-2xl'}`}>
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Backend & Tools
                </h3>
                <div className="space-y-6">
                  <SkillBar skill="PHP" percentage={55} darkMode={darkMode} />
                  <SkillBar skill="Git & GitHub" percentage={45} darkMode={darkMode} />
                  <SkillBar skill="Responsive Design" percentage={40} darkMode={darkMode} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className={`py-24 ${darkMode ? 'bg-gradient-to-b from-indigo-950 to-gray-900' : 'bg-gradient-to-b from-blue-100 to-indigo-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle darkMode={darkMode}>Get In Touch</SectionTitle>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-2xl backdrop-blur-lg ${darkMode ? 'bg-gray-800/40 border border-gray-700/50' : 'bg-white/80 shadow-2xl'}`}>
                <p className="text-lg mb-8 leading-relaxed">
                  I'm excited to collaborate on innovative projects or explore new opportunities. Reach out to discuss ideas or just say hi! 👋
                </p>
                <div className="space-y-6">
                  <ContactItem 
                    icon={<Mail size={24} />} 
                    text="anuzpuri944@gmail.com" 
                    href="mailto:anuzpuri944@gmail.com"
                    darkMode={darkMode}
                  />
                  <ContactItem 
                    icon={<Linkedin size={24} />} 
                    text="linkedin.com/Anuj-Puri" 
                    href="www.linkedin.com/in/anuj-puri-b45897257"
                    darkMode={darkMode}
                  />
                </div>
              </div>
              <div className={`p-8 rounded-2xl backdrop-blur-lg ${darkMode ? 'bg-gray-800/40 border border-gray-700/50' : 'bg-white/80 shadow-2xl'}`}>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-blue-600'}`}>
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-400 focus:ring focus:ring-purple-400/20' : 'bg-white border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20'}`}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-blue-600'}`}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-400 focus:ring focus:ring-purple-400/20' : 'bg-white border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20'}`}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-blue-600'}`}>
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${darkMode ? 'bg-gray-700/50 border-gray-600 focus:border-purple-400 focus:ring focus:ring-purple-400/20' : 'bg-white border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20'}`}
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className={`py-10 text-center ${darkMode ? 'bg-gray-950 border-t border-gray-800/50' : 'bg-indigo-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Anuj Puri. Crafted with passion.</p>
          <div className="mt-6 flex justify-center space-x-8">
            <SocialIcon icon={<Linkedin size={22} />} href="www.linkedin.com/in/anuj-puri-b45897257" darkMode={true} />
            <SocialIcon icon={<Mail size={22} />} href="mailto:anuzpuri944@gmail.com" darkMode={true} />
          </div>
        </div>
      </footer>
    </div>
  );
};

// Navigation Components
const NavLink = ({ title, section, active, darkMode }) => {
  return (
    <a 
      href={`#${section}`}
      className={`relative py-2 text-lg font-medium transition-all duration-300 ${active === section ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text' : (darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-blue-600')}`}
    >
      {title}
      {active === section && (
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></span>
      )}
    </a>
  );
};

const MobileNavLink = ({ title, section, active, onClick, darkMode }) => {
  return (
    <a 
      href={`#${section}`}
      onClick={onClick}
      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${active === section ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : (darkMode ? 'text-gray-300 hover:bg-purple-500/10' : 'text-gray-700 hover:bg-blue-500/10')}`}
    >
      {title}
    </a>
  );
};

// Section Components
const SectionTitle = ({ children, darkMode }) => {
  return (
    <div className="text-center relative">
      <h2 className={`text-4xl font-extrabold tracking-tight ${darkMode ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'}`}>
        {children}
      </h2>
      <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-grow"></div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, repoUrl, darkMode }) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${darkMode ? 'bg-gray-800/50 backdrop-blur-lg border border-gray-700/50' : 'bg-white/80 backdrop-blur-lg shadow-xl'}`}>
      <div className="h-56 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 group-hover:opacity-90 ${darkMode ? 'from-gray-900/80 via-gray-900/40 to-transparent' : 'from-indigo-900/60 via-indigo-900/20 to-transparent'}`}></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 text-xs font-medium rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-300 border border-purple-800/50' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center text-sm font-medium transition-all duration-300 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-800'}`}
          >
            <ExternalLink size={16} className="mr-2" /> Live Demo
          </a>
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center text-sm font-medium transition-all duration-300 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-800'}`}
          >
            <Github size={16} className="mr-2" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, percentage, darkMode }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-base">{skill}</span>
        <span className={`${darkMode ? 'text-purple-400' : 'text-blue-600'} font-medium`}>{percentage}%</span>
      </div>
      <div className={`w-full h-3 rounded-full overflow-hidden shadow-inner ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'}`}>
        <div 
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

// Contact Item Component
const ContactItem = ({ icon, text, href, darkMode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center group transition-all duration-300 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-800'}`}
    >
      <span className={`mr-4 p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/40 group-hover:to-indigo-600/40' : 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/40 group-hover:to-indigo-600/40'}`}>
        {icon}
      </span>
      <span className="text-base">{text}</span>
    </a>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href, darkMode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800/50 hover:bg-purple-900/50 text-purple-400 hover:text-purple-300 border border-gray-700/50' : 'bg-blue-100 hover:bg-blue-200 text-blue-600 border border-blue-200/50'}`}
    >
      {icon}
    </a>
  );
};

export default Portfolio;