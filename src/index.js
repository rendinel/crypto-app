import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    {/* 01 we pass the store we create inside store .js as a props so all the app can access is data */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
