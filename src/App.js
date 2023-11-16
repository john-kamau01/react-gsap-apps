import Header from "./components/Header";

import "./App.css";
import Content from "./components/Content";
import HeroImages from "./components/HeroImages";

// gsap
import { gsap, Power3 } from "gsap";

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <section className="main">
      <div className="hero">
        <Header timeline={tl} ease={ease} />

        <div className="container">
          <Content timeline={tl} ease={ease} />
          <HeroImages timeline={tl} ease={ease} />
        </div>
      </div>
    </section>
  );
};

export default App;
