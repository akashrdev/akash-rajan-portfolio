import WiskyBusiness from './Projects/WiskyBusiness.js';
import Aficionado from './Projects/Aficionado.js';
import Atelier from './Projects/Atelier.js';
import PHP from './Projects/PHP.js';

const ProjectList = () => {
  return (
    <div className=" text-5xl font-inter font-extrabold ">
      <div
        id="projects"
        className="flex flex-row space-x-16 align-middle justify-center overflow-clip"
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
