import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoForm.css';
import uuid from 'uuid/v4';

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            list: [{todo: 'Get Haircut', done: false, isEditing: false, id: '00123', key: '00123'}, {todo: 'Laundry', done: false, isEditing: false, id: '00124', key: '00124'}, {todo: 'Milk the Cat', done: false,  isEditing: false, id: '001255', key: '001255'}, {todo: 'Wash the Car', done: false,  isEditing: false, id: '001266', key: '001266'},],
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(item) {
        
        const newID = uuid();

        this.setState(st => ({
            list: st.list.concat({
                todo: item, 
                done: false,
                isEditing: false, 
                id: newID,
                key: newID, 
            })
        }))
    }

    removeTodo(id) {
        this.setState({list: this.state.list.filter(item => item.id !== id)})
    }

    changeEditStatus(bool) {
        const itemBool = {...this.state.list}
        console.log(itemBool[0].todo)
    }

    render() {

        //Iterates over each Todo item in state.list array and builds each Todo item to render below        
       const listTodos = this.state.list.map(item => (
        <Todo 
            todo={item.todo}
            done={item.done}
            isEditing={item.isEditing}
            id={item.id}
            key={item.key}
            removeTodo={() => this.removeTodo(item.id)}
            changeEditStatus={() => this.changeEditStatus(item.isEditing)}
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