export default function NewsList({ articles }) {
  return (
    <ul className="flex flex-col gap-10 pb-32 px-4 lg:px-0">
      {articles.map((article) => (
        <li key={article.id} className="flex justify-center">
          <div className="relative flex flex-col lg:flex-row bg-white shadow-md hover:shadow-xl transition-shadow duration-300 w-full lg:w-2/3 rounded-lg overflow-hidden">
            <img
              src="/images/home/news.jpg"
              className="w-full lg:w-64 h-48 lg:h-56 object-cover transition-transform duration-300 transform hover:scale-105"
              alt={article.title}
            />
            <div className="flex flex-col justify-between p-6 lg:p-8 w-full">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-2xl lg:text-3xl text-gray-800 leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm">{article.date}</p>
                <p className="text-gray-600 text-base line-clamp-3">
                  {article.content}
                </p>
              </div>
              <a
                href={`/news/${article.id}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm lg:text-base mt-4 lg:mt-0 transition-colors duration-300"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
