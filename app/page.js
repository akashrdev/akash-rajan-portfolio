import Header from '../app/Components/Header.js';
import About from '../app/Components/About.js';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Header />
      </div>
      <div className="flex justify-center">
        <About />
      </div>
    </div>
  );
};

export default Home;
