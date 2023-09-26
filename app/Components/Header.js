import '../../app/globals.css';

const Header = () => {
  return (
    <div className="h-13 w-screen flex flex-row justify-between p-8 items-end">
      <a href="#">
        <h1 className="text-6xl text-white font-spacemono ">Akash Rajan</h1>
      </a>
      <div className="flex">
        {/* <button
          href="/Akash Rajan Resume.pdf"
          target="_blank"
          className="flex bg-rose-500 rounded-lg text-white text-3xl py-3 px-7"
        >
          Resume
        </button> */}
      </div>
    </div>
  );
};

export default Header;
