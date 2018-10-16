import React, { Component } from 'react';

class ListItem extends Component {
  handleChange = () => {
    this.props.toggleComplete(this.props.id);
  }

  destroy = () => {
    this.props.destroy(this.props.id);
  }

  render() {
    return (
      <li data-id={this.props.id} className={this.props.completed ? 'completed' : 'not-complete'}>
        <div className="todo-item">
          <input className="toggle" type="checkbox" onChange={this.handleChange} />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.destroy}>Remove</button>
        </div>
      </li>
    );
  }
};

class List extends Component {
  render() {
    const items = this.props.items.map(todo => {
      return (
        <ListItem
          key={todo.title + todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleComplete={this.props.toggleComplete}
          destroy={this.props.destroy}
        />
      );
    });

    return (
      <ul className="todo-list">
        { items }
      </ul>
    );
  }
}

export default List;
