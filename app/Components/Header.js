import '../../app/globals.css';

const Header = () => {
  return (
    <div className="h-13 w-screen flex flex-row border-b border-black shadow-lg justify-between p-7 ">
      <button>
        <h1 className="text-6xl font-inter font-extrabold">Akash Rajan</h1>
      </button>
      <div className="flex mt-5">
        <button>
          <h1 className="text-4xl font-inter font-extrabold flex justify-end mr-7">
            About
          </h1>
        </button>
        <button>
          <h1 className="text-4xl font-inter font-extrabold flex justify-end">
            Work
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
