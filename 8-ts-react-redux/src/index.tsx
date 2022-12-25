import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
  render() {
    return <div> hi there </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
