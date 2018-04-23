import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.initialData
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        // this.state({todos: todos});
        // ES2016
        this.setState({todos});
    }
    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos});
    }
    render() {
        return(
            <main>
                <Header todos={this.state.todos} />
                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onStatusChange={this.handleStatusChange} onDelete={this.handleDelete}/>)}
                </section>
            </main>
        );
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));
