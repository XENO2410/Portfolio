import styles from "./style"
import { Navbar, Hero, Aboutme, Skills, Projects, Contact_me, Footer } from "./components";

const App = () => 
 (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          Navbar
        </div>
      </div>

    <div className={`bg-primary ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
        <Hero />
        Hero
       </div>
    </div>  
    <br />
    <br />
    <br />


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
        <Aboutme />
        <Skills />
        <Projects />
        <Contact_me />
        <Footer />
         Aboutme,
         Skills, 
         Projects, 
         Contact_me, 
         Footer
       </div>
    </div>  
    </div>
  );


export default App
