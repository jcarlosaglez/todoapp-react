import React from "react";
import "../css/CheckMark.css"
import PropTypes from "prop-types";

class Checkmark extends React.Component{
    render() {
        return (  
            <span onClick={(e) => this.props.toggleTask(e, this.props.index)}>{`${this.props.isCompleted ? ":)" : ":("}`}</span>
        )
    }
}

Checkmark.propTypes = {
    isCompleted: PropTypes.bool
}

export default Checkmark;