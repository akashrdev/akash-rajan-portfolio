const WiskyBusiness = () => {
  return (
    <div className="w-72 h-96 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
        <img
          className="rounded-t-lg bg-white h-48 w-full object-fill"
          src="/adoption.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 ">
            Wisky Business
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-white ">
          Wisky Business is a simple memory game you can play solo or invite a
          friend! Each card in the game is an actual animal in need of adoption
          at a shelter near you!
        </p>
      </div>
    </div>
  );
};

export default WiskyBusiness;
