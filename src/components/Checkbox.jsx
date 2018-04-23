import React from 'react';
import PropTypes from 'prop-types';

// const Checkbox = React.createClass({
//     propTypes: {
//         initiallyChecked: PropTypes.bool.isRequired
//     },
//     getDefaultProps() {
//         return {
//             initiallyChecked: false
//         };
//     },
//     getInitialState() {
//         return {
//             checked: this.props.initiallyChecked
//         };
//     },
//     handleClick(event) {
//         // console.log(event);
//         this.setState({checked: !this.state.checked});
//     },
//     // Старый способ
//     // render: function() {}
//     // Новый
//     render() {
//         return (
//             <button className="checkbox icon" onClick={this.handleClick}>
//                 <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
//             </button>
//         );
//     }
// });

function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.onChange}>
            <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;