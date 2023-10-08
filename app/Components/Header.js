import '../../app/globals.css';

const Header = () => {
  return (
    <div className="w-screen flex flex-row justify-between pl-2 md:pl-16 md:pt-2">
      <a href="#">
        <h1 className="md:text-5xl text-4xl font-bold text-white font-spacemono ">
          Akash Rajan
        </h1>
      </a>
    </div>
  );
};

export default Header;
