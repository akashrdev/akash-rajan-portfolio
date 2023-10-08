const PHP = () => {
  return (
    <div className="md:w-72 md:h-96 h-52 w-40 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/SolVision">
        <img
          className="rounded-t-lg bg-white h-28 md:h-48 w-full object-fill"
          src="/thinking.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/SolVision">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 text-center">
            SolVision
          </h5>
        </a>
        <p className="hidden md:block mb-3 text-sm font-normal text-white text-center">
          SolVision is a Solana Blockchain explorer for beginners. Get up to
          date Solana prices, and analyze your blockchain activity with ease.
        </p>
      </div>
    </div>
  );
};

export default PHP;
