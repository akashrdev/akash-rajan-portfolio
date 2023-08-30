'use client';

import Typed from 'typed.js';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['code.', 'solve.', 'create.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex mt-28 flex-col ">
      <div className="flex flex-col absolute">
        <h1 id="about" className="text-5xl font-spacemono text-white">
          I love to
        </h1>
        <h1
          className="text-7xl inline-block font-spacemono font-extrabold text-rose-500"
          ref={el}
        />
      </div>
      <div className="flex justify-center flex-row ">
        <span className="pt-40 text-white font-spacemono">
          Howdy! I'm Akash, a Full-Stack Engineer passionate about creating
          delightful user experiences.
        </span>
        <img src="/web-developer.svg" className="w-3/5 mt-[-150px] " />
      </div>
      <div className="flex flex-row justify-evenly space-x-5">
        <button className="text-white ease-out hover:translate-y-1 transition-all rounded">
          <a href="https://github.com/akashrdev" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </button>
        <button className=" text-blue-500 ease-out hover:translate-y-1 transition-all rounded">
          <a href="https://www.linkedin.com/in/akashrajan/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </button>
        <button
          //  shadow-[0_9px_0_rgb(10,100,100)]
          //  hover:shadow-[0_4px_0px_rgb(0,0,0)]
          className="btn text-yellow-500 ease-out hover:translate-y-1 transition-all rounded"
        >
          <a href="mailto:akashrdev@gmail.com?subject=I want to see your skills in action!">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default About;
