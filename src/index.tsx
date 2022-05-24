import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Router from './layouts/Router'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals'
import logo from './logo.svg'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Velas',
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [velas],
  //     },
  //   },
  // },
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
