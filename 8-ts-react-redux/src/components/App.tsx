import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, Todo } from '../store/actions'
import { StoreState } from '../store/reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((e: Todo) => {
      return <div key={e.id}> {e.title} </div>
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
