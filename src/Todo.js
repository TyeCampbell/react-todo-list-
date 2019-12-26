import React, { Component } from 'react'; 
import './Todo.css';

class Todo extends Component {
    render(){
        return(
            <div className='todo-item'> {this.props.todoItem} 
            <span className='todo-icons'><i class="fas fa-pen"></i> <i class="fas fa-trash"></i></span>
            </div>
            )
    }
}

export default Todo; 