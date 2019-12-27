import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
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

    render() {

       const listTodos = this.state.list.map(item => (
        <Todo todoItem={item.todo} done={item.todo}/>
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