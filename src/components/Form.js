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
        this.props.addTask(this.state.value);
        this.setState({ value: '' });
    }

    render(){
        return (
            <div>
                <form className="form">
                    <input type="text"
                        className="input"
                        placeholder="Agrega una tarea..."
                        onChange={this.changeValue}
                        value={this.state.value}
                    />
                </form>
                <button className="button" onClick={this.handleSubmit}>Guardar</button> 
            </div>
        )
    }
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default Form;