import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoadingPage from './pages/LoadingPage';
import TabSwitcherPage from './pages/TabSwitcherPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import InformationPage from './pages/InformationPage';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <Routes>
        {!loadingComplete && (
          <Route path="/" element={<LoadingPage onComplete={() => setLoadingComplete(true)} />} />
        )}
        {loadingComplete && (
          <>
            <Route path="/tab" element={<TabSwitcherPage />}>
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
            </Route>
            <Route path="/info" element={<InformationPage />} />
            <Route path="*" element={<Navigate to="/tab/page1" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
