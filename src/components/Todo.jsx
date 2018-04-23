import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
    return (
        <div className="todo">
            <Checkbox checked={props.completed} />
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete" />
        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

Todo.defaultProps = {
    title: 'Изучить React'
};

export default Todo;