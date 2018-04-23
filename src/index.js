import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return(
        <main>
            <Header />
            <section className="todo-list">
                <Todo completed={true}/>
            </section>
            <section className="todo-list">
                <Todo title={"Изучить Redux"} completed={false}/>
            </section>
        </main>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
