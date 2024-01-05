import './App.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".logo",
      { 
        y: "50vh",
        scale: 6,
      },
      {
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".content",
          scrub: true,
          start: "top bottom",
          endTrigger: ".content",
          end: "top center"
        },
      }
    );
  });

  
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(element.querySelector(".logo"),
  //     { 
  //       y: "50vh",
  //       scale: 6,
  //     },
  //     {
  //       y: 0,
  //       scale: 1,
  //       scrollTrigger: {
  //         trigger: element.querySelector(".content"),
  //         scrub: true,
  //         start: "top bottom",
  //         endTrigger: element.querySelector(".content"),
  //         end: "top center"
  //       },
  //     }
  //   );
  // }, []);


  return (
    <div className="app" ref={ref}>
      <div className="logo-container">
        <h1 className="logo">HELLO</h1>
      </div>

      <div className="container"></div>

      <div className="content">
        <img src="https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="rapper on stage"/>
      </div>

      <section className="section">
        <div className="app-header">
        <h2>animate anything</h2>
        </div>
        <div className="boxes-container" ref={container}>
          <h3>Use the button to toggle a Timeline</h3>
          <div>
            <button onClick={toggleTimeline}>Toggle Timeline</button>
          </div>
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
      </section>
      <section className="section-2"></section>
    </div>
  );
}

export default App;
