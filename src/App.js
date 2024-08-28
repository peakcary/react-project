import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import TabSwitchPage from "./pages/TabSwitchPage";
import InfoPage from "./pages/InfoPage";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev + 10);
    }, 300);

    if (progress >= 100) {
      setLoading(false);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <Router>
      {loading ? (
        <LoadingPage progress={progress} />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/tab/1" replace />} />
          <Route path="/tab" element={<TabSwitchPage />}>
            <Route path="1" element={<Tab1 />} />
            <Route path="2" element={<Tab2 />} />
            <Route path="3" element={<Tab3 />} />
          </Route>
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
