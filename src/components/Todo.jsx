import React from 'react';

import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log('constructor');
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps');
    //     console.log('nextProps', nextProps);
    // }
    // componentWillUpdate(nextProps, nextState){
    //     console.log('componentWillUpdate');
    //     console.log('nextProps', nextProps);
    //     console.log('nextState', nextState);
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate');
    //     console.log('nextProps', nextProps);
    //     console.log('nextState', nextState);
    //     return false; // Должно лименяться состояние
    // }
    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    // componentDidUpdate(prevProps, prevState){
    //     console.log('componentDidUpdate');
    //     console.log('prevProps', prevProps);
    //     console.log('prevState', prevState);
    // }
    // componentWillUnmount(){
    //     console.log('componentWillUnmount');
    // }
    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);
        this.setState({editing: false});
    }
    renderDisplay() {
        return (
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox checked={this.props.completed} onChange={() => this.props.onStatusChange(this.props.id)}/>
                <span className="todo-title">{this.props.title}</span>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({editing:true})}/>
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
            </div>
        );
    }
    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title}/>
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    }
    render() {
        // console.log('render');
        return this.state.editing ? this.renderForm() : this.renderDisplay();        
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};
export default Todo;