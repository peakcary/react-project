### 1. 创建React项目

使用`create-react-app`来初始化一个新的React项目：

```
bash
复制代码
npx create-react-app my-tab-app
cd my-tab-app
```

### 2. 安装React Router

安装`react-router-dom`用于管理路由（页面切换）：

```
bash
复制代码
npm install react-router-dom
```

### 3. 创建页面组件

创建三个简单的页面组件，例如`Home.js`、`About.js`、`Settings.js`。

#### `src/pages/Home.js`

```
jsx
复制代码
import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the Home page.</p>
    </div>
  );
}

export default Home;
```

#### `src/pages/About.js`

```
jsx
复制代码
import React from 'react';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page.</p>
    </div>
  );
}

export default About;
```

#### `src/pages/Settings.js`

```
jsx
复制代码
import React from 'react';

function Settings() {
  return (
    <div>
      <h2>Settings Page</h2>
      <p>This is the Settings page.</p>
    </div>
  );
}

export default Settings;
```

### 4. 设置路由

在`App.js`中设置路由，并创建底部固定的Tab导航栏。

#### `src/App.js`

```
jsx
复制代码
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import './App.css';

function App() {
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
          <Link to="/" className="tab">Home</Link>
          <Link to="/about" className="tab">About</Link>
          <Link to="/settings" className="tab">Settings</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
```

### 5. 添加CSS样式

为了使底部Tab固定，你可以使用CSS的`position: fixed`属性。

#### `src/App.css`

```
css
复制代码
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

.bottom-tabs {
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
}

.tab {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.tab:hover {
  color: #007bff;
}
```

### 6. 运行应用

在项目根目录中运行：

```
bash
复制代码
npm start
```

你将会看到一个简单的React应用，有三个页面（`Home`，`About`，`Settings`），通过底部固定的Tabs可以进行切换。

这样就创建了一个简单的带有底部Tab导航栏的React应用程序。如果你想进一步增强功能或样式，可以考虑使用UI库如Material-UI或Ant Design。