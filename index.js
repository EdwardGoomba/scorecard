import React from 'react'
import { render } from 'react-dom'
import { Proivder } from 'react-redux'
import { createStore } from 'redux'
import PlayerReducer from './src/reducers/player'
import Scoreboard from './src/containers/Scoreboard'

const store = createStore(
  PlayerReducer
)

render(
  <Provider store={store}>
    <Scoreboard />
  </ Provider>,
  document.getElementById('root')
)
