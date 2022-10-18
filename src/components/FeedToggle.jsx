export default function FeedToggle({ options, active, update }) {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {options.map(option => {
          return (
            <li key={option.value} className={`nav-item`}>
              <button
                onClick={() => !option.disabled && update(option.value)}
                className={`nav-link ${active === option.value && "active"} ${option.disabled && "disabled"}`}
                style={{ background: "none", border: "none" }}
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
