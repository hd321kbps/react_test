import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return(
        <main>
            <Header />
            <section className="todo-list">
                {props.todos.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
            </section>
        </main>
    );
}
App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
