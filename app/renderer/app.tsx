import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button'
import {Input} from 'antd'
import 'antd/dist/antd.css'
import {HashRouter, Route, Routes, Link} from 'react-router-dom'
import Start from './pages/start'
import Work from './pages/work'
import Material from './pages/material'
import Found from './pages/found'
import {Provider} from 'react-redux'
import store from './store'

// import logo from './logo.svg'

function App() {
  // return <h1>hello world123
  //   <Button />
  //   {/* <img src={logo} alt="" /> */}
  //   <Input />
  // </h1>
  return (
    <Provider store={store}>
      <HashRouter>
        <Link to="/work">工作</Link>
        <Link to="/work?id=1">工作2</Link>
        <Link to="/material">物料</Link>
        <Link to="/found/123">创建</Link>
        <Link to="/">首页</Link>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/work" element={<Work/>} />
          <Route path="/material" element={<Material />} />
          <Route path="/found/:id" element={<Found/>} />
          <Route path='*' element={<h1>no found</h1>} />
        </Routes> 
      </HashRouter>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
