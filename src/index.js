import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        //fetch('http://localhost:3000/api/todos')
        axios.get('/api/todos')
            .then(response => response.data)
            .then(todos => this.setState({ todos }))
            .catch(this.handleError);
    }
    handleStatusChange(id) {
        axios.patch(`/api/todos/${id}`)
        .then(response => {
            const todos = this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo = response.data;
                }
                return todo;
            });
            // this.state({todos: todos});
            // ES2016
            this.setState({todos});
        })
        .catch(this.handleError);
    }
    handleAdd(title){
        //console.log(title);
        axios.post('/api/todos', {title})
        .then(response => response.date)
        .then(todo => {
            const todos = [...this.state.todos, todo];
            this.setState({todos});
        })
        .catch(this.handleError);
    }
    handleEdit(id, title) {
        axios.put(`/api/todos/${id}`, {title})
        .then(response => {
            const todos = this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo = response.data;
                }
                return todo;
            });
            this.setState({todos});
        })
        .catch(this.handleError);
    }
    handleDelete(id) {
        axios.delete(`/api/todos/${id}`)
        .then(() => {
            const todos = this.state.todos.filter(todo => todo.id !== id);
            this.setState({todos});
        })
        .catch(this.handleError);
        
    }
    handleError(error) {
        console.log(error.message);
    }
    render() {
        return(
            <main>
                <Header todos={this.state.todos} />
                <section className="todo-list">
                    {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onStatusChange={this.handleStatusChange} onDelete={this.handleDelete} onEdit={this.handleEdit}/>)}
                </section>
                <Form onAdd={this.handleAdd}/>
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
