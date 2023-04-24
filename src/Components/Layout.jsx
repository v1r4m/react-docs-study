import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/event1">Event1</Link>
          </li>
          <li>
            <Link to="/event2">Event2</Link>
          </li>
          <li>
            <Link to="/event3">Event3</Link>
          </li>
          <li>
            <Link to="/state1">State1</Link>
          </li>
          <li>
            <Link to="/state2">State2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
