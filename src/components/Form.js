import React from "react";
import PropTypes from "prop-types";
import "../css/Form.css";

class Form extends React.Component {

    state = { value: '' }

    changeValue = (e) => {
        this.setState({ value: e.target.value });
        console.log(this.value)
    }

    buttonSubmit = (e) => {
        e.preventDefault();
        const newTask = this.state.value.trim();
        if(newTask !== "") {
            if(this.props.addTask(newTask)) {
                this.setState({ value: '' });
            }
        }
        else{
            alert("No escribio nada.");
        }
    }

    render(){
        return (  
            <form className="form" onSubmit={this.buttonSubmit}>
                <input type="text"
                    className="input"
                    placeholder="Agrega una tarea..."
                    onChange={this.changeValue}
                    value={this.state.value}
                />
                <button className="button">Guardar</button>     
            </form>
        )
    }
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default Form;