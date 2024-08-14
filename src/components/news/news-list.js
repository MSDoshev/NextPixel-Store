export default function NewsList({ articles }) {
  return (
    <ul className="flex flex-col gap-8 pb-32 px-4 lg:px-0">
      {articles.map((article) => (
        <li key={article.id} className="flex justify-center">
          <div className="relative flex flex-col lg:flex-row bg-white shadow-lg w-full lg:w-2/3 rounded-xl overflow-hidden">
            <img
              src="/images/home/news.jpg"
              className="w-full lg:w-64 h-48 lg:h-56 object-cover"
              alt={article.title}
            />
            <div className="flex flex-col justify-between p-6 lg:p-8 w-full">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl lg:text-2xl text-gray-900">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {article.content}
                </p>
              </div>
              <a
                href="/"
                className="text-blue-600 hover:underline text-sm lg:text-base absolute bottom-4 right-4"
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
