import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'antd/dist/antd.min.css'

ReactDOM.render(<App user='test' />, document.getElementById('root'))

if (module.hot) module.hot.accept()