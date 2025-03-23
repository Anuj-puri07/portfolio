import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Linkedin, Mail, ExternalLink, ArrowDown, 
  MoonStar as Moon, 
  Sun 
} from 'lucide-react';
import image from '../assets/image.jpg';

// Main App Component
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Update active section based on scroll position
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Anuj Puri</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink title="Home" section="home" active={activeSection} />
              <NavLink title="About" section="about" active={activeSection} />
              <NavLink title="Projects" section="projects" active={activeSection} />
              <NavLink title="Skills" section="skills" active={activeSection} />
              <NavLink title="Contact" section="contact" active={activeSection} />
              
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-2 transition-colors duration-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className={`md:hidden transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink title="Home" section="home" active={activeSection} onClick={() => setMenuOpen(false)} />
              <MobileNavLink title="About" section="about" active={activeSection} onClick={() => setMenuOpen(false)} />
              <MobileNavLink title="Projects" section="projects" active={activeSection} onClick={() => setMenuOpen(false)} />
              <MobileNavLink title="Skills" section="skills" active={activeSection} onClick={() => setMenuOpen(false)} />
              <MobileNavLink title="Contact" section="contact" active={activeSection} onClick={() => setMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anuj Puri</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl">
                A beginner Frontend Developer
              </p>
              <p className="mt-5 text-lg max-w-3xl mx-auto md:mx-0">
                I build responsive, accessible web applications with modern technologies.
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className={`px-6 py-3 rounded-md border ${darkMode ? 'border-white hover:bg-gray-800' : 'border-gray-900 hover:bg-gray-100'} transition-colors duration-300`}
                >
                  View Projects
                </a>
              </div>
              <div className="mt-10 flex justify-center md:justify-start space-x-6">
                <SocialIcon icon={<Linkedin size={24} />} href="www.linkedin.com/in/anuj-puri-b45897257" />
                <SocialIcon icon={<Mail size={24} />} href="mailto:anuzpuri944@gmail.com" />
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <a 
                href="#about" 
                className={`flex items-center animate-bounce ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                <ArrowDown size={24} />
                <span className="ml-2">Scroll Down</span>
              </a>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>About Me</SectionTitle>
            <div className="mt-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {/* Replace with your actual image */}
                <div className={`w-64 h-64 rounded-full mx-auto overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500"><img src={image} alt="" /></span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                ✨ I'm a beginner frontend developer with a strong passion for building clean, responsive, and user-friendly web interfaces. I love turning ideas into reality through code and continuously improving my skills in HTML, CSS, and JavaScript. 
                </p>
                <p className="text-lg mb-4">
                I'm currently sharpening my knowledge of modern frontend frameworks like React and exploring UI/UX best practices to create visually appealing and seamless experiences. Problem-solving excites me, and I enjoy the challenge of writing efficient code that enhances both functionality and aesthetics.
                </p>
                <p className="text-lg">
                Let's connect and create something amazing together! 🚀
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-20`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>My Projects</SectionTitle>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="E-Commerce Website" 
                description="A full-featured online store built with React, Redux, and Node.js. Includes user authentication, product filtering, and payment integration."
                tags={['React', 'Redux', 'Node.js', 'MongoDB']}
                imageUrl="https://th.bing.com/th/id/OIP.3ZSoiNJz3fGIR2zQvkpV4QHaDt?w=304&h=180&c=7&r=0&o=5&pid=1.7"
                liveUrl="https://example.com"
                repoUrl="https://github.com/yourusername/ecommerce"
                darkMode={darkMode}
              />
              
              <ProjectCard 
                title="Weather Dashboard" 
                description="A weather application that displays current and forecasted weather data using the OpenWeatherMap API."
                tags={['React', 'API', 'CSS3', 'Responsive']}
                imageUrl="https://ts1.mm.bing.net/th?id=OIP.eGnPHe-V-BNDAnWVXZa7-gHaEM&pid=15.1"
                liveUrl="https://example.com"
                repoUrl="https://github.com/yourusername/weather-app"
                darkMode={darkMode}
              />
              
              <ProjectCard 
                title="Task Management App" 
                description="A productivity application for managing tasks and projects with drag-and-drop functionality and data visualization."
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
        <section id="skills" className="py-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>My Skills</SectionTitle>
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                  <div className="space-y-4">
                    <SkillBar skill="HTML5 & CSS3" percentage={90} darkMode={darkMode} />
                    <SkillBar skill="JavaScript (ES6+)" percentage={85} darkMode={darkMode} />
                    <SkillBar skill="React.js" percentage={80} darkMode={darkMode} />
                    <SkillBar skill="Tailwind CSS" percentage={75} darkMode={darkMode} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Backend & Tools</h3>
                  <div className="space-y-4">
                    <SkillBar skill="Node.js" percentage={75} darkMode={darkMode} />
                    <SkillBar skill="Git & GitHub" percentage={85} darkMode={darkMode} />
                    <SkillBar skill="Responsive Design" percentage={90} darkMode={darkMode} />
                    <SkillBar skill="MongoDB" percentage={65} darkMode={darkMode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className={`py-25 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6">
                  I'm currently open for freelance work and job opportunities. Feel free to contact me 
                  if you have a project in mind or just want to say hello!
                </p>
                <div className="space-y-4">
                  <ContactItem 
                    icon={<Mail size={24} />} 
                    text="anuzpuri944@gmail.com" 
                    href="mailto:nuzpuri944@gmail.com" 
                  />
                  
                  <ContactItem 
                    icon={<Linkedin size={24} />} 
                    text="linkedin.com/Anuj-Puri" 
                    href="www.linkedin.com/in/anuj-puri-b45897257" 
                  />
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                      required
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      className={`w-full px-4 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
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
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            
            <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com/in/yourusername" />
            <SocialIcon icon={<Mail size={20} />} href="mailto:your.email@example.com" />
          </div>
        </div>
      </footer>
    </div>
  );
};

// Navigation Components
const NavLink = ({ title, section, active }) => {
  return (
    <a 
      href={`#${section}`}
      className={`py-2 border-b-2 transition-colors duration-300 ${
        active === section 
          ? 'border-blue-500 text-blue-500' 
          : 'border-transparent hover:text-blue-500'
      }`}
    >
      {title}
    </a>
  );
};

const MobileNavLink = ({ title, section, active, onClick }) => {
  return (
    <a 
      href={`#${section}`}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
        active === section 
          ? 'bg-blue-500 text-white' 
          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {title}
    </a>
  );
};

// Section Components
const SectionTitle = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{children}</h2>
      <div className="mt-3 mx-auto w-24 h-1 bg-blue-500"></div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, repoUrl, darkMode }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {tag}
            </span>
          ))}
        </div>
       
        </div>
      </div>
  );
};

// Skill Bar Component
const SkillBar = ({ skill, percentage, darkMode }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className="h-full rounded-full bg-blue-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Contact Item Component
const ContactItem = ({ icon, text, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Portfolio;