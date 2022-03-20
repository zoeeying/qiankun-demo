import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// 应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {}

export async function mount() {
  render()
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
