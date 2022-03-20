import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function App() {
  return (
    <BrowserRouter basename="/react-app">
      <Link to="/">首页</Link>
      <Link to="/about">关于页面</Link>
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
