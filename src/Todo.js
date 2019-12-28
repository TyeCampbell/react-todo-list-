import React, { Component } from 'react'; 
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {editingTodo: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();

        //Pass item up to TodoList
        console.log(`Passing up change: ${this.state.editingTodo}`)

        this.setState({editingTodo: ''})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    render(){
        
        let displayItemState; 

        if (this.props.isEditing === false) {
            
            displayItemState = this.props.todo;
        }

        if (this.props.isEditing === true) {
            //show editing input and make pencil icon disappear
            
            displayItemState =

            <form onSubmit={this.handleSubmit}>
                <input value={this.state.editingTodo} id='editingTodo' name='editingTodo' onChange={this.handleChange}></input> 
                <button>Save</button>
            </form>

        }

        return(
            <div className='todo-item'> 
            {displayItemState} 
            <span className='todo-icons'><i className="fas fa-pen" onClick={this.props.changeEditStatus}></i> <i className="fas fa-trash" onClick={this.props.removeTodo}></i></span>
            </div>
            )
    }
}

export default Todo; 