import { useCurrentUser } from "context/context";
import { NavLink } from "react-router-dom";
import { useLoginDispatch } from "context/context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useCurrentUser();
  const dispatch = useLoginDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "logout" });
    navigate("/logout");
    console.log(user);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>

          {user.username === "" ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Sign up
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/editor">
                  <i className="ion-compose" />
                  &nbsp;New Article
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </NavLink>
              </li>
              <li
                className="nav-item"
                style={{ paddingTop: " 0.425rem", paddingBottom: "0.425rem" }}
              >{`Logged in as ${user.username}`}</li>
              <li className="nav-item">
                <button onClick={() => logout()} className="nav-link" style={{ background: "none", border: "none" }}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
