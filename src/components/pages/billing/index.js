import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
import Packages from './packages'
import Invoices from './invoices'
import CompanyInfo from './company_info';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <div className="custom-container">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<div className="app-hdng"><h3>Packages</h3></div>} key="1">
                        <Packages />
                    </TabPane>
                    <TabPane tab={<div className="app-hdng"><h3>Invoices</h3></div>} key="2">
                        <Invoices />
                    </TabPane>
                    <TabPane tab={<div className="app-hdng"><h3>Company Information</h3></div>} key="3">
                        <CompanyInfo />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
