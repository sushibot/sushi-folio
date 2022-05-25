import "./App.css";
import placeholder from "./assets/images/ball.png";
function App() {
  return (
    <main className="container">
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
      <section className="logo-container">
        <h3 className="h3 logo">Gabe Fontanilla</h3>
        <p className="p description">Frontend Developer</p>
      </section>
      <img className="img" src={placeholder} />
    </main>
  );
}

export default App;
