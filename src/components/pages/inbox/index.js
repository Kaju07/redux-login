import React, { Component } from 'react';
import { Row, Col, Pagination } from 'antd';
import Emaillist from "../dashboard/emaillist"

export default class Index extends Component {
    render() {
        return (
            <div>
                <Row style={{marginBottom:'-70px'}} className="custom-container app-hdng">
                    <h2>Inbox</h2>
                </Row>
                <Emaillist />
            </div>

        )
    }
}
