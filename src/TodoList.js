import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoForm.css';
import uuid from 'uuid/v4';

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            list: [{todo: 'Get Haircut', done: false}, {todo: 'Laundry', done: false}, {todo: 'Milk the Cat', done: false}, {todo: 'Wash the Car', done: false},],
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(item) {
        
        const newID = uuid();

        this.setState(st => ({
            list: st.list.concat({
                todo: item, 
                done: false, 
                id: newID,
                key: newID, 
            })
        }))
    }

    removeTodo(id) {
        this.setState({list: this.state.list.filter(item => item.id !== id)})
    }

    render() {

        //Iterates over each Todo item in the state.list array and builds each Todo item to render below        
       const listTodos = this.state.list.map(item => (
        <Todo 
            todoItem={item.todo}
            done={item.done}
            id={item.id}
            removeTodo={() => this.removeTodo(item.id)}
            />
        ))


        return (

            <div>
                {listTodos}
                <TodoForm addTodo={this.addTodo}/>
            </div>
        )
    }

}


export default TodoList;