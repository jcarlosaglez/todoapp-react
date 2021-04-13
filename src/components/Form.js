import React from "react";
import "../css/Form.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form" onSubmit={(e) => this.props.addTask(e, this.props.inputValue)}>
                <input type="text"
                    className="input"
                    placeholder="Agrega una tarea..."
                    onChange={e => this.props.changeValue(e)}
                    value={this.props.inputValue}
                />
                <button className="button">Guardar</button>
            </form>
        )
    }
}

export default Form;