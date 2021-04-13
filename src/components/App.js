import React from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

class App extends React.Component {
    state = {
        todos: [
            /* {title: "Tarea 1", done: true},
            {title: "Tarea 2", done: false},
            {title: "Tarea 3", done: true},
            {title: "Tarea 4", done: false},
            {title: "Tarea 5", done: true}, */
        ],
        inputValue: ""
    }

    /* componentDidMount() {
        const copyState = [...this.state.todos];

        const len = copyState.length - 1;
        copyState[len].done = !copyState[len].done;

        this.setState({todos: copyState})
    } */

    handleClick = e => {
        this.setState({
            todos: [
                {title: "Tarea 1", done: true},
                {title: "Tarea 2", done: false},
                {title: "Tarea 3", done: true},
                {title: "Tarea 4", done: false},
                {title: "Tarea 5", done: true},
            ],
            inputValue: ""
        });
    }

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

    addTask = (e, title) => {
        e.preventDefault();

        if(!title.trim()) {
            alert("No puedes agregar una tarea vacia.")
            this.setState({inputValue: ""});
            return;
        }
        
        const copyState = [...this.state.todos];
        // console.log(copyState[index]);

        const exists = copyState.some(task => task.title.toLowerCase().trim() === title.toLowerCase().trim())

        if(!exists) {
            copyState.push({
                title: title.trim(),
                done: false
            });

            this.setState({todos: copyState, inputValue: ""});
        }
        else {
            alert("La tarea ya existe.")
        }
    }

    changeValue = e => {
        // console.log(e);

        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
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
                    <button onClick={this.handleClick}>Inicializar</button>
                    <Form
                        changeValue={this.changeValue}
                        inputValue={this.state.inputValue}
                        addTask={this.addTask}
                    />
                </div>
            </div>
        )
    }
}

export default App;
