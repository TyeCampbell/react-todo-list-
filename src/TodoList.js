import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div>
                <Todo todoItem='Get This Done'/>
            </div>
        )
    }

}


export default TodoList;