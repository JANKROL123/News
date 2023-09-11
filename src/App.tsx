import "./style.scss";
import latestNewsService from "./services/latestNews";
import Article from "./models/Article";
import { useEffect, useState } from "react";
function App() {
  const [news, setNews] = useState<Article[]>([])
  useEffect(() => {
    latestNewsService.getLatestNews().then(res => {
      setNews(res);
    });
  }, []);
  return <div>
    {news.length > 0 ? news.map(article => <li key={article.article_id}>{article.title}</li>) : null}
  </div>
}

export default App
