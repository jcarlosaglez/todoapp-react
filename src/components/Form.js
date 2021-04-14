import React from "react";
import "../css/Form.css";

const Form = (props) => {
    this.state = {
        value: ""
    }

    changeValue = e => {
        this.setState({
            value: e.target.value
        })
    }

    return (
        <form className="form" onSubmit={(e) => props.addTask(e)}>
            <input type="text"
                className="input"
                placeholder="Agrega una tarea..."
                onChange={changeValue}
            />
            <button className="button">Guardar</button>
        </form>
    )
}

export default Form;