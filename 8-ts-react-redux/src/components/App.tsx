import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, fetchTodos, Todo } from '../store/actions'
import { StoreState } from '../store/reducers'

interface AppProps {
  todos: Todo[]
  // fetchTodos : typeof fetchTodos ;
  fetchTodos: Function // this is just a workaround, because of that fetchTodos returns a THUNK
  // action , not a normal action like deleteTodo does, so the issue is comming from the connect
  // react-redux function, it has no Logic to handle a Promise<void> action that is returned from thunk
  deleteTodo: typeof deleteTodo
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((e: Todo) => {
      return (
        <div key={e.id} onClick={() => this.onTodoClick(e.id)}>
          {' '}
          {e.title}{' '}
        </div>
      )
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
