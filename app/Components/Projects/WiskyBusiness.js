const WiskyBusiness = () => {
  return (
    <div className="max-w-xs h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
        <img
          className="rounded-t-lg h-48 w-full object-cover"
          src="/Wisky Business.png"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/WiskyBusiness" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wisky Business Memory Game
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Wisky Business is a simple memory game you can play solo or invite a
          friend! Each card in the game is an actual animal in need of adoption
          at a shelter near you!
        </p>
      </div>
    </div>
  );
};

export default WiskyBusiness;
