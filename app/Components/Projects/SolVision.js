const SolVision = () => {
  return (
    <div className="w-32 h-44 md:w-72 md:h-96 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="#">
        <img
          className="rounded-t-lg bg-white h-20 md:h-48 w-full object-fill"
          src="/thinking.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/SolVision">
          <h5 className="mb-2 md:text-start text-center text-base md:text-xl font-bold tracking-tight text-rose-500">
            SolVision
          </h5>
        </a>
        <p className="hidden md:block mb-3 text-sm font-normal text-white">
          SolVision is a Solana Blockchain explorer for beginners. Get up to
          date Solana prices, and analyze your blockchain activity with ease.
        </p>
      </div>
    </div>
  );
};

export default SolVision;
