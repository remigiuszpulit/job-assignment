export default function ArticleBanner({ title, date, favoritesCount, author }) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">
          <a href="/#/profile/ericsimmons">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a href="/#/profile/ericsimmons" className="author">
              {author.username}
            </a>
            {/* january 20th */}
            <span className="date">{date}</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round" />
            &nbsp; {`Follow ${author.username}`} <span className="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart" />
            &nbsp; Favorite Post <span className="counter">({favoritesCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
