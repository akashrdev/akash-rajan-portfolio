const Aficionado = () => {
  return (
    <div className="max-w-xs h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="https://github.com/akashrdev/aficionado">
        <img
          className="rounded-t-lg h-48 w-full object-cover"
          src="Aficionado.png"
          alt=""
        />
      </a>
      <div className="p-4">
        <a href="https://github.com/akashrdev/aficionado">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aficionado Social Media
          </h5>
        </a>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Aficionado is a social media app for movie lovers. Share and discuss
          reviews for old and new movies alike with a community of cinephiles!
        </p>
      </div>
    </div>
  );
};

export default Aficionado;
