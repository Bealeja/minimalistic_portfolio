import logo from "./logo.svg";
import nav_bar from "./nav_bar/index";
import "bulma/css/bulma.min.css";
import J_icon from "./assets/slack.png";
import portrait from "./assets/portrait2.png";

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
      </section>

      <section class="section is-small is-family-monospace">
        <figure class="image is-128x128">
          <img src={portrait} />
        </figure>
      </section>

      <section class="hero is-large is-info">
        <div class="hero-body">
          <p class="title">Text-Hero</p>
        </div>
      </section>
    </div>
  );
}

export default App;
