const Aficionado = () => {
  return (
    <div className="md:w-72 md:h-96 w-40 h-52 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/aficionado">
        <img
          className="rounded-t-lg h-28 md:h-48 w-full object-fill bg-white"
          src="streaming.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/aficionado">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500 text-center">
            Aficionado Social Media
          </h5>
        </a>
        <p className="hidden md:block mb-3 text-sm font-normal text-white text-center">
          Aficionado is a social media app for movie lovers. Share and discuss
          reviews for old and new movies alike with a community of cinephiles!
        </p>
      </div>
    </div>
  );
};

export default Aficionado;
