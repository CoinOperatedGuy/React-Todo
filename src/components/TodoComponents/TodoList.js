import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='list-container'>
            <div className='list'>
            {props.items.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            </div>
            <button onClick={props.clearCompleted} className='button'>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;