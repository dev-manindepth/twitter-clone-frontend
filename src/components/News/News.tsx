import { useContext } from "react";
import { ITrendingData } from "../../types";
import "./news.css";
import { TweetContext } from "../../context/tweetContext";

const News: React.FC = () => {
  // const {
  //   tweets: { trendingData },
  // }: { tweets: { trendingData: ITrendingData } } = useContext(TweetContext);
  const tweetContext = useContext(TweetContext);
  const trendingData = tweetContext?.tweets?.trendingData;
  return (
    <div className="news-container">
      {trendingData && (
        <>
          <div className="news-header">
            <div>{trendingData.title}</div>
          </div>
          <div className="news-section">
            {trendingData.trends.map(
              ({ country, text, category, tweets, hashTags }, idx) => {
                return (
                  <div key={idx} className="news-single-item">
                    <div className="news-info-wrapper">
                      <div className="news-events-category">
                        {category ? (
                          <span>{category} · Trending</span>
                        ) : (
                          <span>Trending in {country}</span>
                        )}
                      </div>
                      <div className="news-description">{text}</div>

                      {hashTags && hashTags.length > 0 && (
                        <div className="news-tags-container">
                          <span>Trending with</span>
                          {hashTags.map((tag, idx) => (
                            <span className="news-tag" key={idx}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {tweets && (
                        <div className="news-tweets">{tweets} Tweets</div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div>
            <div className="show-more">Show more</div>
          </div>
        </>
      )}
    </div>
  );
};

export default News;
