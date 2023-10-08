import WiskyBusiness from './Projects/WiskyBusiness.js';
import Aficionado from './Projects/Aficionado.js';
import Atelier from './Projects/Atelier.js';
import PHP from './Projects/PHP.js';

const ProjectList = () => {
  return (
    // <div className=" text-5xl font-inter font-extrabold">
    //   <div
    //     id="projects"
    //     className="flex flex-row space-x-16 align-middle justify-center overflow-clip"
    //   >
    //     <WiskyBusiness />
    //     <Aficionado />
    //     <Atelier />
    //     <PHP />
    //   </div>
    // </div>

    <div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0 align-middle justify-center">
        <div className="flex flex-row space-x-4 md:space-x-6 justify-center">
          <WiskyBusiness />
          <Aficionado />
        </div>

        <div className="flex flex-row space-x-4 md:space-x-6 justify-center">
          <Atelier />
          <PHP />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
