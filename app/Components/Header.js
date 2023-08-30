import '../../app/globals.css';

const Header = () => {
  return (
    <div className="h-13 w-screen flex flex-row justify-between p-8 ">
      <a href="#">
        <h1 className="text-6xl text-white font-spacemono ">Akash Rajan</h1>
      </a>
      <div className="flex mt-5">
        <a href="/Akash Rajan Resume.pdf" target="_blank">
          <h1 className="text-4xl text-white font-spacemono flex justify-end">
            Resume
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Header;
