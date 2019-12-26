import React, { Component } from 'react'; 
import './Todo.css';

class Todo extends Component {
    render(){
        return(
            <div className='todo-item'> {this.props.todoItem} 
            <span className='todo-icons'><i className="fas fa-pen"></i> <i className="fas fa-trash"></i></span>
            </div>
            )
    }
}

export default Todo; 