import React from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

class App extends React.Component {
    state = {
        todos: [
            {title: "Tarea 1", done: true},
            {title: "Tarea 2", done: false},
            {title: "Tarea 3", done: true},
            {title: "Tarea 4", done: false},
            {title: "Tarea 5", done: true},
        ],
        countFinished: 0
    }

    componentDidMount() {
        /* const copyState = [...this.state.todos];

        const len = copyState.length - 1;
        copyState[len].done = !copyState[len].done;

        this.setState({todos: copyState}) */
        this.updateFinishedTasks();
    }

    /* handleClick = e => {
        this.setState({
            todos: [
                {title: "Tarea 1", done: true},
                {title: "Tarea 2", done: false},
                {title: "Tarea 3", done: true},
                {title: "Tarea 4", done: false},
                {title: "Tarea 5", done: true},
            ]
        });
    } */

    toggleTask = (e, index) => {
        const copyState = [...this.state.todos];
        // console.log(copyState[index]);

        copyState[index].done = !copyState[index].done;
        // console.log(copyState[index]);

        this.setState({todos: copyState}, () => this.updateFinishedTasks());
    }

    removeTask = (e, index) => {
        let copyState = [...this.state.todos];
        // console.log(copyState[index]);

        copyState.splice(index, 1);
        // console.log(copyState[index]);

        // console.log(copyState)
        this.setState({todos: copyState}, () => this.updateFinishedTasks());
        
    }

    addTask = (e) => {
        let tasks = [...this.state.todos];
        // Lo que reciba addTask se guarda en title
        let title = e;
        
        const exist = tasks.find(e => title.toLowerCase() === e.title.toLowerCase());

        if (exist) {
            alert(`La tarea "${title}" se encuentra dentro de las tareas por hacer!`);

            return false;
        }

        tasks.push({ title, done: false });
    
        this.setState({
            todos: tasks
        }, () => this.updateFinishedTasks());

        return true;
    }

    updateFinishedTasks = () => {
        const finishedTasks = this.state.todos.filter(task => task.done === true);
        this.setState({countFinished: finishedTasks.length});
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card frame">
                    <Header
                        count={this.state.todos.length}
                        countFinished={this.state.countFinished}
                    />
                    <TodoList
                        toggleTask={this.toggleTask}
                        removeTask={this.removeTask}
                        todos={this.state.todos}
                    />
                    {/* <button onClick={this.handleClick}>Inicializar</button> */}
                    <Form addTask={this.addTask} />
                </div>
            </div>
        )
    }
}

export default App;
