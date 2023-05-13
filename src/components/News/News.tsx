import { newsData } from "../../data";
import { More } from "../SVG/Icon";
import "./news.css";

const News: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-header">
        <div>What's happening</div>
      </div>
      <div className="news-section">
        {newsData.map((news) => {
          return (
            <div key={news.id} className="news-single-item">
              <div className="news-info-wrapper">
                <div className="news-events-category">
                  <span>{news?.category}</span> <span>{news?.event}</span>
                </div>
                <div className="news-description">{news.desc}</div>

                {news.tag && news.tag.length > 0 && (
                  <div className="news-tags-container" >
                    <span>Trending with</span>
                    {news.tag.map((tag) => (
                      <span className="news-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {news.tweets && (
                  <div className="news-tweets">{news.tweets} Tweets</div>
                )}
              </div>
              <div className="img-more">
                {news.id === 1 ? (
                  <img src={news.img} className="news-img" />
                ) : (
                  <More fill="#7c7c7c" width={24} height={24} />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="show-more">Show more</div>
      </div>
    </div>
  );
};

export default News;
