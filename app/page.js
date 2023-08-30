import Header from '../app/Components/Header.js';
import About from '../app/Components/About.js';
import ProjectList from '../app/Components/ProjectList.js';
const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-cover"
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    >
      <div className="flex">
        <Header />
      </div>
      <div className="flex justify-center">
        <About />
      </div>
      <div>
        <ProjectList />
      </div>
    </div>
  );
};

// background-image: linear-gradient( 135deg, #92FFC0 10%, #002661 100%);
export default Home;
