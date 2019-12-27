import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state = {newTodoItem:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        
        //add to ToDo List State array
        this.props.addTodo(this.state.newTodoItem);

        this.setState({
            newTodoItem: '',
        })

    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,  
        })
    }

    render(){
        return (
            <div className='todo-form'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='newTodo'>New Todo</label>
                    <input value={this.state.newTodoItem} id='newTodo' name='newTodoItem' placeholder='New Todo' onChange={this.handleChange}></input>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;