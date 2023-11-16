import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/color-sharp.png';
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import javascript from '../assets/skills/javascript.svg';
import java from '../assets/skills/java.svg';
import c from '../assets/skills/c++.svg';
import tailwind1 from '../assets/skills/tailwind.svg';
import react1 from '../assets/skills/react.svg';
import python from '../assets/skills/python.svg';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill bg-#00040F py-8" id="Skills">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="skill-bx flex-1 font-poppins font-semibold text-white bg-black-gradient rounded-3xl text-center p-10 mt-14 relative w-4/5">
            <h2 className="text-4xl font-poppins font-semibold">SKILLS</h2>
            <p className="font-poppins font-regular text-1xl text-white text-lg my-5">
            I possess a wide range of skills, including proficiency in various programming languages, database management, and proficiency with design and multimedia software.
            </p>
            <Carousel responsive={responsive} infinite className="skill-slider">
              <div className="item text-center">
                <img src={html} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">HTML</h5>
              </div>
              <div className="item text-center">
                <img src={css} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">CSS</h5>
              </div>
              <div className="item text-center">
                <img src={javascript} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">JAVASCRIPT</h5>
              </div>
              <div className="item text-center">
                <img src={react1} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">REACT</h5>
              </div>
              <div className="item text-center">
                <img src={tailwind1} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">TAILWIND</h5>
              </div>
              <div className="item text-center">
                <img src={c} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">C++</h5>
              </div>
              <div className="item text-center">
                <img src={java} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">JAVA</h5>
              </div>
              <div className="item text-center">
                <img src={python} alt="Image" className="w-1/2 mx-auto mb-3" />
                <h5 className="text-xl">PYTHON</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <img className="background-image-left absolute top-28 bottom-0 w-40 z-[-4]" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
