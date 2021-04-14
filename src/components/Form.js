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
        if(this.state.value !== ""){
            e.preventDefault();
            this.props.addTask(this.state.value);
            this.setState({ value: '' });
        } else{
            alert("No escribio nada");
            e.preventDefault();
        }
    }
    onKeyUp(event) {
        if (event.key === "Enter") {
          this.buttonSubmit();
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
                    // onKeyPress={this.onKeyUp}

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