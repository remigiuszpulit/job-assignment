export default function ArticleActions() {
  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="/#/profile/ericsimmons">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="/#/profile/ericsimmons" className="author">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round" />
          &nbsp; Follow Eric Simons
        </button>
        &nbsp;
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart" />
          &nbsp; Favorite Post <span className="counter">(29)</span>
        </button>
      </div>
    </div>
  );
}
