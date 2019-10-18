import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import rotateAction from "actions/rotateAction";

class Addwebsite extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                sdfsf
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    rotateAction: (payload) => dispatch(rotateAction(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Addwebsite);

