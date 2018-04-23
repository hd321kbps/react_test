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

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.initiallyChecked
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        // console.log(event);
        this.setState({checked: !this.state.checked});
    }
    render() {
        return (
            <button className="checkbox icon" onClick={this.handleClick}>
                <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        );
    }
}

Checkbox.propTypes = {
    initiallyChecked: PropTypes.bool.isRequired
};

export default Checkbox;