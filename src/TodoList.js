import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import './TodoList.css';
import uuid from 'uuid/v4';

const testDataAPI = [{todo: 'Get Haircut', id: '00123', key: '00123'}, {todo: 'Laundry', id: '00124', key: '00124'}, {todo: 'Milk the Cat',  id: '001255', key: '001255'}, {todo: 'Wash the Car',  id: '001266', key: '001266'}];

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {list: [] }
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }


    addTodo(item) {
        
        const newID = uuid();

        this.setState(st => ({
            list: st.list.concat({
                todo: item, 
                id: newID,
                key: newID, 
            })
        }))

    }

    removeTodo(id) {
        this.setState({list: this.state.list.filter(item => item.id !== id)})
    }

    updateTodo(id, updatedTodo) {

        const updatedTodoList = this.state.list.map(item => {
            if (item.id === id) { 
                return {...item, todo: updatedTodo}
            } 
            return item;
        });
        this.setState({list: updatedTodoList});
    
    }

    componentDidUpdate() {
        localStorage.setItem('list', JSON.stringify(this.state.list))
    }

    componentDidMount() {
        const savedList = localStorage.getItem('list')

        if (savedList !== null) {
            this.setState({list: JSON.parse(savedList)})
        }
    }

    render() {

        //Iterates over each Todo item in state.list array and builds each Todo item to render below        
       const listTodos = this.state.list.map(item => (
        <Todo 
            todo={item.todo}
            id={item.id}
            key={item.key}
            removeTodo={() => this.removeTodo(item.id)}
            updateTodo={this.updateTodo}
            />
        ))


        return (

            <div className='todolist-container'>
                <TodoHeader/>
                {listTodos}
                <TodoForm addTodo={this.addTodo}/>
            </div>
        )
    }

}


export default TodoList;