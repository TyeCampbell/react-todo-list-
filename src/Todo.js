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
            
        displayItemState = 
            
            <div className='todo-item-container'>
                <div className='todo-item-name'>{this.props.todo}</div>
                <div className='todo-item-icons'> 
                    <i className="fas fa-pen" onClick={this.props.changeEditStatus}></i> 
                    <i className="fas fa-trash" onClick={this.props.removeTodo}></i> 
                </div>
            </div>
        }

        if (this.props.isEditing === true) {
            //show editing input and make pencil icon disappear
            
            displayItemState =

            <div className='todo-item-container'>
                <form>
                    <input value={this.state.editingTodo} id='editingTodo' name='editingTodo' onChange={this.handleChange}></input> 
                </form>
                <div className='todo-item-icons'> 
                    <i className="fas fa-save" onClick={this.handleSubmit}></i> 
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