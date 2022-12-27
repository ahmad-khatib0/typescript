import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, Todo } from '../store/actions'
import { StoreState } from '../store/reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

class _App extends Component<AppProps> {
  render() {
    return (
      <div>
        <button>Fetch</button>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
