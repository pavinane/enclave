import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ImageScroller.css";

gsap.registerPlugin(Flip, ScrollTrigger);

const FlipAnimation = () => {
  const initialContainer = useRef(null);
  const finalSpacer = useRef(null);
  const secondMarker = useRef(null);
  const thirdMarker = useRef(null);
  const flipCtx = useRef(null);

  useLayoutEffect(() => {
    // Ensures elements are fully rendered before any animation
    if (
      !initialContainer.current ||
      !finalSpacer.current ||
      !secondMarker.current ||
      !thirdMarker.current
    ) {
      return;
    }

    // Reverts previous animations if they exist
    if (flipCtx.current) flipCtx.current.revert();

    flipCtx.current = gsap.context(() => {
      // Capture the initial states of the markers
      const secondState = Flip.getState(secondMarker.current);
      const thirdState = Flip.getState(thirdMarker.current);
      const flipConfig = {
        ease: "none",
        duration: 1,
      };

      // Create the scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: initialContainer.current,
          start: "clamp(top center)",
          endTrigger: finalSpacer.current,
          end: "clamp(top center)",
          scrub: true,
          markers: true,
        },
      });

      tl.add(Flip.fit(".box", secondState, flipConfig)).add(
        Flip.fit(".box", thirdState, flipConfig),
        "+=0.5"
      );
    }, initialContainer);

    // Cleanup event listeners and GSAP context on component unmount
    return () => {
      if (flipCtx.current) flipCtx.current.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="spacer" style={{ height: "100vh" }}></div>
      <div className="main flex flex-row">
        <div className="container initial" ref={initialContainer}>
          <div
            className="box bg-green-500"
            style={{ height: "100px", width: "100px" }}
          ></div>
        </div>
        <div className="container second">
          <div
            className="marker bg-orange-500"
            ref={secondMarker}
            style={{ height: "100px", width: "100px" }}
          ></div>
        </div>
        <div className="container third">
          <div
            className="marker bg-purple-500"
            ref={thirdMarker}
            style={{ height: "100px", width: "100px" }}
          ></div>
        </div>
      </div>
      <div
        className="spacer final"
        ref={finalSpacer}
        style={{ height: "100vh" }}
      ></div>
    </div>
  );
};

export default FlipAnimation;
