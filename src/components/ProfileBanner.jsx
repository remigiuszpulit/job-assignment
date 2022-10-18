export default function ProfileBanner({ username, bio, img, children }) {
  const defaultUrl = "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={img === "" ? defaultUrl : img} className="user-img" />
            <h4>{username}</h4>
            <p>{bio}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
