import React, { Component } from 'react';
import './TodoHeader.css'; 

class TodoHeader extends Component {
    render() {
        return(
            <div className='todolist-header-container'>
                <div className='todolist-header'>
                    <h1>My Todo List</h1>
                    <p>A simple React App</p>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default TodoHeader;