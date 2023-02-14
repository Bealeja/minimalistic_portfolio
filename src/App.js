import logo from "./logo.svg";
import nav_bar from "./nav_bar/index";
import "bulma/css/bulma.min.css";
import J_icon from "./assets/slack.png";
import portrait from "./assets/portrait4.png";
import icons from "./assets/pretty_icons.png";
import skills from "./assets/skill_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <div class="container">
        <section class="section is-small">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-start">
              <a class="navbar-item" href="http://localhost:3000/">
                <img src={J_icon} width="30" height="100" />
              </a>
            </div>

            <div clas="navbar-end">
              <div class="buttons">
                <a class="button is-info">
                  <strong>Contact Me</strong>
                </a>

                <a class="button is-info">
                  <strong>Github</strong>
                </a>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <section class="section is-small">
        <h1 class="title is-spaced is-size-1-desktop">
          Designer, Full-Stack Developer & Learner
        </h1>
        <br></br>
        <h2 class="subtitle has-text-centered">I like making things</h2>
        <div class="card-image has-text-centered">
          <figure class="image is-inline-block">
            <img src={portrait} />
          </figure>
        </div>
      </section>

      <div class="card-image has-text-centered">
        <figure class="image is-inline-block">
          <img src={icons} />
        </figure>
      </div>

      <section class="hero is-large is-info has-text-centered">
        <div class="container">
          <div class="hero-body">
            <p class="title">Hi, I'm Jack. Nice to meet you!</p>
            <p class="subtitle">
              Since embarking on my journey as a junior developer I have always
              been driven by a passion for creating simple innovative solutions.
              My goal is to continuously improve my skills and knowledge, and to
              work on projects that make a positive impact on society.
            </p>
          </div>
        </div>
      </section>
      <section class="section has-text-centered">
        <div class="container is-narrow">
          <div class="box">
            <div class="columns is-centered">
              <div class="column">
                <FontAwesomeIcon icon={faImage} />
                <p class="title">column 1</p>
              </div>
              <div class="column">
                <p class="title">column 2</p>
              </div>
              <div class="column">
                <p class="title">column 3</p>
              </div>
            </div>
          </div>
          <section class="section is-large"></section>
        </div>
      </section>
    </div>
  );
}

export default App;
