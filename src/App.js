import React, { Component } from 'react'
import { Provider } from 'react-redux'
import FilmList from './containers/FilmList'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FilmList /> 
      </Provider>
    )
  }
}