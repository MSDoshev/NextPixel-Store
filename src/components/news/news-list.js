export default function NewsList({ articles }) {
  return (
    <ul className="flex flex-col gap-5 pb-32">
      {articles.map((article) => (
        <li key={article.id} className="flex justify-center">
          <div className="flex flex-row bg-stone-400 w-2/4 rounded-3xl gap-8">
            <img
              src="/images/home/news.jpg"
              className="w-64 h-56 rounded-3xl"
              alt={article.title}
            />
            <div
              className="flex flex-col justify-between pt-5 pb-5 pr-5"
              style={{ width: "calc(100% - 19rem)" }}
            >
              <div
                className="flex flex-col gap-1"
                style={{
                  maxHeight: "120px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <h2 className="font-bold text-2xl">{article.title}</h2>
                <p className="text-stone-700 text-sm">{article.date}</p>
                <p className="overflow-hidden text-ellipsis">
                  {article.content}
                </p>
              </div>
              <div className="flex justify-end items-end mt-auto">
                <a href="/" className="text-blue-600 hover:underline">
                  Read More &gt;
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
