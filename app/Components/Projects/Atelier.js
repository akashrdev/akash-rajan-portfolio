const Atelier = () => {
  return (
    <div className="md:w-72 md:h-96 h-52 w-40 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
        <img
          className="rounded-t-lg h-28 md:h-48 w-full object-fill bg-white"
          src="/shopping.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 text-center">
            Atelier E-Commerce
          </h5>
        </a>
        <p className="hidden md:block mb-3 text-sm font-normal text-white text-center">
          Atelier is an E-Commerce platform dealing in high fashion clothing and
          accessories.
        </p>
      </div>
    </div>
  );
};

export default Atelier;
