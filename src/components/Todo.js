import React from "react";
import PropTypes from "prop-types";
import Checkmark from "./Checkmark";
import "../css/Todo.css";

class Todo extends React.Component{
    /* constructor(props) {
        super(props);

        this.state = {
            isCompleted: this.props.isCompleted,
            title: this.props.title,
            index: this.props.index
        }
    } */

    render() {
        return (  
            <div className="list-item">
                {/* <input type="checkbox" name="completed" checked={this.state.isCompleted} onChange={this.toggle} id=""/> */}
                <p className={`task ${this.props.isCompleted ? 'done' : ''}`}>
                    {this.props.title}
                </p>
                <Checkmark
                    toggleTask={this.props.toggleTask}
                    isCompleted={this.props.isCompleted}
                    index={this.props.index}
                />
                <button className="delete" onClick={(e) => this.props.removeTask(e, this.props.index)}/>
            </div>
        )
    }

    /* removeTask = (e) => {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    } */

    /* toggle = (e) => {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    } */
}

Todo.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
    // isCompleted: PropTypes.bool.isRequired
}

export default Todo;