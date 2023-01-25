import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

export default function Appa() {
  const [active, setActive] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(contentRef.current){
      contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
    }
    else{
      console.log("Error")
    }
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
      <>
        <div className="Appa">
        <div style={{margin:'0 auto', width:`calc(200px + 30vw)`}}>
          <button
            style={{width:'100%'}}
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                  Why do you like web developemnt
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding </p>
                <p>I love coding because conding give me a lot of money</p>
                <p>So I like web developemnt</p>

              </div>
            </div>

          </button>
        </div>
        </div>
    </>
  );
}