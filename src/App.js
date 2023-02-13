import logo from "./logo.svg";
import nav_bar from "./nav_bar/index";
import "bulma/css/bulma.min.css";
import J_icon from "./assets/slack.png";
import portrait from "./assets/portrait4.png";

function App() {
  return (
    <div>
      <div className="container">
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
        <h1 class="has-text-centered has-text-weight-bold is-family-monospace is-size-2">
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

      <section class="section is-small is-family-monospace"></section>

      <section class="hero is-large is-info">
        <div class="hero-body">
          <p class="title">Hi, I'm Jack. Nice to meet you!</p>
          <p class="subtitle">
            Since embarking on my jounry as a junior developer I have always
            been driven by a passion for creating simple innovative solutions.
            With a background in mechatronic engineering, I have developed the
            skills to turn complex problems into simple, yet effective software.
            Here, you will ejoy interacting with some of my most recent projects
            and the technologies I have used to build them. My goal is to
            continuously improve my skills and knowledge, and to work on
            projects that make a positive impact on society.
          </p>
        </div>
      </section>

      <section class="section is-large"></section>
    </div>
  );
}

export default App;
