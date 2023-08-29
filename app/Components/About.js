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
      strings: ['code.', 'optimize.', 'solve.', 'create.'],
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
      <div className="flex flex-col fixed">
        <h1 className="text-5xl font-inter">I love to</h1>
        <h1
          className="text-7xl inline-block font-inter  font-extrabold"
          ref={el}
        />
      </div>
      <div className="flex justify-center flex-row ">
        <span className="pt-40">
          Howdy! I'm Akash, a Full-Stack Engineer passionate about creating
          delightful user experiences.
        </span>
        <img src="/web-developer.svg" className="w-3/5 mt-[-150px] " />
      </div>
      <div className="flex flex-row justify-evenly space-x-5">
        <button>
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </button>
        <button>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </button>
        <button>
          <a href="mailto:akashrdev@gmail.com?subject=I want to see your skills in action!">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default About;
