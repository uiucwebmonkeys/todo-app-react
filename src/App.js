import React, { Component } from 'react';
import './App.css';

import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: '',
      lastID: 0,
    };
  }

  handleChange = (event) => {
    this.setState({newTodo: event.target.value});
  }

  handleSubmission = (event) => {
    if (event.key === 'Enter') {
      this.setState((prevState) => {
        const nextID = prevState.lastID + 1;
        const nextTodo = {
          id: nextID,
          title: prevState.newTodo,
          completed: false,
        };

        return {
          todos: prevState.todos.concat([nextTodo]),
          newTodo: '',
          lastID: nextID,
        };
      });
    }
  }

  toggleCompleteness = (id) => {
    this.setState(prevState => {
      const copy = prevState.todos.map(todo => {
        const todoCopy = Object.assign({}, todo);
        if (todo.id === id) {
          todoCopy.completed = !todo.completed;
        }
        return todoCopy;
      });

      return { todos: copy };
    });
  }

  destroy = (id) => {
    this.setState(prevState => {
      const filtered = prevState.todos.filter(todo => todo.id !== id);
      return { todos: filtered }
    });
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

          <List
            items={this.state.todos}
            toggleComplete={this.toggleCompleteness}
            destroy={this.destroy}
          />
        </main>
      </section>
    );
  }
}

export default App;
