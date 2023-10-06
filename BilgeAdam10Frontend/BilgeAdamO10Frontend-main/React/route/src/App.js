import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import User from "./pages/user";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
