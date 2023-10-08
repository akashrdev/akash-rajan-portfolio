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
    <div className="space-y-9">
      <div className="md:flex md:flex-row md:justify-center space-x-56 w-screen">
        <div className="flex justify-center space-y-40 md:space-y-0">
          <img src="/Monke.png" className="md:hidden rounded-full h-60 " />
          <div className="flex flex-col absolute pt-24">
            <h1 id="about" className="text-5xl font-spacemono text-white">
              I love to
            </h1>
            <h1
              className="text-7xl inline-block font-spacemono font-extrabold text-rose-500"
              ref={el}
            />
          </div>
        </div>
        <img
          src="/Monke.png"
          className="hidden md:block rounded-full md:h-72"
        />
      </div>

      <div className="flex flex-col justify-center md:flex-row space-y-5">
        <span className="md:pt-0 pt-28 mx-5 text-white font-spacemono text-center">
          Howdy! I'm Akash, a Full-Stack Engineer passionate about creating
          delightful user experiences.
        </span>
      </div>
      <div className="flex flex-row justify-center md:space-x-56 space-x-24">
        <button className="text-white ease-out hover:translate-y-1 transition-all rounded">
          <a href="https://github.com/akashrdev" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="md:text-50px text-4xl"
            />
          </a>
        </button>
        <button className=" text-blue-500 ease-out hover:translate-y-1 transition-all rounded">
          <a href="https://www.linkedin.com/in/akashrajan/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="md:text-50px text-4xl"
            />
          </a>
        </button>
        <button className="btn text-yellow-500 ease-out hover:translate-y-1 transition-all rounded">
          <a href="mailto:akashrdev@gmail.com?subject=I want to see your skills in action!">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="md:text-50px text-4xl"
            />
          </a>
        </button>
      </div>
      <div className="flex justify-center">
        <a href="/Akash Rajan Resume.pdf" target="_blank">
          <button className="bg-rose-500 rounded-lg text-white md:text-3xl text-2xl py-1 px-1 font-spacemono justify-center md:py-3 md:px-5 flex hover:translate-y-1 transition-all">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};
export default About;
