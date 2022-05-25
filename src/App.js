import "./App.css";
import soundcloud from "./assets/images/soundcloud.png";
import linkedin from "./assets/images/linkedin.png";
import github from "./assets/images/github.png";
import placeholder from "./assets/images/ball.png";
function App() {
  return (
    <main className="container">
      <div className="sub-container">
        <section className="link-container">
          <a className="a">
            <h1 className="h1 link">work</h1>
          </a>
          <a className="a">
            <h1 className="h1 link">"music"</h1>
          </a>
          <a className="a">
            <h1 className="h1 link">contact</h1>
          </a>
        </section>
        <section className="name-logo-container">
          <h3 className="h3 name">Gabe Fontanilla</h3>
          <p className="p description">Frontend Developer</p>
          <div className="logo-container">
            <a className="a">
              <img className="logo-img" src={soundcloud} />
            </a>
            <a className="a">
              <img className="logo-img" src={linkedin} />
            </a>
            <a className="a">
              <img className="logo-img" src={github} />
            </a>
          </div>
        </section>
      </div>
      <img className="img" src={placeholder} />
    </main>
  );
}

export default App;
