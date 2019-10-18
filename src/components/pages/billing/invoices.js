import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Table } from 'antd'

export default class invoices extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        const columns = [
            {
                title: <div className="from"><p>Order Id</p></div>,
                dataIndex: 'OrderId',
            },
            {
                title: <div className="from"><p>Ordered Date</p></div>,
                dataIndex: 'OrderedDate',
            },
            {
                title: <div className="from"><p>Ammount</p></div>,
                dataIndex: 'Amount',
            },
        ];
        const data = [
            {
                key: '1',
                OrderId:
                    <div className="billing-data">
                        <p> #192351462</p>
                    </div>,
                OrderedDate: <div className="billing-data">
                    <p>3/9/2019</p>
                </div>,
                Amount: <div className="billing-data">
                    <p>$99.00</p>
                </div>,
            },
            {
                key: '1',
                OrderId:
                    <div className="billing-data">
                        <p>  #192351462</p>
                    </div>,
                OrderedDate: <div className="billing-data">
                    <p>  3/9/2019</p>
                </div>,
                Amount: <div className="billing-data">
                    <p> $99.00</p>
                </div>,
            },
            {
                key: '1',
                OrderId:
                    <div className="billing-data">
                        <p>  #192351462</p>
                    </div>,
                OrderedDate: <div className="billing-data">
                    <p>  3/9/2019</p>
                </div>,
                Amount: <div className="billing-data">
                    <p> $99.00</p>
                </div>,
            },
        ];
        return (
            <div>
                <Row gutter={24}>
                    <Col span={24}>
                        <Row gutter={24} type="flex" >
                            <Col xs={24} md={24} lg={24} >
                                <div >
                                    <Col xs={24} md={12} lg={12} >
                                        <div className="Billing-cntr">
                                            <Table pagination={false}
                                                columns={columns}
                                                dataSource={data} size="middle" />
                                        </div>
                                    </Col>
                                    <Col xs={24} md={12} lg={12}>
                                        <div className="invoice-cntr">
                                            <div className="aftr-border">
                                                <Col xs={24} md={8} lg={8} >
                                                    <div className="from">
                                                        <p>  Package Name</p>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={16} lg={16}>
                                                    <div className="billing-data">
                                                        <p>  CatchLetter Pro LTD</p>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="aftr-border">
                                                <Col xs={24} md={8} lg={8} >
                                                    <div className="from">
                                                        <p>  Package Price</p>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={16} lg={16}>
                                                    $99
                                                </Col>
                                            </div>
                                            <div className="aftr-border">
                                                <Col xs={24} md={8} lg={8} >
                                                    <div className="from">
                                                        <p>  Package Validity</p>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={16} lg={16}>
                                                    <div className="billing-data">
                                                        <p>  Lifetime</p>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="aftr-border">
                                                <Col xs={24} md={8} lg={8} >
                                                    <div className="from">
                                                        <p>  Package Information</p>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={16} lg={16}>
                                                    <div className="billing-data">
                                                        <p>  CatchLetter Pro LTD</p>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div>
                                                <Col xs={24} md={8} lg={8} >
                                                    <div>
                                                        <div className="from">
                                                            <p>  Package Name</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={24} md={16} lg={16}>
                                                    <div className="aftr-border">
                                                        <div className="billing-data">
                                                            <p>   100 websites monitored 24/7</p>
                                                        </div>
                                                    </div>
                                                    <div className="aftr-border">
                                                        <div className="billing-data">
                                                            <p>    1 x Monthly summary email roundup Get a roundup of all emails we've received in the last month</p>
                                                        </div>
                                                    </div>
                                                    <div className="aftr-border">

                                                        <div className="billing-data">
                                                            <p> 1 x weekly summary email roundup Get a roundup of all emails we've received in the last month</p>
                                                        </div>
                                                    </div>
                                                    <div className="aftr-border">
                                                        <div className="billing-data">
                                                            <p>   Lifetime email retention</p>
                                                        </div>

                                                    </div>
                                                    <div className="aftr-border">
                                                        <div className="billing-data">
                                                            <p>  All emails captured and available to your entire team (Coming Soon)</p>
                                                        </div>
                                                    </div>

                                                    <div className="aftr-border">
                                                        <div className="billing-data">
                                                            <p>   Competitor email analytics
</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="billing-data">
                                                            <p>  All Future Updates
</p>
                                                        </div>

                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
