import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  SiBootstrap,
  SiCreatereactapp,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiPerplexity,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiSass,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";
import { PiMusicNotesLight } from "react-icons/pi";
import logo from "./assets/logo.webp";
import Modal from "./components/Modal";
import CircleAnimation from "./components/Circle";

const App = () => {
  const audioRef = useRef(null);
  const namesRef = useRef(null);

  const [myName, setMyName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [testis, setTestis] = useState({
    name: "",
    title: "",
    text: "",
    imgSrc: "",
  });
  let timer;

  const nameArray = [
    "Шћепан",
    "Στέφανος",
    "Esteban",
    "Степа́н",
    "赛潘",
    "Stéphan",
    "Štefan",
    "Étienne",
    "István",
    "Стефа́н",
  ];
  const togglePlay = () => {
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(!isPlaying);
  };
  const openModal = (name, title, text, imgSrc) => {
    setIsOpen(true);
    setTestis({ name, title, text, imgSrc });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % nameArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="app">
      <div className="sound" title="Toggle Music">
        <audio
          ref={audioRef}
          src="src/assets/gabi-novak-sve-sto-znas-o-meni-128-ytshorts.savetube.me.mp3"
          loop
        />
        <button id="sound-btn" onClick={togglePlay}>
          <PiMusicNotesLight />
        </button>
      </div>
      <div id="logo" title="Up">
        <a href="#top">
          <img src={logo} alt="logo" />
        </a>
      </div>
      {isOpen ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} testis={testis} />
      ) : null}
      {/* --------------------LANDING------------------ */}

      <section id="landing">
        <div className="frame" id="landing-frame">
          <div className="ripple-layer">
            <div className="ripple-back"></div>
            <div className="ripple-mask"></div>
          </div>
          <div className="logo-layer"></div>
          <div id="action-btn">
            <a
              href="mailto:scepan.office@webartforge.com?subject=Job%20Offer&body="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/assets/round-button.webp" alt="" />
            </a>
          </div>
          <div className="landing-grid-container">
            <div className="grid-item" id="name-container">
              <div className="name-box">
                <div className="name-mask">
                  <div className="blurred-area">
                    <div className="name-frame-text">Šćepan&nbsp;/</div>
                  </div>
                </div>
                <div className="name-list" ref={namesRef}>
                  {nameArray.map((name, index) => (
                    <div
                      key={`${name}-${index}`}
                      className={`name ${
                        index === activeIndex ? "active name-blur" : ""
                      }`}
                    >
                      &nbsp;{name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="job-title">Front-End Web Developer</div>
              <div className="name-article">
                <p>
                  Welcome<span> to my portfolio!</span>
                  <br />I code<span> interesting</span> UX & UI
                  <span> ideas</span> into life.
                  <br />
                  <span>Bla, blah, blah </span>
                  my passion.
                  <br />
                  <span>Blah, blah </span>
                  my vision, my mission.
                  <br />
                  <span>Yada, yada, yada </span> goals, dreams, fears.
                  <br /> If you think I would be usefull to your operation,
                  don't be shy.
                </p>
              </div>
            </div>
            <div className="grid-item" id="item2">
              <div className="mugshots-container">
                <div
                  id="mugshots"
                  className={isSpread ? "spread" : ""}
                  onMouseEnter={() => {
                    clearTimeout(timer);
                    setIsSpread(true);
                    timer = setTimeout(() => {
                      setIsSpread(false);
                    }, 3000);
                  }}
                  onTouchStart={() => {
                    clearTimeout(timer);
                    setIsSpread(true);
                    timer = setTimeout(() => {
                      setIsSpread(false);
                    }, 3000);
                  }}
                >
                  <img
                    src="src/assets/profil.webp"
                    className="main-mug"
                    alt="Image 1"
                  />
                  <img
                    src="src/assets/anfas.webp"
                    className="profil-mug"
                    alt="Image 2"
                  />
                </div>
              </div>

              <div className="contact-container">
                <a href="mailto:scepan.office@webartforge.com?subject=Job%20Offer&body=">
                  <p>scepan.office@webartforge.com</p>
                </a>
                <p>+381 64 865 2818 </p>
                <p>44° 47' 13.9092'' N</p>
                <p>20° 27' 26.1828'' E</p>
                <div className="qr-container"></div>
              </div>
            </div>
            <div className="grid-item" id="tech-container">
              <div className="tech-icon" title="React">
                <SiReact style={{ color: "#06d1f8" }} />
              </div>
              <div className="tech-icon" title="Vite">
                <img
                  src="src/assets/vite.webp"
                  className="vite-icon"
                  alt="vite"
                />
              </div>
              <div className="tech-icon" title="Create React App">
                <SiCreatereactapp style={{ color: "#06d1f8" }} />
              </div>
              <div className="tech-icon" title="React Router">
                <SiReactrouter style={{ color: "#d0011b" }} />
              </div>
              <div className="tech-icon" title="JavaScript">
                <SiJavascript style={{ color: "#f2da1d" }} />
              </div>
              <div className="tech-icon" title="CSS3">
                <SiCss3 style={{ color: "#1a6fb4" }} />
              </div>
              <div className="tech-icon" title="Strapi">
                <SiStrapi style={{ color: "#8972f8" }} />
              </div>
              <div className="tech-icon" title="Stripe">
                <SiStripe style={{ color: "#6772e4" }} />
              </div>
              <div className="tech-icon" title="Sass">
                <SiSass style={{ color: "#c76494" }} />
              </div>
              <div className="tech-icon" title="Bootstrap">
                <SiBootstrap style={{ color: "#730ff1" }} />
              </div>
              <div className="tech-icon" title="Tailwindcss">
                <SiTailwindcss style={{ color: "#18b2b5" }} />
              </div>
              <div className="tech-icon" title="GitHub">
                <SiGithub style={{ color: "#fff" }} />
              </div>
              <div className="tech-icon" title="Node.js">
                <SiNodedotjs style={{ color: "#85c340" }} />
              </div>
              <div className="tech-icon" title="Perplexity">
                <SiPerplexity style={{ color: "#20808e" }} />
              </div>
              <div className="tech-icon" title="chatGPT">
                <img
                  className="chatgpt-icon"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/softteal/24/chatgpt.webp"
                  alt="chatgpt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------WORK------------------ */}
      <section id="projects">
        <div className="frame" id="projects-frame">
          <h1>Work</h1>
          <div className="project">
            <div className="project-container">
              <div className="project-screen">
                <h2>TimeLux</h2>
                <div id="iframe-container">
                  <iframe
                    src="https://webartforge.com/timelux/"
                    title="Embedded Example"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                <div className="screen-label">
                  <div className="project-tech">
                    <div
                      className="project-tech-icon project-tech-icon-vite"
                      title="Vite"
                    >
                      <img
                        src="src/assets/vite.webp"
                        className="project-vite-icon"
                        alt="vite"
                      />
                    </div>
                    <div className="project-tech-icon" title="React">
                      <SiReact style={{ color: "#06d1f8" }} />
                    </div>
                    <div className="project-tech-icon" title="React Router">
                      <SiReactrouter style={{ color: "#d0011b" }} />
                    </div>
                    <div className="project-tech-icon" title="JavaScript">
                      <SiJavascript style={{ color: "#f2da1d" }} />
                    </div>
                    <div className="project-tech-icon" title="CSS3">
                      <SiCss3 style={{ color: "#1a6fb4" }} />
                    </div>
                    <div className="project-tech-icon" title="Strapi">
                      <SiStrapi style={{ color: "#8972f8" }} />
                    </div>
                    <div className="project-tech-icon" title="Stripe">
                      <SiStripe style={{ color: "#6772e4" }} />
                    </div>
                    <div className="project-tech-icon" title="PostgreSQL">
                      <SiPostgresql style={{ color: "#316190" }} />
                    </div>
                    <div className="project-tech-icon" title="Node.js">
                      <SiNodedotjs style={{ color: "#85c340" }} />
                    </div>
                  </div>
                  <a
                    href="https://webartforge.com/timelux/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Page <span>&gt;&gt;&gt;</span>
                  </a>
                </div>
              </div>
              <div className="project-text-intro">
                <h4>E-commerce Web App with CMS and Payment Integration</h4>
                <br />
                <p>
                  This is a fully functional modular, responsive, custom-built
                  e-commerce platform showcasing a complete full-stack
                  implementation using React + React Router (frontend), Strapi
                  CMS (headless backend), and Stripe (checkout and payment
                  integration). The project demonstrates production-grade
                  architecture, frontend state management, API communication,
                  secure environment configurations, and dynamic CMS content
                  rendering. Code with full documentation is available on
                  <a href="https://github.com/scepan74/">GitHub</a>.
                </p>
              </div>
              <br />
              <div className="project-text-list">
                <div className="text-list-item">
                  <label for="structure">Architecture & Structure</label>
                  <ul id="structure">
                    <li>Modular, Layout and route-based navigation.</li>
                    <li>React Context global state management.</li>
                    <li>
                      Dynamic product filtering, contextual category states and
                      search queries.
                    </li>
                  </ul>
                </div>
                <div className="text-list-item">
                  <label for="features">UI & Features</label>
                  <ul id="features">
                    <li>
                      Smooth, interactive image carousel with infinite looping
                      and action to collections.
                    </li>
                    <li>
                      Search functionality by any products description related
                      query.
                    </li>
                    <li>
                      Cart with quantity management, clear and remove actions,
                      and checkout transition logic.
                    </li>
                    <li>
                      Responsive mobile-first design with custom CSS breakpoints
                      and visual consistency across screen sizes.
                    </li>
                    <li>
                      Visual feedback with conditional renders (loading states,
                      empty states, errors).
                    </li>
                  </ul>
                </div>

                <div className="text-list-item">
                  <label for="api">Infrastructure, API & Data</label>
                  <ul id="api">
                    <li>
                      Frontend and backend cleanly separated into client/ and
                      api/ directories.
                    </li>
                    <li>Backend powered by Strapi CMS using REST API.</li>
                    <li>
                      PostgreSQL used in production, replacing default
                      development SQLite.
                    </li>

                    <li>
                      Real-time interaction: product fetch, search query
                      results, error handling, and status flags.
                    </li>
                  </ul>
                </div>

                <div className="text-list-item">
                  <label for="payment">Checkout & Payment</label>
                  <ul id="payment">
                    <li>Stripe integration for secure payment processing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project" id="project2">
            <div className="project-container">
              <div className="project-screen">
                <h2>Uncork</h2>
                <div id="iframe-container">
                  <iframe
                    src="https://webartforge.com/uncork/"
                    title="Embedded Example"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                <div className="screen-label">
                  <div className="project-tech">
                    <div
                      className="project-tech-icon project-tech-icon-vite"
                      title="Vite"
                    >
                      <img
                        src="src/assets/vite.webp"
                        className="project-vite-icon"
                        alt="vite"
                      />
                    </div>
                    <div className="project-tech-icon" title="React">
                      <SiReact style={{ color: "#06d1f8" }} />
                    </div>
                    <div className="project-tech-icon" title="React Router">
                      <SiReactrouter style={{ color: "#d0011b" }} />
                    </div>
                    <div className="project-tech-icon" title="JavaScript">
                      <SiJavascript style={{ color: "#f2da1d" }} />
                    </div>
                    <div className="project-tech-icon" title="CSS3">
                      <SiCss3 style={{ color: "#1a6fb4" }} />
                    </div>
                  </div>
                  <a
                    href="https://webartforge.com/uncork/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Page <span>&gt;&gt;&gt;</span>
                  </a>
                </div>
              </div>
              <div className="project-text-intro">
                <h4>Interactive Single-Page React App</h4>
                <br />
                <p>
                  Interactive single-page React application showcasing
                  responsive design, scroll-linked animations, modular
                  architecture, and dynamic user interaction patterns. Designed
                  with a clear separation of logic, layout, and data, the
                  project emphasizes real-world UX handling through global state
                  management, custom hooks, and a fully controlled component
                  hierarchy.Adaptive CSS uses screen-size stylesheets and
                  device-based alternations. Code with full documentation is
                  available on
                  <a href="https://github.com/scepan74/">GitHub</a>.
                </p>
              </div>
              <br />
              <div className="project-text-list">
                <div className="text-list-item">
                  <label for="structure">Architecture & Structure</label>
                  <ul id="structure">
                    <li>Declarative nested routing with react-router-dom</li>
                    <li>
                      Shared Layout wrapper with slot-based Outlet content
                      injection
                    </li>
                    <li>
                      Isolated, reusable UI components like Slider, BookBox,
                      RotateText, Modal and custom usePagination hook.
                    </li>
                    <li>
                      Fully responsive sections with alternating image-text
                      layouts and layered visuals
                    </li>
                  </ul>
                </div>
                <div className="text-list-item">
                  <label for="features">UI & UX Features</label>
                  <ul id="features">
                    <li>Pure CSS animations (no libraries) </li>
                    <li>
                      Custom scroll-triggered animations and DOM transformations
                    </li>
                    <li>
                      Scroll-to-top on route change for seamless navigation
                    </li>
                    <li>
                      Scroll-based reveal effects for section titles and
                      animated elements
                    </li>
                    <li>
                      Burger menu with conditionally controlled visibility and
                      fallback layout logic
                    </li>
                    <li>Parallax effects </li>
                    <li>
                      Interactive auto-advancing wine carousel with screen-aware
                      visible count
                    </li>
                    <li>
                      Visual feedback with conditional renders (loading states,
                      empty states, errors)
                    </li>
                  </ul>
                </div>

                <div className="text-list-item">
                  <label for="api">State & Data Management</label>
                  <ul id="api">
                    <li>React Context global state management</li>

                    <li>Dynamic asset rendering from local static data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-container">
              <div className="project-screen">
                <h2>MicroCro</h2>
                <div id="iframe-container">
                  <iframe
                    src="https://microcro.com"
                    title="Embedded Example"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                <div className="screen-label">
                  <div className="project-tech">
                    <div
                      className="project-tech-icon project-tech-icon-vite"
                      title="Vite"
                    >
                      <img
                        src="src/assets/vite.webp"
                        className="project-vite-icon"
                        alt="vite"
                      />
                    </div>
                    <div className="project-tech-icon" title="React">
                      <SiReact style={{ color: "#06d1f8" }} />
                    </div>
                    <div className="project-tech-icon" title="CSS">
                      <SiCss3 style={{ color: "#1a6fb4" }} />
                    </div>
                  </div>
                  <a
                    href="https://microcro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Page <span>&gt;&gt;&gt;</span>
                  </a>
                </div>
              </div>
              <div className="project-text-intro">
                <h4>E-commerce Web App with CMS and Payment Integration</h4>
                <br />
                <p>
                  This is a fully functional modular, responsive, custom-built
                  e-commerce platform showcasing a complete full-stack
                  implementation using React + React Router (frontend), Strapi
                  CMS (headless backend), and Stripe (checkout and payment
                  integration). The project demonstrates production-grade
                  architecture, frontend state management, API communication,
                  secure environment configurations, and dynamic CMS content
                  rendering. Code with full documentation is available on
                  <a href="https://github.com/scepan74/">GitHub</a>.
                </p>
              </div>
              <br />
              <div className="project-text-list">
                <div className="text-list-item">
                  <label for="structure">Architecture & Structure</label>
                  <ul id="structure">
                    <li>Modular, Layout and route-based navigation.</li>
                    <li>React Context global state management.</li>
                    <li>
                      Dynamic product filtering, contextual category states and
                      search queries.
                    </li>
                  </ul>
                </div>
                <div className="text-list-item">
                  <label for="features">UI & Features</label>
                  <ul id="features">
                    <li>
                      Smooth, interactive image carousel with infinite looping
                      and action to collections.
                    </li>
                    <li>
                      Search functionality by any products description related
                      query.
                    </li>
                    <li>
                      Cart with quantity management, clear and remove actions,
                      and checkout transition logic.
                    </li>
                    <li>
                      Responsive mobile-first design with custom CSS breakpoints
                      and visual consistency across screen sizes.
                    </li>
                    <li>
                      Visual feedback with conditional renders (loading states,
                      empty states, errors).
                    </li>
                  </ul>
                </div>

                <div className="text-list-item">
                  <label for="api">Infrastructure, API & Data</label>
                  <ul id="api">
                    <li>
                      Frontend and backend cleanly separated into client/ and
                      api/ directories.
                    </li>
                    <li>Backend powered by Strapi CMS using REST API.</li>
                    <li>
                      PostgreSQL used in production, replacing default
                      development SQLite.
                    </li>

                    <li>
                      Real-time interaction: product fetch, search query
                      results, error handling, and status flags.
                    </li>
                  </ul>
                </div>

                <div className="text-list-item">
                  <label for="payment">Checkout & Payment</label>
                  <ul id="payment">
                    <li>Stripe integration for secure payment processing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------ABOUT---------------------- */}
      <section id="about">
        <div className="frame" id="about-frame">
          <h1>About</h1>
          <div className="about-grid">
            <div className="retro-container">
              <div className="circle-container">
                <CircleAnimation />
              </div>

              <div className="retro-code">
                <pre>
                  <code>
                    {`
 100 let i = 400;
 101 let decreasing = true;
 102 while (true) {
 103   let height = i;
 104   if (decreasing) {
 105     i--;
 106     if (i === 0) {
 107       decreasing = false;
 108     }
 109     } else {
 110       i++;
 111       if (i === 400) {
 112         decreasing = true;
 113       }
 114    }

 115 }
`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="about-bottom">
              <div className="about-text">
                <p>
                  <br />
                  I was born and raised in Yugoslavia. The first code I wrote
                  was in Microsoft BASIC, on a Tim011 terminal with a
                  monochromatic screen, at a time when disks were floppy, mice
                  had balls and tails, and all phones had curly wires.
                  <br />
                  Most of the current millennium, I spent overseas in a career
                  in a completely different industry.
                  <br /> Fast forward... the age of corona.
                  <br />
                  While in confinement, I spent time learning something new.
                  Something new led me back to something old...
                  <br />
                  Fundamentals: HTML, JS, pure CSS. Down the road came React and
                  all kinds of supportive libraries and technologies.
                  <br />
                  In medias res... front-end web development.
                  <br />
                  Now, I develop UX and UI to attract, engage, and provide
                  intuitive interaction between users and machines on the Web. I
                  want to broaden my horizons through new expressions,
                  experiments, and inspirations.
                </p>
              </div>
              <div className="about-list">
                <div className="upper-left"></div>
                <div className="upper-right"></div>
                <div className="lower-left"></div>
                <div className="lower-right"></div>
                <label className="about-label">
                  Mentors, guides, inspirators and unsung heroes of tutorial
                  hell :
                </label>
                <ul>
                  <li>
                    <a
                      href="https://www.w3schools.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      W3Schools
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.www.freecodecamp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      freeCodeCamp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CS50
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codingaddict.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coding Addict
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.traversymedia.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Traversy Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://learn.codevolution.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Codevolution
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freecodecamp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      freeCodeCamp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://courses.webdevsimplified.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Dev Simplified
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://courses.davegray.codes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dave Gray
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://p5aholic.me/info/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Keita Yamada
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------TESTIMONIALS---------------- */}
      <section id="testimonials">
        <div className="frame" id="testimonials-frame">
          <h1>Testimonials</h1>
          <p>
            Social testimonials* from the people I was lucky to cross paths
            with.
          </p>
          <div className="graveyard-grid">
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Aleksandar Babić",
                  "Business owner, Professor, Designer, Enterprenuer",
                  "My relationship with Šćepan is a bittersweet experience. Although stubborn and opinionated, Šćepan is relayable and highly dedicated to his work... Excellent professional.",
                  "src/assets/babic.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/babic.webp" alt="" />
              </div>
              <h4>Aleksandar Babić</h4>
              <h5>Business Owner, Educator, Designer, Enterprenuer </h5>

              <p>"...Exellent professional."</p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Dejan Dražić",
                  "Designer",
                  "We grew up together. Without my musical talent and lady-killer charm, he still is a great company. Šćepan is always a pleasure to be around and to work with... Great guy!",
                  "src/assets/gaga.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/gaga.webp" alt="" />
              </div>
              <h4>Dejan Dražić</h4>
              <h5>Designer</h5>
              <p>"... Great guy." </p>
            </div>

            <div
              className="card"
              onClick={() =>
                openModal(
                  "Sihle Twala",
                  "Educator, Financial Expert",
                  "One always knows what to expect from Šćepan. He is cooperative, reliable and supportive... Punctual and consistent.",
                  "src/assets/sihle.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/sihle.webp" alt="" />
              </div>
              <h4>Sihle Twala</h4>
              <h5>Educator, Financial Expert</h5>
              <p>"..Punctual and consistent." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Mr.Fly",
                  "Writer, Public Speaker, 'Pimp of the Year 1989'",
                  "Šćepan is natural born fixer. Where others see problems, he sees issues, chalanges to be met and conquered... Problem solver.",
                  "src/assets/mrFly.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/mrFly.webp" alt="" />
              </div>
              <h4>Mr.Fly</h4>
              <h5>Writer, Public Speaker, "Pimp of the Year 1989"</h5>
              <p>"...Problem solver..." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Drago Milerlei",
                  "Senior IT Professional, Martial Art Sensei, Diver instructor ",
                  "For years I've been telling him to quit all other BS and focus on coding. It is a true shame he waited for so long... Knowligable and inquisitive.",
                  "src/assets/drago.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/drago.webp" alt="" />
              </div>
              <h4>Drago Milerlei</h4>
              <h5>Senior IT Professional, Judoka, Diver</h5>
              <p>"... Knawligable, inquisitive." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Jelena Janićijević",
                  "PMI Director, Senior Project Manager, Milonguera",
                  "Šćepan has always been hard working - hard playing character. With him on a team, operation will never be compromised. He's demanding, equaly to himself as to the others. He leads the way by his own example.",
                  "src/assets/jela.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/jela.webp" alt="" />
              </div>
              <h4>Jelena Janićijević</h4>
              <h5>PMI Director, Senior Project Manager, Milonguera</h5>
              <p>"...Leads by own example." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Danijela Žižić",
                  "Senior IT Security Professional",
                  "Šćepan and I go way back. He's a hard worker and co-operative colleague. He's frank, direct and easy to comunicate with. It's a pleasure to work with him .",
                  "src/assets/danijela.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/danijela.webp" alt="" />
              </div>
              <h4>Danijela Žižić</h4>
              <h5>Senior IT Security Professional</h5>
              <p>"...Pleasure to work with." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Aleksandar Čakalić",
                  "Senior Frontend Engeneer",
                  " I think Šćepan has much to give to this industry. Who ever has worked with him knows that he's persistent and dedicated.",
                  "src/assets/acacakalic.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/acacakalic.webp" alt="" />
              </div>
              <h4>Aleksandar Čakalić</h4>
              <h5>Senior Frontend Engeneer</h5>
              <p>"...Persistent and dedicated." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Ivan Rajković",
                  "Head of Engineering",
                  "Šćepan is an exceptional professional. Outstanding work!",
                  "src/assets/ivan.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/ivan.webp" alt="" />
              </div>
              <h4>Ivan Rajković</h4>
              <h5>Head of Engineering</h5>
              <p>"...Exceptional!" </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Jovan Miličević",
                  "Chief Sales Officer, Senior Business Manager, Regional Manager at EVGA",
                  "Šćepan is an excellent example of commitment and capability. He's a true leader and capable manager",
                  "src/assets/jovan.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/jovan.webp" alt="" />
              </div>
              <h4>Jovan Miličević</h4>
              <h5>CSO, Senior Business Manager, Regional Manager</h5>
              <p>"...Committed and capable." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Mali Mekani",
                  "self-made man",
                  "No idea who's that guy.",
                  "src/assets/Gates.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/Gates.webp" alt="" />
              </div>
              <h4>Mali Mekani</h4>
              <h5>Self-made man</h5>
              <p>"Garage was too small for two of us." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Tony Stark",
                  "self-made man",
                  "Never heard of him.",
                  "src/assets/Elon.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/Elon.webp" alt="" />
              </div>
              <h4>Tony Stark</h4>
              <h5>Self-made man</h5>

              <p>"South Africa was too small for two of us." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Mia Khalifa",
                  "digital creator",
                  "Someone took him away from me, and seven kindoms couldn't fill the hole he left behind... I'm never gonna dance again.",
                  "src/assets/Mia.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/Mia.webp" alt="" />
              </div>
              <h4>Mia Khalifa</h4>
              <h5>Digital Creator</h5>

              <p>"I'm never gonna dance again."</p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Jordan Jovanović",
                  "Baba Yaga",
                  " He's dedication inspired me. I am a fan of his work. Learned a few pencil tricks from him ... Focused, committed and stubborn sačuvaj bože! ",
                  "src/assets/wick.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/wick.webp" alt="" />
              </div>
              <h4>Jordan Jovanović</h4>
              <h5>Baba Yaga</h5>
              <p>"Focused, committed and stubborn." </p>
            </div>
            <div
              className="card"
              onClick={() =>
                openModal(
                  "Ex mother-in-law",
                  "baksuz",
                  "What was she thinking?! I wish I never met this guy!",
                  "src/assets/tasta.webp"
                )
              }
            >
              <div className="img-container">
                <img src="src/assets/tasta.webp" alt="" />
              </div>
              <h4>Ex mother-in-law</h4>
              <h5>baksuz</h5>
              <p>"I wish I never met him! " </p>
            </div>
          </div>
          <small className="disclamer">
            * Statements expressed hereby are subjective to artistic
            interpretation.
          </small>
        </div>
      </section>
      <footer>&copy; {new Date().getFullYear()} Web Art Forge</footer>
    </main>
  );
};

export default App;
