import WiskyBusiness from './Projects/WiskyBusiness.js';
import Aficionado from './Projects/Aficionado.js';
import Atelier from './Projects/Atelier.js';
import PHP from './Projects/PHP.js';

const ProjectList = () => {
  return (
    <div className="m-7 text-5xl mt-28 font-inter font-extrabold ">
      <div
        id="projects"
        className="flex flex-row space-x-64 align-middle justify-center overflow-x-visible"
      >
        <WiskyBusiness />
        <Aficionado />
        <Atelier />
        <PHP />
      </div>
    </div>
  );
};

export default ProjectList;
