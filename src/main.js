import React from 'react'
import { render } from 'react-dom'
import AppTitle  from './AppTitle'
import MyAppLab1 from './MyAppLab1'
import MyAppLab2  from './MyAppLab2'

render(<AppTitle />, document.getElementById('apptitle'))
render(<MyAppLab2 />, document.getElementById('Lab2'))
render(<MyAppLab1 />, document.getElementById('Lab1'))