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
        ]
    }

    /* componentDidMount() {
        const copyState = [...this.state.todos];

        const len = copyState.length - 1;
        copyState[len].done = !copyState[len].done;

        this.setState({todos: copyState})
    } */

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

        this.setState({todos: copyState});
    }

    removeTask = (e, index) => {
        const copyState = [...this.state.todos];
        // console.log(copyState[index]);

        copyState.splice(index, 1);
        // console.log(copyState[index]);

        this.setState({todos: copyState});
    }

    addTask = (e) => {
        // Lo que reciba addTask se guarda en title
        let title = e;
        
        const exist = this.state.todos.find(e => title.toLowerCase() === e.title.toLowerCase());

        if (exist) {
            alert(`La tarea "${title}" se encuentra dentro de las tareas por hacer!`);
            return false;
        }
    
        this.setState({
            todos : this.state.todos.concat([{ title, done: false }])
        });

        return true;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="card frame">
                    <Header count={this.state.todos.length}/>
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
