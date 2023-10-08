import Header from '../app/Components/Header.js';
import About from '../app/Components/About.js';
import ProjectList from '../app/Components/ProjectList.js';
import TechStack from '../app/Components/TechStack.js';
import Footer from '../app/Components/Footer.js';
const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-cover"
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    >
      <div className="">
        <Header />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <TechStack />
      </div>
      <div className="mt-10">
        <ProjectList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

// background-image: linear-gradient( 135deg, #92FFC0 10%, #002661 100%);
export default Home;
