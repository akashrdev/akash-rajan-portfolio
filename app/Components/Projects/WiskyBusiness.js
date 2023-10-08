const WiskyBusiness = () => {
  return (
    <div className="md:w-72 md:h-96 h-52 w-40 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
        <img
          className="rounded-t-lg bg-white h-28 md:h-48 w-full object-fill"
          src="/adoption.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 text-center">
            Wisky Business
          </h5>
        </a>
        <p className="hidden md:block mb-3 text-sm font-normal text-white text-center">
          Wisky Business is a simple memory game you can play solo or invite a
          friend! Each card in the game is an actual animal in need of adoption
          at a shelter near you!
        </p>
      </div>
    </div>
  );
};

export default WiskyBusiness;
