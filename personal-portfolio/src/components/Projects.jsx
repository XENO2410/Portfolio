import React from 'react';
import Card from './Card'; // Import the Card component from the Card.js file
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <section className="project" id="Projects">
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h2 className="text-4xl font-poppins font-semibold text-white">PROJECTS</h2>
          <p className="text-gray-400 text-lg my-8">
            This section showcases some of my Projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              image={project1}
              CardTitle="Passing Thoughts"
              titleHref="/#"
              CardDescription="Passing Thoughts is your go-to solution for quickly capturing and sharing those fleeting, brilliant ideas that cross your mind. This minimalistic app provides a user-friendly platform to jot down your thoughts, and it presents them temporarily, resulting in a dynamic and ever-changing list of your creative sparks and inspirations."
              githubHref="https://github.com/XENO2410/PassingThoughts"
            />
            <Card
              image={project2}
              CardTitle="Password Generator"
              CardDescription="Generate strong and secure passwords effortlessly with the Password Generator tool. Ensure your online accounts are well-protected by creating random and unique combinations of characters that are nearly impossible to guess. This tool simplifies the process, helping you enhance your digital security with ease."
              githubHref="https://github.com/XENO2410/Password-Generator"
            />
            <Card
              image={project3}
              CardTitle="Personal Portfolio"
              CardDescription="This version of my portfolio is a dynamic creation crafted with HTML, CSS, and JavaScript. It serves as a window into my professional world, showcasing my skills, projects, and accomplishments. Explore my personal portfolio to get a glimpse of my journey and expertise."
              githubHref="https://github.com/XENO2410/Xeno-Web-Designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
