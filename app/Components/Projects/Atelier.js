const Atelier = () => {
  return (
    <div className="w-72 h-96 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
        <img
          className="rounded-t-lg h-48 w-full object-fill  border-black border rounded-lg"
          src="/Atelier.png"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/Atelier-Client" target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 ">
            Atelier E-Commerce
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-white">
          Atelier is an E-Commerce platform dealing in high fashion clothing and
          accessories.
        </p>
      </div>
    </div>
  );
};

export default Atelier;
