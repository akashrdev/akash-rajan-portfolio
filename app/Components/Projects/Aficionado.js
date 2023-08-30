const Aficionado = () => {
  return (
    <div className="w-72 h-96 bg-indigo-950 rounded-lg shadow ease-out hover:translate-y-1 transition-all">
      <a href="https://github.com/akashrdev/aficionado">
        <img
          className="rounded-t-lg h-48 w-full object-fill bg-white"
          src="streaming.svg"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/aficionado">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-rose-500">
            Aficionado Social Media
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-white">
          Aficionado is a social media app for movie lovers. Share and discuss
          reviews for old and new movies alike with a community of cinephiles!
        </p>
      </div>
    </div>
  );
};

export default Aficionado;
