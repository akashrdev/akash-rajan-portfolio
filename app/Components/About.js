'use client';

import Typed from 'typed.js';
import React from 'react';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['code.', 'optimize.', 'solve.', 'create.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex mt-28 p-7 flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl">I love to</h1>
        <h1 className="text-6xl " ref={el}></h1>
      </div>
      <div className="flex fixed justify-between flex-row w-full pr-80">
        <span className=" mt-32">
          Howdy! I'm Akash, a Full-Stack Engineer passionate about creating
          delightful user experiences.
        </span>
        <img src="/BitcoinKash.png" className="rounded-full w-96 h-96" />
      </div>
    </div>
  );
};
export default About;
