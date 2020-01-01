import React, { Component } from 'react'; 
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {isEditing: false, editingTodo: this.props.todo};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    handleUpdate(evt){
        evt.preventDefault();

        //Pass item up to TodoList
        this.props.updateTodo(this.props.id, this.state.editingTodo);
        this.setState({isEditing: false})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    editTodo() {
                
        this.setState({ isEditing: !this.state.isEditing})
    }


    render(){
        
        let displayItemState; 

        if (this.state.isEditing === false) {
            
        displayItemState = 
            
            <div className='todo-item-container'>
                <div className='todo-item-name'>{this.props.todo}</div>
                <div className='todo-item-icons'> 
                    <i className="fas fa-pen" onClick={this.editTodo}></i> 
                    <i className="fas fa-trash" onClick={this.props.removeTodo}></i> 
                </div>
            </div>
        }

        if (this.state.isEditing === true) {
            //show editing input and make pencil icon disappear
            
            displayItemState =

            <div className='todo-item-container'>
                <form onSubmit={this.handleUpdate}>
                    <input value={this.state.editingTodo} type='text' id='editingTodo' name='editingTodo' onChange={this.handleChange}></input> 
                </form>
                <div className='todo-item-icons'> 
                    <i className="fas fa-save" onClick={this.handleUpdate}></i> 
                    <i className="fas fa-trash" onClick={this.props.removeTodo}></i> 
                </div>
            </div>
        }

        return(
            <div className='todo-item'> 
            {displayItemState} 
            </div>
            )
    }
}

export default Todo; 