import React, { Component } from 'react'; 
import './Todo.css';

class Todo extends Component {
    render(){
        return(
            <div className='todo-item'> {this.props.todoItem} </div>
            )
    }
}

export default Todo; 