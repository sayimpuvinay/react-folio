import React, { useRef, useState } from "react";
import './style.css';
import './mediaqueries.css';
import ProfilePic from '../assets/smile.png';
import AboutPic from '../assets/about-bw.jpg';
import Checkmark from '../assets/checkmark.png';
import Education from '../assets/education.png';
import Email from '../assets/email.png';
import Experience from '../assets/experience.png';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';
import Project1 from '../assets/project-1.png';
import Project2 from '../assets/project-2.png';
import Project3 from '../assets/project-3.png';
import Vinay_pic from '../assets/smile.png' 


function Folio() {
    const contactSectionRef = useRef(null);
    const scrollToContact = () => {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const linkedinProfile = 'https://www.linkedin.com/in/vinay-sayimpu/';
    const githubProfile = 'https://github.com/sayimpuvinay/';
    const gmail = 'mailto:vinaysayimpu@gmail.com';
    const downloadLink = './Vinay-Resume.pdf';
    
    return (
        <div>
    <nav id="desktop-nav">
      <div class="logo">Vinay Sayimpu</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo">Vinay Sayimpu</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="profile">
      <div class="section__pic-container">
        <img src={ProfilePic} alt="Vinay Sayimpu profile pic" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Vinay Sayimpu</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
        <a href={downloadLink} download>
            <button className="btn btn-color-2">
                Download CV
            </button>
        </a>
          <button className="btn btn-color-1" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
            <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="My LinkedIn profile" className="icon" />
            </a>
            <a href={githubProfile} target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="My Github profile" className="icon" />
            </a>
        </div>
      </div>
    </section>
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={AboutPic}
            alt="Profile pic"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={Experience}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>1.7+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={Education}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.E. Bachelors Degree<br />Computer Science</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            I am an independent and self-motivated individual with a strong passion for software development. I possess a diverse set of skills that includes proficiency in programming languages, as well as expertise in various software development tools and methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
            <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Tools and OS</h2>
            <div class="article-container">
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>GitHub</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>AppGyver</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Figma tool</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Windows</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Linux</h3>
                  <p>Experienced</p>
                </div>
              </article>
             
            </div>
          </div>
        </div>
      </div>
      <br/>
    </section>
    <br/>
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Project1}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Project2}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={Project3}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section ref={contactSectionRef} id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={Email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href={gmail} target="_blank" rel="noopener noreferrer">vinaysayimpu@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={Linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href={linkedinProfile} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Vinay Sayimpu. All Rights Reserved.</p>
    </footer>
        </div>
    )
}

export default Folio;