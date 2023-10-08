import '../../app/globals.css';

const Header = () => {
  return (
    <div className="w-screen flex flex-row justify-between p-5 md:pl-16">
      <a href="#">
        <h1 className="md:text-4xl text-4xl font-bold text-white font-spacemono ">
          Akash Rajan
        </h1>
      </a>
    </div>
  );
};

export default Header;
