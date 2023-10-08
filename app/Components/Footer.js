import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="mt-10 md:h-16 h-16 w-screen bg-indigo-950 flex flex-col justify-center items-center space-y-1">
      <span className="text-white text-sm font-spacemono">
        Made by Akash Rajan. All rights reserved.
      </span>
      <a
        href="https://github.com/akashrdev/akash-rajan-portfolio"
        target="_blank"
      >
        <button className="border rounded-lg text-white text-xs px-2 py-1 font-spacemono justify-center  hover:translate-y-1 transition-all">
          <FontAwesomeIcon icon={faGithub} className="md:text-md text-sm" />{' '}
          View Source Code
        </button>
      </a>
    </div>
  );
};

export default Footer;
