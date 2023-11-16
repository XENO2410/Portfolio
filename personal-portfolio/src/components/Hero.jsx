import styles from "../style";
import Lottie from "lottie-react";
import main from '../assets/main.json';
import github from '../assets/github.json';
import LinkedIn from '../assets/LinkedIn.json';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi, I'm <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Tarun</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Web Developer
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Hello! I'm <span className="text-white">Tarun</span> aka <span className="text-white">XENO</span>, a Junior student at Netaji Subhas University of Technology (NSUT). I have a deep passion for coding and I am currently focused on enhancing my skills in Data Structures & Algorithms.
        </p>
        <br />

        <div className='flex flex-row mb-2'>
        <a href="https://github.com/xeno2410" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center py-[8px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <Lottie
              animationData={github}
              loop={true}
              className='w-[32px] h-[32px]'
            />            
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">GitHub </span>
            </p>
          </div>
        </a>     

        <a href="https://www.linkedin.com/in/tarun-kumar-sharma-7132a122b/" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center py-[8px] px-4 ml-4 bg-discount-gradient rounded-[10px] mb-2">
            <Lottie
              animationData={LinkedIn}
              loop={true}
              className='w-[32px] h-[32px]'
            />            
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">LinkedIn </span>
            </p>
          </div>
        </a>  
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Lottie
          animationData={main}
          loop={true}
          className='c_anime hidden md:block'
        />        

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
