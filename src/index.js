import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function App(props) {
    console.log(props);
    return(
        <main>
            <header>
                <h1>{props.title}</h1>
            </header>
            <section className="todo-list">
                <div className="todo">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box_outline_blank</i>
                    </button>
                    <span className="todo-title">Изучить React</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
            <section className="todo-list">
                <div className="todo completed">
                    <button className="checkbox icon">
                        <i className="material-icons">check_box</i>
                    </button>
                    <span className="todo-title">Изучить Redux</span>
                    <button className="delete icon">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </main>
    );
}
// App.propTypes = {
//     title: PropTypes.string.isRequired
// };
App.propTypes = {
    title: PropTypes.string
};
App.defaultProps = {
    title: 'React TODO'
};
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App title={"React TODO"}/>, document.getElementById('root'));
