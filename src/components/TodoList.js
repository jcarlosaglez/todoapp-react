import React from "react";
import "../css/TodoList.css";
import Todo from "./Todo";
import PropTypes from "prop-types";

function TodoList(props) {
    return (
        <div className="list-wrapper">
            {/* <Todo isCompleted={true} otraPropiedad={{pro1: "jsjs", prop2: true}}/>
            <Todo/>
            <Todo isCompleted={true}/>
            <Todo/>
            <Todo/>
            <Todo isCompleted={true}/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/> */}
            {
                props.todos.map((e, i) => 
                    <Todo
                        toggleTask={props.toggleTask}
                        removeTask={props.removeTask}
                        key={i}
                        index={i}
                        title={e.title}
                        isCompleted={e.done}
                    />)
            }
        </div>
    )
}

/* class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [1,2,3,4,5,6,7,8,9,0]
        }
    }

    state = {
        tasks: [1,2,3,4,5,6,7,8,9,0]
    }

    render() {
        return (
            <div className="list-wrapper">
                {this.state.tasks.map(() => <Todo />)}
            </div>
        )
    }
} */

/* TodoList.defaultProps = {
    todos: []
} */

TodoList.propTypes = {
    todos: PropTypes.arrayOf( 
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        })
    ).isRequired
}

export default TodoList;