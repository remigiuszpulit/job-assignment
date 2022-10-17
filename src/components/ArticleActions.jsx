export default function ArticleActions({ author, favoritesCount }) {
  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="/#/profile/ericsimmons">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="/#/profile/ericsimmons" className="author">
            {author.name}
          </a>
          <span className="date">date</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round" />
          &nbsp; {`Follow ${author.name}`}
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart" />
          &nbsp; Favorite Post <span className="counter">({favoritesCount})</span>
        </button>
      </div>
    </div>
  );
}
