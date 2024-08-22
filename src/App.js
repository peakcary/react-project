import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactGA from "react-ga4"; // 导入react-ga4
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  useEffect(() => {
    // 初始化Google Analytics
    ReactGA.initialize("G-FFJRWE64YP"); // 替换为你的GA测量ID
    ReactGA.send("pageview"); // 发送首页的初始页面视图
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <div className="bottom-tabs">
          <Link
            to="/"
            className="tab"
            onClick={() => {
              ReactGA.send({ hitType: "pageview", page: "/" });
              ReactGA.event({
                category: "Navigation",
                action: "Clicked Home Tab",
                label: "Home Tab Click",
              });
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="tab"
            onClick={() =>
              ReactGA.send({ hitType: "pageview", page: "/about" })
            }
          >
            About
          </Link>
          <Link
            to="/settings"
            className="tab"
            onClick={() =>
              ReactGA.send({ hitType: "pageview", page: "/settings" })
            }
          >
            Settings
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
