import './App.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    [],
    container
  );

  return (
    <div className="app">
      <header className="app-header">
      <h1>animate anything</h1>
      </header>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
      </section>
    </div>
  );
}

export default App;
