import React from 'react'
import { injectGlobal } from 'react-emotion'
import { render } from 'react-dom'
import App from './src/app.js'
import { colors } from './src/styles.js'

injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    background: ${colors.white};
    font-family: sans-serif;
  }
`

const element = document.querySelector('#root')

render(<App />, element)
