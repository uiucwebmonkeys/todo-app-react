import React, { Component } from 'react';
import './App.css';

import List from './List.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: '',
      todos: [],
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleSubmission = (event) => {
    if (event.key === 'Enter') {
      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat([prevState.newTodo]),
          newTodo: '',
        };
      });
    }
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <main>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange}
            onKeyUp={this.handleSubmission}
            autoFocus
          />

          <List items={this.state.todos} />
        </main>
      </section>
    );
  }
}

export default App;
