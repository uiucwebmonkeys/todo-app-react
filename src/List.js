import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
        <li data-id="{{id}}" className="{{completed}}">
            <div className="todo-item">
            <input className="toggle" type="checkbox" />
            <label>{this.props.title}</label>
            <button className="destroy">Remove</button>
            </div>
        </li>
    );
  }
}

class List extends Component {
  render() {
    const listItems = this.props.items.map(todo => {
      return <ListItem title={todo} />;
    });

    return (
      <ul className="todo-list">
        { listItems }
      </ul>
    );
  }
};

export default List;