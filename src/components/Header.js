import React from "react";
import "../css/Header.css"
import PropTypes from "prop-types";

const Header = (props) =>
    <div className="card-header">
        <h1 className="card-header-title header">
            Hay {props.count} tareas
        </h1>
        <p>{props.countFinished} de {props.count} completadas</p>
    </div>

Header.prototypes = {
    count: PropTypes.number.isRequired
}

export default Header;