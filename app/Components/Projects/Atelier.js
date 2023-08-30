const Atelier = () => {
  return (
    <div className="w-72 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
        <img
          className="rounded-t-lg h-48 w-full object-fill"
          src="/Atelier.png"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Atelier E-Commerce
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Atelier is an E-Commerce platform dealing in high fashion clothing and
          accessories.
        </p>
      </div>
    </div>
  );
};

export default Atelier;
